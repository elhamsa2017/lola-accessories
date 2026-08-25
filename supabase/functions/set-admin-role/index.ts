// @ts-nocheck
import { createClient } from "jsr:@supabase/supabase-js@2";
import { serve } from "https://deno.land/std@0.224.0/http/server.ts";

const TARGET_EMAIL = "hagarhosnymohamed1998@gmail.com";
const PAGE_SIZE = 1000;

const jsonResponse = (body, status = 200) =>
  new Response(JSON.stringify(body), {
    status,
    headers: { "Content-Type": "application/json" },
  });

serve(async (request) => {
  if (request.method !== "POST") {
    return jsonResponse({ error: "Method not allowed" }, 405);
  }

  const expectedSecret = Deno.env.get("ADMIN_BOOTSTRAP_SECRET");
  const providedSecret = request.headers.get("x-admin-bootstrap-secret");
  if (!expectedSecret || !providedSecret || providedSecret !== expectedSecret) {
    return jsonResponse({ error: "Unauthorized" }, 401);
  }

  const authorization = request.headers.get("Authorization");
  const accessToken = authorization?.replace(/^Bearer\s+/i, "");
  if (!accessToken) {
    return jsonResponse({ error: "Authorization token is required" }, 401);
  }

  const supabaseUrl = Deno.env.get("SUPABASE_URL");
  const serviceRoleKey = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY");
  if (!supabaseUrl || !serviceRoleKey) {
    return jsonResponse({ error: "Server configuration is incomplete" }, 500);
  }

  const adminClient = createClient(supabaseUrl, serviceRoleKey, {
    auth: { autoRefreshToken: false, persistSession: false },
  });

  const { data: callerData, error: callerError } = await adminClient.auth.getUser(
    accessToken,
  );
  if (callerError || callerData.user?.email?.toLowerCase() !== TARGET_EMAIL) {
    return jsonResponse({ error: "Forbidden" }, 403);
  }

  let targetUser;
  let page = 1;
  do {
    const { data, error } = await adminClient.auth.admin.listUsers({
      page,
      perPage: PAGE_SIZE,
    });
    if (error) {
      return jsonResponse({ error: "Unable to find the user" }, 500);
    }

    targetUser = data.users.find(
      (user) => user.email?.toLowerCase() === TARGET_EMAIL,
    );
    if (targetUser || data.users.length < PAGE_SIZE) break;
    page += 1;
  } while (true);

  if (!targetUser) {
    return jsonResponse({ error: "Target user was not found" }, 404);
  }

  const { error: updateError } = await adminClient.auth.admin.updateUserById(
    targetUser.id,
    {
      app_metadata: {
        ...(targetUser.app_metadata ?? {}),
        role: "admin",
      },
    },
  );
  if (updateError) {
    return jsonResponse({ error: "Unable to update app metadata" }, 500);
  }

  return jsonResponse({
    success: true,
    message: "Admin role added to app_metadata",
  });
});
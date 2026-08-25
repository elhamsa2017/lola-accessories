const SUPABASE_URL = 'https://iaoiceuwnszdjmagqxlh.supabase.co';

const SUPABASE_ANON_KEY = 'sb_publishable_KkPJs74aX1HCgzB7pziwwQ_ckiJ56b7';

const supabaseClient = window.supabase.createClient(
    SUPABASE_URL,
    SUPABASE_ANON_KEY
);
window.supabaseClient = supabaseClient;
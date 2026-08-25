(() => {
    const profileColumns = 'id, full_name, email, phone, address, created_at';

    async function getSession() {
        const { data, error } = await supabaseClient.auth.getSession();
        if (error) throw error;
        return data.session;
    }

    async function signUp({ name, email, phone, password }) {
        const credentials = email ? { email } : { phone };
        const { data, error } = await supabaseClient.auth.signUp({
            ...credentials,
            password,
            options: { data: { full_name: name, phone } }
        });
        if (error) throw error;
        if (data.user && data.session) {
            await saveProfile({ id: data.user.id, full_name: name, email: email || null, phone: phone || null });
        }
        return data;
    }

    async function signIn(identifier, password) {
        const credentials = identifier.includes('@')
            ? { email: identifier }
            : { phone: identifier };
        const { data, error } = await supabaseClient.auth.signInWithPassword({ ...credentials, password });
        if (error) throw error;
        return data;
    }

    async function saveProfile(profile) {
        const { data, error } = await supabaseClient
            .from('profiles')
            .upsert(profile, { onConflict: 'id' })
            .select(profileColumns)
            .single();
        if (error) throw error;
        return data;
    }

    async function getProfile(userId) {
        const { data, error } = await supabaseClient
            .from('profiles')
            .select(profileColumns)
            .eq('id', userId)
            .maybeSingle();
        if (error) throw error;
        return data;
    }

    async function getProfiles() {
        const { data, error } = await supabaseClient
            .from('profiles')
            .select(profileColumns)
            .order('created_at', { ascending: false });
        if (error) throw error;
        return data || [];
    }

    async function signOut() {
        const { error } = await supabaseClient.auth.signOut();
        if (error) throw error;
    }

    window.authStorage = { getSession, signUp, signIn, saveProfile, getProfile, getProfiles, signOut };
})();

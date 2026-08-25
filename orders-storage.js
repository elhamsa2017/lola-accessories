(() => {
    async function getOrders() {
        const { data, error } = await supabaseClient
            .from('orders')
            .select('*')
            .order('created_at', { ascending: false });
        if (error) throw error;
        return data || [];
    }

    async function createOrder(order) {
        const { data, error } = await supabaseClient
            .from('orders')
            .insert(order)
            .select()
            .single();
        if (error) throw error;
        return data;
    }

    async function updateOrderStatus(id, status) {
        const { data, error } = await supabaseClient
            .from('orders')
            .update({ status })
            .eq('id', id)
            .select()
            .single();
        if (error) throw error;
        return data;
    }

        async function getMyOrders(userId) {
            const { data, error } = await supabaseClient
                .from('orders')
                .select('*')
                .eq('user_id', userId)
                .order('created_at', { ascending: false });
            if (error) throw error;
            return data || [];
        }

        window.orderStorage = { getOrders, getMyOrders, createOrder, updateOrderStatus };
})();

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

        async function getOrderById(orderId) {
            const normalizedOrderId = String(orderId).trim().replace(/^#?/, '#');
            const { data, error } = await supabaseClient.rpc('get_order_by_id', {
                p_order_id: normalizedOrderId
            });
            if (error) {
                const fallback = await supabaseClient
                    .from('orders')
                    .select('*')
                    .eq('id', normalizedOrderId)
                    .maybeSingle();
                if (fallback.error) throw error;
                return fallback.data || null;
            }
            return Array.isArray(data) ? data[0] || null : data || null;
        }

        window.orderStorage = { getOrders, getMyOrders, getOrderById, createOrder, updateOrderStatus };
})();

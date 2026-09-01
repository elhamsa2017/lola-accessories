(() => {
    async function getProducts() {
        const { data, error } = await supabaseClient
            .from('products')
            .select('id, name, category, price, discount_enabled, discount_price, stock, status, description, imageUrl')
            .order('id', { ascending: false });

        if (error) {
            console.error('Supabase getProducts error:', error);
            throw error;
        }

        return data || [];
    }

    async function saveProducts(products) {
        if (!Array.isArray(products) || !products.length) return [];

        const { data, error } = await supabaseClient
            .from('products')
            .upsert(products, { onConflict: 'id' })
            .select();

        if (error) {
            console.error('Supabase saveProducts error:', error);
            throw error;
        }

        return data || [];
    }

    async function addProduct(product) {
        const { error } = await supabaseClient
            .from('products')
            .insert(product);

        if (error) {
            console.error('Supabase addProduct error:', error);
            throw error;
        }

        return product;
    }

    async function updateProduct(id, product) {
        const { error } = await supabaseClient
            .from('products')
            .update(product)
            .eq('id', id);

        if (error) {
            console.error('Supabase updateProduct error:', error);
            throw error;
        }

        return product;
    }

    async function deleteProduct(id) {
        const { error } = await supabaseClient
            .from('products')
            .delete()
            .eq('id', id);

        if (error) {
            console.error('Supabase deleteProduct error:', error);
            throw error;
        }
    }

    window.productStorage = {
        getProducts,
        saveProducts,
        addProduct,
        updateProduct,
        deleteProduct
    };
})();
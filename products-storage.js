(() => {
    const DB_NAME = 'lola-accessories-db';
    const STORE_NAME = 'products';
    const DB_VERSION = 1;

    function openDatabase() {
        return new Promise((resolve, reject) => {
            const request = indexedDB.open(DB_NAME, DB_VERSION);
            request.onupgradeneeded = () => request.result.createObjectStore(STORE_NAME, { keyPath: 'id' });
            request.onsuccess = () => resolve(request.result);
            request.onerror = () => reject(request.error);
        });
    }

    async function getProducts(fallback = []) {
        try {
            const database = await openDatabase();
            const products = await new Promise((resolve, reject) => {
                const request = database.transaction(STORE_NAME, 'readonly').objectStore(STORE_NAME).getAll();
                request.onsuccess = () => resolve(request.result);
                request.onerror = () => reject(request.error);
            });
            database.close();
            if (products.length) return products;

            const saved = localStorage.getItem('lola-accessories-products');
            const legacyProducts = saved ? JSON.parse(saved) : fallback;
            await saveProducts(legacyProducts);
            return legacyProducts;
        } catch {
            try {
                const saved = localStorage.getItem('lola-accessories-products');
                return saved ? JSON.parse(saved) : fallback;
            } catch {
                return fallback;
            }
        }
    }

    async function saveProducts(products) {
        const database = await openDatabase();
        await new Promise((resolve, reject) => {
            const transaction = database.transaction(STORE_NAME, 'readwrite');
            const store = transaction.objectStore(STORE_NAME);
            store.clear();
            products.forEach(product => store.put(product));
            transaction.oncomplete = resolve;
            transaction.onerror = () => reject(transaction.error);
            transaction.onabort = () => reject(transaction.error);
        });
        database.close();
    }

    window.productStorage = { getProducts, saveProducts };
})();

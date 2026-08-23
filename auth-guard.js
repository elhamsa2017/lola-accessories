(() => {
    const publicPages = ['login.html', 'registration.html'];
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';

    if (!publicPages.includes(currentPage) && localStorage.getItem('lola-authenticated') !== 'true') {
        window.location.replace(`login.html?redirect=${encodeURIComponent(currentPage)}`);
    }
})();

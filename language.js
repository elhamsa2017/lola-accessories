(() => {
    const LANGUAGE_KEY = 'lola-language';
    const translations = {
        'الرئيسية': 'Home',
        'المتجر': 'Shop',
        'الاراء': 'About us',
        'من نحن': 'About us',
        'تواصل معنا': 'Contact us',
        'اللغه': 'Language',
        'اللغة': 'Language',
        'تسوق جميع المنتجات': 'Shop all products',
        'الكل': 'All',
        'كوليهات': 'Accessories',
        'اساور': 'Bracelets',
        'نحاس': 'Bags',
        'عن Lola': 'About Lola',
        'كل قطعة في Lola تحكي قصة من سحر الطبيعة وجمال الصنع اليدوي. نجمع بين طاقة الأحجار الطبيعية، وفخامة النحاس وطلاء الذهب لنقدم لكِ كوليهات ومجوهرات مصممة خصيصاً لتمنحكِ إطلالة ملكية لا تُنسى.': 'Every Lola piece tells a story of nature and handcrafted beauty. We combine the energy of natural stones with the luxury of copper and gold plating to create jewelry designed for an unforgettable royal look.',
        'من نحن': 'About us',
        'نبذة عنا': 'About us',
        'معلومات التوصيل': 'Shipping information',
        'سياسة الخصوصية': 'Privacy policy',
        'الشروط والأحكام': 'Terms and conditions',
        'حسابي': 'My account',
        'تسجيل الدخول': 'Log in',
        'عرض السلة': 'View cart',
        'تتبع طلبي': 'Track my order',
        'الهاتف:': 'Phone:',
        'الصورة السابقة': 'Previous image',
        'الصورة التالية': 'Next image',
        'إضافة منتج': 'Add product',
        'إدارة المنتجات': 'Manage products',
        'إدارة الطلبات': 'Manage orders',
        'الطلبات': 'Orders',
        'المتجر': 'Shop',
        'العودة للوحة التحكم': 'Back to dashboard',
        'إجمالي المنتجات': 'Total products',
        'عناصر متاحة': 'Available items',
        'مخزون منخفض': 'Low stock',
        'يتطلب متابعة': 'Needs attention',
        'قيد الانتظار': 'Pending',
        'بانتظار المراجعة': 'Awaiting review',
        'تم الشحن': 'Shipped',
        'قيد التوصيل': 'Out for delivery',
        'تم التسليم': 'Delivered',
        'تم التوصيل بنجاح': 'Successfully delivered',
        'إجمالي الإيرادات': 'Total revenue',
        'من جميع الطلبات': 'From all orders',
        'آخر الطلبات': 'Recent orders',
        'تحديث': 'Refresh',
        'رقم الطلب': 'Order ID',
        'العميل': 'Customer',
        'العناصر': 'Items',
        'التاريخ': 'Date',
        'المبلغ': 'Amount',
        'الحالة': 'Status',
        'الإجراء': 'Action',
        'تفاصيل الطلب': 'Order details',
        'إغلاق': 'Close',
        'اسم العميل': 'Customer name',
        'رقم الهاتف': 'Phone number',
        'المحافظة': 'Governorate',
        'العنوان': 'Address',
        'تاريخ الطلب': 'Order date',
        'قيمة الشحن': 'Shipping cost',
        'الإجمالي الكلي': 'Grand total',
        'منتجات الطلب': 'Order products',
        'الكمية:': 'Quantity:',
        'أضف': 'Add',
        'جنيه': 'EGP',
        'سلسلة ذهبية': 'Gold necklace',
        'حقيبة مخملية': 'Velvet bag',
        'أقراط فاخرة': 'Luxury earrings',
        'أسورة بسيطة': 'Simple bracelet',
        'Accessories': 'Accessories',
        'Necklaces': 'Necklaces',
        'Bags': 'Bags',
        'In Stock': 'In stock',
        'Low Stock': 'Low stock',
        'Need Restock': 'Needs restock'
        , 'البريد الإلكتروني': 'Email Address'
        , 'كلمة المرور': 'Password'
        , 'تذكرني': 'Remember me'
        , 'نسيت كلمة المرور؟': 'Forgot Password?'
        , 'دخول': 'Sign In'
        , 'إنشاء حساب': 'Create Account'
        , 'إنشاء حساب جديد': 'Create your account'
        , 'ليس لديك حساب؟': "Don't have an account?"
        , 'لديك حساب بالفعل؟': 'Already have an account?'
        , 'تسجيل': 'Register'
        , 'تم تسجيل الدخول بنجاح': 'Signed in successfully'
        , 'كلمتا المرور غير متطابقتين': 'Passwords do not match'
        , 'تسجيل الدخول للمتابعة': 'Sign in to continue'
    };
    const reverseTranslations = Object.fromEntries(Object.entries(translations).map(([arabic, english]) => [english, arabic]));

    function translateText(text, isEnglish) {
        const trimmed = text.trim();
        const translated = isEnglish ? translations[trimmed] : reverseTranslations[trimmed];
        return translated ? text.replace(trimmed, translated) : text;
    }

    function translatePage(language) {
        const isEnglish = language === 'en';
        document.documentElement.lang = isEnglish ? 'en' : 'ar';
        document.documentElement.dir = isEnglish ? 'ltr' : 'rtl';
        document.querySelectorAll('[data-i18n]').forEach((element) => {
            const key = element.dataset.i18n;
            element.textContent = isEnglish ? (translations[key] || key) : key;
        });
        document.querySelectorAll('body *:not(script):not(style)').forEach((element) => {
            if (element.children.length === 0 && !element.dataset.i18n) {
                const original = element.dataset.originalText || element.textContent;
                element.dataset.originalText = original;
                element.textContent = translateText(original, isEnglish);
            }
        });
        document.querySelectorAll('[aria-label]').forEach((element) => {
            const original = element.dataset.originalAria || element.getAttribute('aria-label');
            element.dataset.originalAria = original;
            element.setAttribute('aria-label', translateText(original, isEnglish));
        });
        document.querySelectorAll('[placeholder]').forEach((element) => {
            const original = element.dataset.originalPlaceholder || element.getAttribute('placeholder');
            element.dataset.originalPlaceholder = original;
            element.setAttribute('placeholder', translateText(original, isEnglish));
        });
        document.querySelectorAll('[alt]').forEach((element) => {
            const original = element.dataset.originalAlt || element.getAttribute('alt');
            element.dataset.originalAlt = original;
            element.setAttribute('alt', translateText(original, isEnglish));
        });
        document.querySelectorAll('.product-price').forEach((element) => {
            const original = element.dataset.originalPrice || element.textContent;
            element.dataset.originalPrice = original;
            element.textContent = isEnglish ? original.replace('جنيه', 'EGP') : original.replace('EGP', 'جنيه');
        });
        document.querySelectorAll('.add-to-cart-btn').forEach((button) => {
            const label = isEnglish ? 'Add' : 'أضف';
            const textNode = Array.from(button.childNodes).find((node) => node.nodeType === Node.TEXT_NODE);
            if (textNode) textNode.textContent = ` ${label}`;
        });
        const languageButton = document.querySelector('.language-toggle');
        if (languageButton) languageButton.textContent = isEnglish ? 'العربية' : 'English';
        document.querySelectorAll('[data-language]').forEach((option) => {
            option.classList.toggle('selected', option.dataset.language === language);
        });
    }

    function setupLanguageMenu() {
        let existingLink = document.querySelector('a[href="language.html"]');
        if (!existingLink) {
            const navbar = document.querySelector('#navbar');
            if (!navbar) return;
            const languageItem = document.createElement('li');
            languageItem.innerHTML = '<a href="#">Language</a>';
            navbar.insertBefore(languageItem, navbar.lastElementChild);
            existingLink = languageItem.querySelector('a');
        }
        if (document.querySelector('.language-menu')) return;
        existingLink.removeAttribute('href');
        existingLink.href = '#';
        existingLink.classList.add('language-toggle');
        const wrapper = existingLink.closest('li');
        wrapper.classList.add('language-control');
        wrapper.insertAdjacentHTML('beforeend', '<div class="language-menu" role="menu"><button type="button" data-language="ar">العربية</button><button type="button" data-language="en">English</button></div>');
        existingLink.addEventListener('click', (event) => {
            event.preventDefault();
            wrapper.classList.toggle('open');
        });
        wrapper.querySelectorAll('[data-language]').forEach((option) => {
            option.addEventListener('click', () => {
                const language = option.dataset.language;
                localStorage.setItem(LANGUAGE_KEY, language);
                translatePage(language);
                wrapper.classList.remove('open');
            });
        });
        document.addEventListener('click', (event) => {
            if (!wrapper.contains(event.target)) wrapper.classList.remove('open');
        });
    }

    window.translatePage = translatePage;
    const language = localStorage.getItem(LANGUAGE_KEY) || 'ar';
    const initializeLanguage = () => {
        setupLanguageMenu();
        translatePage(language);
    };
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initializeLanguage);
    } else {
        initializeLanguage();
    }
})();

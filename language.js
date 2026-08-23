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
        'رقم الطلب:': 'Order ID:',
        'الاسم:': 'Name:',
        'الهاتف:': 'Phone:',
        'العنوان:': 'Address:',
        'المحافظة:': 'Governorate:',
        'المنتجات:': 'Products:',
        'الشحن:': 'Shipping:',
        'الإجمالي:': 'Total:',
        'ملخص الطلب المرسل بالبريد': 'Email order summary',
        'العميل': 'Customer',
        'العناصر': 'Items',
        'التاريخ': 'Date',
        'المبلغ': 'Amount',
        'الحالة': 'Status',
        'الإجراء': 'Action',
        'عرض': 'View',
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
        , 'حكاية Lola': 'The Lola story'
        , 'إكسسوارات تحمل طابعك الخاص وتكمل أناقتك بتفاصيل صنعت بحب.': 'Accessories with your signature, finished with details made with love.'
        , 'قصتنا': 'Our story'
        , 'تفاصيل تصنع الفرق': 'Details make the difference'
        , 'لماذا Lola؟': 'Why Lola?'
        , 'ماذا يميزنا؟': 'What makes us different?'
        , 'خبرة بدأت منذ 2014.': 'Experience since 2014.'
        , 'سنوات من الشغف والخبرة في اختيار كل تفصيلة.': 'Years of passion and experience in choosing every detail.'
        , 'تصميمات Handmade مصنوعة بحب.': 'Handmade designs made with love.'
        , 'قطع مصممة بعناية واهتمام حقيقي بالتفاصيل.': 'Pieces designed with care and real attention to detail.'
        , 'إكسسوارات مميزة من النحاس.': 'Distinctive copper accessories.'
        , 'خامات مختارة تمنح كل قطعة حضورًا مختلفًا.': 'Selected materials that give every piece a unique presence.'
        , 'قطع فريدة لعشاق الاختلاف.': 'Unique pieces for those who love to stand out.'
        , 'تصميمات تناسب إطلالتك اليومية ومناسباتك الخاصة.': 'Designs for everyday looks and special occasions.'
        , 'اهتمام بالتفاصيل وجودة التشطيب.': 'Attention to detail and finishing quality.'
        , 'نراجع كل قطعة لتصل إليك بجودة تليق بك.': 'We review every piece so it reaches you at the quality you deserve.'
        , 'إطلالات يومية ومناسبات خاصة.': 'Everyday looks and special occasions.'
        , 'اختيارات مرنة ترافقك في كل لحظة.': 'Versatile choices for every moment.'
        , 'لأنكِ تستحقين قطعة تشبهكِ': 'Because you deserve a piece that feels like you'
        , 'في Lola Accessories and Necklaces، هدفنا أن تجدي دائمًا قطعة تشعرين أنها صُنعت خصيصًا لكِ.': 'At Lola Accessories and Necklaces, our goal is for you to always find a piece that feels made just for you.'
        , 'Lola… تفاصيل صغيرة، تصنع إطلالة مختلفة.': 'Lola... small details, a distinctive look.'
        , 'نحن هنا من أجلك': 'We are here for you'
        , 'تواصلي معنا': 'Contact us'
        , 'يسعدنا أن نسمع منكِ ونساعدكِ في اختيار القطعة التي تشبهكِ.': 'We would love to hear from you and help you find the piece that feels like you.'
        , 'كوني على تواصل': 'Stay connected'
        , 'اختاري طريقتك المفضلة للتواصل': 'Choose your preferred way to connect'
        , 'تابعينا أو راسلينا مباشرة، وسنكون سعداء بالرد على استفساراتك ومساعدتك في كل خطوة.': 'Follow us or message us directly. We will be happy to answer your questions and help at every step.'
        , 'نرد عليكِ بأقرب وقت ممكن': 'We will reply as soon as possible'
        , 'واتساب': 'WhatsApp'
        , 'إنستجرام': 'Instagram'
        , 'فيسبوك': 'Facebook'
        , 'راسلينا مباشرة': 'Message us directly'
        , 'اكتشفي أحدث قطعنا': 'Discover our latest pieces'
        , 'انضمي إلى مجتمع Lola': 'Join the Lola community'
        , 'كل قطعة تبدأ بتفصيلة، وكل تواصل يبدأ برسالة.': 'Every piece starts with a detail, and every connection starts with a message.'
        , 'تم تسجيل الدخول بنجاح': 'Signed in successfully'
        , 'كلمتا المرور غير متطابقتين': 'Passwords do not match'
        , 'تسجيل الدخول للمتابعة': 'Sign in to continue'
        , 'البريد الإلكتروني أو رقم الهاتف': 'Email or phone number'
        , 'أدخل بريدًا إلكترونيًا أو رقم هاتف صحيحًا': 'Enter a valid email address or phone number'
        , 'البريد الإلكتروني أو الهاتف أو كلمة المرور غير صحيحة': 'Incorrect email/phone or password'
        , 'العملاء': 'Customers'
        , 'إجمالي العملاء': 'Total customers'
        , 'عملاء البريد': 'Email customers'
        , 'عملاء الهاتف': 'Phone customers'
        , 'حسابات مسجلة': 'Registered accounts'
        , 'يمكنهم استعادة كلمة المرور': 'Can reset password'
        , 'تسجيل برقم الهاتف': 'Registered by phone'
        , 'بيانات العملاء': 'Customer data'
        , 'الاسم': 'Name'
        , 'البريد الإلكتروني': 'Email'
        , 'رقم الهاتف': 'Phone'
        , 'تاريخ التسجيل': 'Registration date'
        , 'الطلبات': 'Orders'
        , 'لا توجد حسابات مسجلة حتى الآن.': 'No registered accounts yet.'
        , 'غير مضاف': 'Not provided'
        , 'استعادة كلمة المرور': 'Reset password'
        , 'أدخلي بريدك الإلكتروني لنرسل لكِ رمز التحقق.': 'Enter your email and we will send you a verification code.'
        , 'إرسال رمز التحقق': 'Send verification code'
        , 'رمز التحقق': 'Verification code'
        , 'كلمة المرور الجديدة': 'New password'
        , 'تغيير كلمة المرور': 'Change password'
        , 'إلغاء': 'Cancel'
        , 'لا يوجد حساب بهذا البريد الإلكتروني': 'No account found for this email'
        , 'تم إرسال رمز التحقق إلى بريدك الإلكتروني': 'The verification code was sent to your email'
        , 'تعذر إرسال البريد الإلكتروني، حاولي مرة أخرى': 'Unable to send the email, please try again'
        , 'رمز التحقق غير صحيح': 'Incorrect verification code'
        , 'تم تغيير كلمة المرور بنجاح': 'Password changed successfully'
        , 'هذا البريد الإلكتروني أو رقم الهاتف مسجل بالفعل': 'This email or phone number is already registered'
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

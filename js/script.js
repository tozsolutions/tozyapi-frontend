// Toz Yapı Teknolojileri Web Sitesi JavaScript
// Modern ES6+ JavaScript with enhanced functionality

// Configuration
const CONFIG = {
    API_BASE_URL: 'https://tozyapi-backend.onrender.com/api',
    LUNA_ENABLED: true,
    ANALYTICS_ID: 'GA_TRACKING_ID',
    CONTACT_FORM_ENDPOINT: '/contact/submit'
};

// Ürün Grupları Verisi
const productGroups = [
    {
        title: "Havuz Kapama Çözümleri",
        image: "images/products/URUNGRUPLARI(1).jpg",
        description: "Modern havuz kapama sistemleri ile güvenlik ve estetik bir arada.",
        category: "havuz"
    },
    {
        title: "Dış Cephe Jaluzileri & Ahşap Panjur",
        image: "images/products/URUNGRUPLARI(2).jpg",
        description: "Mimari çözümler için ahşap panjur ve dış cephe jaluzileri.",
        category: "panjur"
    },
    {
        title: "Ticari Projeler & Cephe Çözümleri",
        image: "images/products/URUNGRUPLARI(3).jpg",
        description: "Büyük ölçekli projeler için profesyonel cephe sistemleri.",
        category: "ticari"
    },
    {
        title: "Ticari Mekan Çözümleri",
        image: "images/products/URUNGRUPLARI(4).jpg",
        description: "Kafe, restoran ve ticari mekanlar için özel tasarım çözümleri.",
        category: "ticari"
    },
    {
        title: "Giyotin & Sürme Cam Sistemleri",
        image: "images/products/URUNGRUPLARI(5).jpg",
        description: "Akıllı cam uygulamaları ve giyotin sistemleri.",
        category: "giyotin"
    },
    {
        title: "Pergola & Kış Bahçesi",
        image: "images/products/URUNGRUPLARI(6).jpg",
        description: "Pergola sistemleri ve kış bahçesi çözümleri.",
        category: "pergola"
    },
    {
        title: "Dış Mekân Mutfakları",
        image: "images/products/URUNGRUPLARI(7).jpg",
        description: "Bioclimatic pergola ile dış mekan mutfak çözümleri.",
        category: "mutfak"
    },
    {
        title: "Ticari Projeler",
        image: "images/products/URUNGRUPLARI(8).jpg",
        description: "Ticari mekanlar için kapsamlı çözümler.",
        category: "ticari"
    },
    {
        title: "Kış Bahçesi & Tente Sistemleri",
        image: "images/products/URUNGRUPLARI(9).jpg",
        description: "Geniş alanlar için kış bahçesi ve tente çözümleri.",
        category: "tente"
    }
];

// Referans Projeler Verisi
const referenceProjects = [
    { name: "Metromall AVM", image: "images/references/REFERASLAR(1).jpg", category: "ticari" },
    { name: "Mydonose Projesi", image: "images/references/REFERASLAR(2).jpg", category: "konut" },
    { name: "Şehr-i Polat", image: "images/references/REFERASLAR(3).jpg", category: "konut" },
    { name: "Corner Design", image: "images/references/REFERASLAR(4).jpg", category: "ticari" },
    { name: "Mülayimler Projesi", image: "images/references/REFERASLAR(5).jpg", category: "konut" },
    { name: "Pozitif ROI", image: "images/references/REFERASLAR(6).jpg", category: "ticari" },
    { name: "Podium AVM", image: "images/references/REFERASLAR(7).jpg", category: "ticari" },
    { name: "Kocatepe Projesi", image: "images/references/REFERASLAR(8).jpg", category: "konut" },
    { name: "Çubuk Projesi", image: "images/references/REFERASLAR(9).jpg", category: "konut" },
    { name: "TSE Projesi", image: "images/references/REFERASLAR(10).jpg", category: "kurumsal" },
    { name: "Güzel Yalı", image: "images/references/REFERASLAR(11).jpg", category: "konut" },
    { name: "Sincan Projesi", image: "images/references/REFERASLAR(12).jpg", category: "konut" },
    { name: "Ankara Projesi", image: "images/references/REFERASLAR(13).jpg", category: "ticari" },
    { name: "Kayseri Projesi", image: "images/references/REFERASLAR(14).jpg", category: "ticari" },
    { name: "Konya Projesi", image: "images/references/REFERASLAR(15).jpg", category: "ticari" },
    { name: "İzmir Projesi", image: "images/references/REFERASLAR(16).jpg", category: "ticari" },
    { name: "Antalya Projesi", image: "images/references/REFERASLAR(17).jpg", category: "konut" },
    { name: "Adana Projesi", image: "images/references/REFERASLAR(18).jpg", category: "ticari" },
    { name: "Mersin Projesi", image: "images/references/REFERASLAR(19).jpg", category: "ticari" }
];

// İş Ortakları Verisi
const partners = [
    { name: "Akseki", logo: "images/logos/akseki_yap_logo.jpeg" },
    { name: "Albert Genau", logo: "images/logos/Albert-Genau-Logo-Vector.svg-.png" },
    { name: "Alumil", logo: "images/logos/Alumil_logo.jpg" },
    { name: "Dorma", logo: "images/logos/imgbin-logo-dorma-brand-product-design-united-kingdom-united-kingdom-3tQLJh20kMpWyCk2F7wzG27KM.jpg" },
    { name: "Nice", logo: "images/logos/Nice-spa-logo.png" },
    { name: "Powerate", logo: "images/logos/retina-powerate-logo.png" },
    { name: "Somfy", logo: "images/logos/somfy-logo-png_seeklogo-296260.png" },
    { name: "STR Grup", logo: "images/logos/1__440_577f61c1-str_grup.png" }
];

// Utility Functions
const Utils = {
    // Debounce function for performance
    debounce(func, wait) {
        let timeout;
        return function executedFunction(...args) {
            const later = () => {
                clearTimeout(timeout);
                func(...args);
            };
            clearTimeout(timeout);
            timeout = setTimeout(later, wait);
        };
    },

    // Sanitize HTML input
    sanitizeHTML(str) {
        const div = document.createElement('div');
        div.textContent = str;
        return div.innerHTML;
    },

    // Show loading overlay
    showLoading() {
        const overlay = document.getElementById('loading-overlay');
        if (overlay) {
            overlay.style.display = 'flex';
            overlay.setAttribute('aria-hidden', 'false');
        }
    },

    // Hide loading overlay
    hideLoading() {
        const overlay = document.getElementById('loading-overlay');
        if (overlay) {
            overlay.style.display = 'none';
            overlay.setAttribute('aria-hidden', 'true');
        }
    },

    // Show toast message
    showToast(message, type = 'success') {
        const toast = document.getElementById('message-toast');
        if (toast) {
            toast.textContent = message;
            toast.className = `message-toast ${type}`;
            toast.classList.add('show');
            
            setTimeout(() => {
                toast.classList.remove('show');
            }, 5000);
        }
    },

    // Lazy load images
    lazyLoadImages() {
        const images = document.querySelectorAll('img[data-src]');
        const imageObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    img.src = img.dataset.src;
                    img.removeAttribute('data-src');
                    observer.unobserve(img);
                }
            });
        });

        images.forEach(img => imageObserver.observe(img));
    },

    // Validate email
    validateEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    },

    // Validate phone
    validatePhone(phone) {
        const phoneRegex = /^(\+90|0)?[0-9]{10}$/;
        return phoneRegex.test(phone.replace(/\s/g, ''));
    }
};

// DOM Content Loaded Event
document.addEventListener('DOMContentLoaded', function() {
    initializeApp();
});

// Initialize Application
function initializeApp() {
    try {
        loadProductCards();
        loadProjectCarousel();
        loadPartnerCarousel();
        initMobileNavigation();
        initScrollEffects();
        initContactForm();
        initStatCounters();
        Utils.lazyLoadImages();
        
        if (CONFIG.LUNA_ENABLED) {
            initLunaAI();
        }
        
        // Initialize analytics
        if (typeof gtag !== 'undefined') {
            gtag('config', CONFIG.ANALYTICS_ID);
        }
        
        Utils.hideLoading();
    } catch (error) {
        console.error('App initialization error:', error);
        Utils.hideLoading();
    }
}

// Mobile Navigation
function initMobileNavigation() {
    const mobileToggle = document.querySelector('.mobile-menu-toggle');
    const navMenu = document.querySelector('.nav-menu');
    
    if (mobileToggle && navMenu) {
        mobileToggle.addEventListener('click', function() {
            const isExpanded = mobileToggle.getAttribute('aria-expanded') === 'true';
            
            mobileToggle.setAttribute('aria-expanded', !isExpanded);
            navMenu.classList.toggle('active');
            
            // Prevent body scroll when menu is open
            document.body.style.overflow = isExpanded ? 'auto' : 'hidden';
        });
        
        // Close mobile menu when clicking on a link
        navMenu.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                mobileToggle.setAttribute('aria-expanded', 'false');
                navMenu.classList.remove('active');
                document.body.style.overflow = 'auto';
            });
        });
        
        // Close mobile menu when clicking outside
        document.addEventListener('click', (e) => {
            if (!mobileToggle.contains(e.target) && !navMenu.contains(e.target)) {
                mobileToggle.setAttribute('aria-expanded', 'false');
                navMenu.classList.remove('active');
                document.body.style.overflow = 'auto';
            }
        });
    }
}

// Scroll Effects
function initScrollEffects() {
    const header = document.querySelector('header');
    let lastScrollY = window.scrollY;
    
    // Header scroll effect
    window.addEventListener('scroll', Utils.debounce(() => {
        const currentScrollY = window.scrollY;
        
        if (header) {
            if (currentScrollY > 100) {
                header.classList.add('scrolled');
            } else {
                header.classList.remove('scrolled');
            }
        }
        
        lastScrollY = currentScrollY;
    }, 10));
    
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                const headerHeight = header ? header.offsetHeight : 0;
                const targetPosition = target.offsetTop - headerHeight - 20;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
}

// Contact Form
function initContactForm() {
    const form = document.getElementById('contact-form');
    if (!form) return;
    
    const submitBtn = form.querySelector('button[type="submit"]');
    const btnText = submitBtn.querySelector('.btn-text');
    const btnLoader = submitBtn.querySelector('.btn-loader');
    
    form.addEventListener('submit', async function(e) {
        e.preventDefault();
        
        if (!validateForm(form)) {
            return;
        }
        
        // Show loading state
        submitBtn.disabled = true;
        btnText.style.display = 'none';
        btnLoader.style.display = 'inline';
        
        try {
            const formData = new FormData(form);
            const data = Object.fromEntries(formData);
            
            const response = await fetch(CONFIG.API_BASE_URL + CONFIG.CONTACT_FORM_ENDPOINT, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data)
            });
            
            if (response.ok) {
                Utils.showToast('Mesajınız başarıyla gönderildi. En kısa sürede size dönüş yapacağız.', 'success');
                form.reset();
                clearFormErrors(form);
            } else {
                throw new Error('Server error');
            }
        } catch (error) {
            console.error('Form submission error:', error);
            Utils.showToast('Mesaj gönderilirken bir hata oluştu. Lütfen tekrar deneyin veya telefon ile iletişime geçin.', 'error');
        } finally {
            // Reset button state
            submitBtn.disabled = false;
            btnText.style.display = 'inline';
            btnLoader.style.display = 'none';
        }
    });
    
    // Real-time validation
    form.querySelectorAll('input, select, textarea').forEach(field => {
        field.addEventListener('blur', () => validateField(field));
        field.addEventListener('input', Utils.debounce(() => validateField(field), 300));
    });
}

// Form Validation
function validateForm(form) {
    const fields = form.querySelectorAll('input[required], select[required], textarea[required]');
    let isValid = true;
    
    fields.forEach(field => {
        if (!validateField(field)) {
            isValid = false;
        }
    });
    
    return isValid;
}

function validateField(field) {
    const value = field.value.trim();
    const errorElement = document.getElementById(field.name + '-error');
    let errorMessage = '';
    
    // Required field validation
    if (field.required && !value) {
        errorMessage = 'Bu alan zorunludur.';
    }
    
    // Specific field validation
    switch (field.type) {
        case 'email':
            if (value && !Utils.validateEmail(value)) {
                errorMessage = 'Geçerli bir e-posta adresi girin.';
            }
            break;
        case 'tel':
            if (value && !Utils.validatePhone(value)) {
                errorMessage = 'Geçerli bir telefon numarası girin.';
            }
            break;
    }
    
    // Length validation
    if (field.name === 'name' && value && value.length < 2) {
        errorMessage = 'Ad Soyad en az 2 karakter olmalıdır.';
    }
    
    if (field.name === 'message' && value && value.length < 10) {
        errorMessage = 'Mesaj en az 10 karakter olmalıdır.';
    }
    
    // Show/hide error
    if (errorElement) {
        errorElement.textContent = errorMessage;
        field.classList.toggle('error', !!errorMessage);
    }
    
    return !errorMessage;
}

function clearFormErrors(form) {
    form.querySelectorAll('.error-message').forEach(error => {
        error.textContent = '';
    });
    form.querySelectorAll('.error').forEach(field => {
        field.classList.remove('error');
    });
}

// Statistics Counter Animation
function initStatCounters() {
    const stats = document.querySelectorAll('.stat-number[data-count]');
    
    const counterObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                animateCounter(entry.target);
                counterObserver.unobserve(entry.target);
            }
        });
    });
    
    stats.forEach(stat => counterObserver.observe(stat));
}

function animateCounter(element) {
    const target = parseInt(element.dataset.count);
    const duration = 2000;
    const increment = target / (duration / 16);
    let current = 0;
    
    const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
            current = target;
            clearInterval(timer);
        }
        element.textContent = Math.floor(current) + (element.dataset.suffix || '');
    }, 16);
}

// Ürün kartlarını yükleme
function loadProductCards() {
    const productGrid = document.querySelector('.product-grid');
    if (!productGrid) return;

    productGroups.forEach((product, index) => {
        const productCard = document.createElement('div');
        productCard.className = 'product-card';
        productCard.setAttribute('role', 'listitem');
        productCard.innerHTML = `
            <div class="product-image">
                <img src="${product.image}" alt="${product.title}" loading="lazy">
                <div class="product-overlay">
                    <button class="product-btn" data-category="${product.category}">
                        Detayları Gör
                    </button>
                </div>
            </div>
            <div class="product-card-content">
                <h3>${product.title}</h3>
                <p>${product.description}</p>
                <div class="product-category">${product.category}</div>
            </div>
        `;
        
        // Add animation delay
        productCard.style.animationDelay = `${index * 0.1}s`;
        productGrid.appendChild(productCard);
    });
    
    // Add click handlers for product buttons
    productGrid.addEventListener('click', (e) => {
        if (e.target.classList.contains('product-btn')) {
            const category = e.target.dataset.category;
            if (typeof gtag !== 'undefined') {
                gtag('event', 'product_view', {
                    category: category,
                    action: 'view_product_details'
                });
            }
            // You can add modal or navigation logic here
            Utils.showToast(`${category} kategori ürünleri için iletişime geçin.`, 'success');
        }
    });
}

// Proje carousel'ini yükleme
function loadProjectCarousel() {
    const projectCarousel = document.querySelector('.project-carousel');
    if (!projectCarousel) return;

    referenceProjects.forEach((project, index) => {
        const projectItem = document.createElement('div');
        projectItem.className = 'project-item';
        projectItem.setAttribute('role', 'listitem');
        projectItem.innerHTML = `
            <img src="${project.image}" alt="${project.name}" loading="lazy">
            <div class="project-overlay">
                <h4>${project.name}</h4>
                <span class="project-category">${project.category}</span>
            </div>
        `;
        projectCarousel.appendChild(projectItem);
    });
    
    // Add touch support for mobile
    let isDown = false;
    let startX;
    let scrollLeft;
    
    projectCarousel.addEventListener('mousedown', (e) => {
        isDown = true;
        startX = e.pageX - projectCarousel.offsetLeft;
        scrollLeft = projectCarousel.scrollLeft;
    });
    
    projectCarousel.addEventListener('mouseleave', () => {
        isDown = false;
    });
    
    projectCarousel.addEventListener('mouseup', () => {
        isDown = false;
    });
    
    projectCarousel.addEventListener('mousemove', (e) => {
        if (!isDown) return;
        e.preventDefault();
        const x = e.pageX - projectCarousel.offsetLeft;
        const walk = (x - startX) * 2;
        projectCarousel.scrollLeft = scrollLeft - walk;
    });
}

// İş ortakları carousel'ini yükleme
function loadPartnerCarousel() {
    const partnerCarousel = document.querySelector('.partner-carousel');
    if (!partnerCarousel) return;

    partners.forEach(partner => {
        const partnerItem = document.createElement('div');
        partnerItem.className = 'partner-item';
        partnerItem.setAttribute('role', 'listitem');
        partnerItem.innerHTML = `
            <img src="${partner.logo}" alt="${partner.name}" loading="lazy">
        `;
        partnerCarousel.appendChild(partnerItem);
    });
}

// Luna AI Asistanını başlatma
function initLunaAI() {
    if (!CONFIG.LUNA_ENABLED) return;
    
    // Luna toggle butonu oluşturma
    const lunaToggle = document.createElement('div');
    lunaToggle.className = 'luna-toggle';
    lunaToggle.innerHTML = `
        <img src="images/logos/LunaAI.jpg" alt="Luna AI" loading="lazy">
    `;
    document.body.appendChild(lunaToggle);

    // Luna chat penceresi oluşturma
    const lunaChat = document.createElement('div');
    lunaChat.className = 'luna-chat';
    lunaChat.innerHTML = `
        <div class="luna-header">
            <img src="images/logos/LunaAI.jpg" alt="Luna" class="luna-avatar" loading="lazy">
            <div>
                <h4>Luna</h4>
                <span>AI Asistan</span>
            </div>
            <button class="luna-close" aria-label="Chat'i kapat">&times;</button>
        </div>
        <div class="luna-body" id="luna-messages">
            <div class="luna-message luna-message-bot">
                Merhaba, Toz Yapı Teknolojileri'ne hoş geldiniz. Size bugün nasıl yardımcı olabilirim?
            </div>
        </div>
        <div class="luna-input-area">
            <input type="text" id="luna-input" placeholder="Mesajınızı yazın..." maxlength="500" aria-label="Chat mesajı">
            <button id="luna-send" aria-label="Mesaj gönder">Gönder</button>
        </div>
        <div class="luna-quick-responses" id="luna-quick-responses">
            <!-- Hızlı cevaplar buraya gelecek -->
        </div>
    `;
    document.body.appendChild(lunaChat);

    // Event listeners
    lunaToggle.addEventListener('click', function() {
        lunaChat.style.display = 'flex';
        lunaToggle.style.display = 'none';
        loadQuickResponses();
        
        // Analytics tracking
        if (typeof gtag !== 'undefined') {
            gtag('event', 'luna_chat_opened', {
                event_category: 'engagement',
                event_label: 'luna_ai_chat'
            });
        }
    });

    const lunaClose = lunaChat.querySelector('.luna-close');
    lunaClose.addEventListener('click', function() {
        lunaChat.style.display = 'none';
        lunaToggle.style.display = 'flex';
    });

    const lunaInput = document.getElementById('luna-input');
    const lunaSend = document.getElementById('luna-send');

    lunaSend.addEventListener('click', sendMessage);
    lunaInput.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            sendMessage();
        }
    });

    // Show Luna after 5 seconds, then auto-hide after 5 more seconds
    setTimeout(() => {
        lunaChat.style.display = 'flex';
        setTimeout(() => {
            if (lunaChat.style.display === 'flex') {
                lunaChat.style.display = 'none';
            }
        }, 5000);
    }, 5000);
}

// Mesaj gönderme fonksiyonu
async function sendMessage() {
    const input = document.getElementById('luna-input');
    const message = input.value.trim();
    
    if (!message) return;

    // Kullanıcı mesajını ekle
    addMessage(message, 'user');
    input.value = '';

    // Yükleniyor mesajı
    const loadingId = addMessage('Yazıyor...', 'bot', true);

    try {
        const response = await fetch(CONFIG.API_BASE_URL + '/luna/chat', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ message: message })
        });

        const data = await response.json();
        
        // Yükleniyor mesajını kaldır
        removeMessage(loadingId);
        
        if (data.response) {
            addMessage(data.response, 'bot');
        } else {
            addMessage('Üzgünüm, bir hata oluştu. Lütfen telefon ile iletişime geçin: +90 536 773 14 04', 'bot');
        }
        
        // Analytics tracking
        if (typeof gtag !== 'undefined') {
            gtag('event', 'luna_message_sent', {
                event_category: 'engagement',
                event_label: 'user_message'
            });
        }
    } catch (error) {
        removeMessage(loadingId);
        addMessage('Şu anda bağlantı sorunu yaşıyoruz. Lütfen daha sonra tekrar deneyin veya telefon ile iletişime geçin: +90 536 773 14 04', 'bot');
        console.error('Luna chat error:', error);
    }
}

// Mesaj ekleme fonksiyonu
function addMessage(text, sender, isLoading = false) {
    const messagesContainer = document.getElementById('luna-messages');
    const messageDiv = document.createElement('div');
    const messageId = 'msg-' + Date.now();
    
    messageDiv.id = messageId;
    messageDiv.className = `luna-message luna-message-${sender}`;
    if (isLoading) messageDiv.classList.add('loading');
    
    messageDiv.innerHTML = `<p>${Utils.sanitizeHTML(text)}</p>`;
    messagesContainer.appendChild(messageDiv);
    
    // Scroll to bottom
    messagesContainer.scrollTop = messagesContainer.scrollHeight;
    
    return messageId;
}

// Mesaj kaldırma fonksiyonu
function removeMessage(messageId) {
    const message = document.getElementById(messageId);
    if (message) {
        message.remove();
    }
}

// Hızlı cevapları yükleme
async function loadQuickResponses() {
    try {
        const response = await fetch(CONFIG.API_BASE_URL + '/luna/quick-responses');
        const data = await response.json();
        
        const quickResponsesContainer = document.getElementById('luna-quick-responses');
        quickResponsesContainer.innerHTML = '';
        
        const defaultResponses = [
            'Ürünleriniz hakkında bilgi alabilir miyim?',
            'Fiyat teklifi istiyorum',
            'Montaj hizmeti veriyor musunuz?',
            'Hangi illerde hizmet veriyorsunuz?'
        ];
        
        const responses = data?.quick_responses || defaultResponses;
        
        responses.forEach(responseText => {
            const button = document.createElement('button');
            button.className = 'quick-response-btn';
            button.textContent = responseText;
            button.addEventListener('click', () => {
                document.getElementById('luna-input').value = responseText;
                sendMessage();
            });
            quickResponsesContainer.appendChild(button);
        });
    } catch (error) {
        console.error('Hızlı cevaplar yüklenemedi:', error);
        // Fallback to default responses
        const quickResponsesContainer = document.getElementById('luna-quick-responses');
        const defaultResponses = [
            'Ürünleriniz hakkında bilgi alabilir miyim?',
            'Fiyat teklifi istiyorum',
            'Montaj hizmeti veriyor musunuz?',
            'Hangi illerde hizmet veriyorsunuz?'
        ];
        
        defaultResponses.forEach(responseText => {
            const button = document.createElement('button');
            button.className = 'quick-response-btn';
            button.textContent = responseText;
            button.addEventListener('click', () => {
                document.getElementById('luna-input').value = responseText;
                sendMessage();
            });
            quickResponsesContainer.appendChild(button);
        });
    }
}

// Error handling for uncaught errors
window.addEventListener('error', function(e) {
    console.error('Global error:', e.error);
    // Don't show user-facing errors for production
});

window.addEventListener('unhandledrejection', function(e) {
    console.error('Unhandled promise rejection:', e.reason);
    e.preventDefault();
});

// Performance monitoring
if ('performance' in window) {
    window.addEventListener('load', () => {
        setTimeout(() => {
            const perfData = performance.getEntriesByType('navigation')[0];
            if (perfData && typeof gtag !== 'undefined') {
                gtag('event', 'page_load_time', {
                    event_category: 'performance',
                    value: Math.round(perfData.loadEventEnd - perfData.loadEventStart)
                });
            }
        }, 0);
    });
}


// Toz Yapı Teknolojileri Web Sitesi JavaScript

// Ürün Grupları Verisi
const productGroups = [
    {
        title: "Havuz Kapama Çözümleri",
        image: "images/products/URUNGRUPLARI(1).jpg",
        description: "Modern havuz kapama sistemleri ile güvenlik ve estetik bir arada."
    },
    {
        title: "Dış Cephe Jaluzileri & Ahşap Panjur",
        image: "images/products/URUNGRUPLARI(2).jpg",
        description: "Mimari çözümler için ahşap panjur ve dış cephe jaluzileri."
    },
    {
        title: "Ticari Projeler & Cephe Çözümleri",
        image: "images/products/URUNGRUPLARI(3).jpg",
        description: "Büyük ölçekli projeler için profesyonel cephe sistemleri."
    },
    {
        title: "Ticari Mekan Çözümleri",
        image: "images/products/URUNGRUPLARI(4).jpg",
        description: "Kafe, restoran ve ticari mekanlar için özel tasarım çözümleri."
    },
    {
        title: "Giyotin & Sürme Cam Sistemleri",
        image: "images/products/URUNGRUPLARI(5).jpg",
        description: "Akıllı cam uygulamaları ve giyotin sistemleri."
    },
    {
        title: "Pergola & Kış Bahçesi",
        image: "images/products/URUNGRUPLARI(6).jpg",
        description: "Pergola sistemleri ve kış bahçesi çözümleri."
    },
    {
        title: "Dış Mekân Mutfakları",
        image: "images/products/URUNGRUPLARI(7).jpg",
        description: "Bioclimatic pergola ile dış mekan mutfak çözümleri."
    },
    {
        title: "Ticari Projeler",
        image: "images/products/URUNGRUPLARI(8).jpg",
        description: "Ticari mekanlar için kapsamlı çözümler."
    },
    {
        title: "Kış Bahçesi & Tente Sistemleri",
        image: "images/products/URUNGRUPLARI(9).jpg",
        description: "Geniş alanlar için kış bahçesi ve tente çözümleri."
    }
];

// Referans Projeler Verisi
const referenceProjects = [
    { name: "Metromall AVM", image: "images/references/REFERASLAR(1).jpg" },
    { name: "Mydonose Projesi", image: "images/references/REFERASLAR(2).jpg" },
    { name: "Şehr-i Polat", image: "images/references/REFERASLAR(3).jpg" },
    { name: "Corner Design", image: "images/references/REFERASLAR(4).jpg" },
    { name: "Mülayimler Projesi", image: "images/references/REFERASLAR(5).jpg" },
    { name: "Pozitif ROI", image: "images/references/REFERASLAR(6).jpg" },
    { name: "Podium AVM", image: "images/references/REFERASLAR(7).jpg" },
    { name: "Kocatepe Projesi", image: "images/references/REFERASLAR(8).jpg" },
    { name: "Çubuk Projesi", image: "images/references/REFERASLAR(9).jpg" },
    { name: "TSE Projesi", image: "images/references/REFERASLAR(10).jpg" },
    { name: "Güzel Yalı", image: "images/references/REFERASLAR(11).jpg" },
    { name: "Sincan Projesi", image: "images/references/REFERASLAR(12).jpg" },
    { name: "Ankara Projesi", image: "images/references/REFERASLAR(13).jpg" },
    { name: "Kayseri Projesi", image: "images/references/REFERASLAR(14).jpg" },
    { name: "Konya Projesi", image: "images/references/REFERASLAR(15).jpg" },
    { name: "İzmir Projesi", image: "images/references/REFERASLAR(16).jpg" },
    { name: "Antalya Projesi", image: "images/references/REFERASLAR(17).jpg" },
    { name: "Adana Projesi", image: "images/references/REFERASLAR(18).jpg" },
    { name: "Mersin Projesi", image: "images/references/REFERASLAR(19).jpg" }
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
    { name: "STR Grup", logo: "images/logos/1__440_577f61c1-str_grup.png" },
    { name: "Facebook", logo: "images/logos/FacebooklogoR@H(1).png" }
];

// Luna AI Mesajları
const lunaMessages = [
    "Merhaba, Toz Yapı Teknolojileri'ne hoş geldiniz. Size bugün nasıl yardımcı olabilirim?",
    "Hangi ürün grubu hakkında bilgi almak istiyorsunuz?",
    "Projelerimizi incelemek ister misiniz?",
    "Size özel bir teklif hazırlayabilirim. Ne tür bir çözüm arıyorsunuz?"
];

// DOM Yüklendiğinde çalışacak fonksiyonlar
document.addEventListener('DOMContentLoaded', function() {
    loadProductCards();
    loadProjectCarousel();
    loadPartnerCarousel();
    initLunaAI();
    initSmoothScrolling();
    initMobileMenu();
    initContactForm();
    initLazyLoading();
    initPerformanceOptimizations();
    registerServiceWorker();
});

// Service Worker Registration
function registerServiceWorker() {
    if ('serviceWorker' in navigator) {
        window.addEventListener('load', function() {
            navigator.serviceWorker.register('/sw.js')
                .then(function(registration) {
                    console.log('ServiceWorker registration successful');
                })
                .catch(function(err) {
                    console.log('ServiceWorker registration failed: ', err);
                });
        });
    }
}

// Ürün kartlarını yükleme
function loadProductCards() {
    const productGrid = document.querySelector('.product-grid');
    if (!productGrid) return;

    productGroups.forEach(product => {
        const productCard = document.createElement('div');
        productCard.className = 'product-card';
        productCard.innerHTML = `
            <img src="${product.image}" alt="${product.title}">
            <div class="product-card-content">
                <h3>${product.title}</h3>
                <p>${product.description}</p>
            </div>
        `;
        productGrid.appendChild(productCard);
    });
}

// Proje carousel'ini yükleme
function loadProjectCarousel() {
    const projectCarousel = document.querySelector('.project-carousel');
    if (!projectCarousel) return;

    referenceProjects.forEach(project => {
        const projectItem = document.createElement('div');
        projectItem.className = 'project-item';
        projectItem.innerHTML = `
            <img src="${project.image}" alt="${project.name}">
            <div class="project-overlay">
                <h4>${project.name}</h4>
            </div>
        `;
        projectCarousel.appendChild(projectItem);
    });
}

// İş ortakları carousel'ini yükleme
function loadPartnerCarousel() {
    const partnerCarousel = document.querySelector('.partner-carousel');
    if (!partnerCarousel) return;

    partners.forEach(partner => {
        const partnerItem = document.createElement('div');
        partnerItem.className = 'partner-item';
        partnerItem.innerHTML = `
            <img src="${partner.logo}" alt="${partner.name}">
        `;
        partnerCarousel.appendChild(partnerItem);
    });
}

// Luna AI Asistanını başlatma
function initLunaAI() {
    // Luna toggle butonu oluşturma
    const lunaToggle = document.createElement('div');
    lunaToggle.className = 'luna-toggle';
    lunaToggle.innerHTML = `
        <img src="images/logos/LunaAI.jpg" alt="Luna AI">
    `;
    document.body.appendChild(lunaToggle);

    // Luna chat penceresi oluşturma
    const lunaChat = document.createElement('div');
    lunaChat.className = 'luna-chat';
    lunaChat.innerHTML = `
        <div class="luna-header">
            <img src="images/logos/LunaAI.jpg" alt="Luna" class="luna-avatar">
            <div>
                <h4>Luna</h4>
                <span>AI Asistan</span>
            </div>
            <button class="luna-close">&times;</button>
        </div>
        <div class="luna-body" id="luna-messages">
            <div class="luna-message luna-message-bot">
                Merhaba, Toz Yapı Teknolojileri'ne hoş geldiniz. Size bugün nasıl yardımcı olabilirim?
            </div>
        </div>
        <div class="luna-input-area">
            <input type="text" id="luna-input" placeholder="Mesajınızı yazın..." maxlength="500">
            <button id="luna-send">Gönder</button>
        </div>
        <div class="luna-quick-responses" id="luna-quick-responses">
            <!-- Hızlı cevaplar buraya gelecek -->
        </div>
    `;
    document.body.appendChild(lunaChat);

    // Event listeners
    lunaToggle.addEventListener('click', function() {
        lunaChat.style.display = 'block';
        lunaToggle.style.display = 'none';
        loadQuickResponses();
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

    // 3 saniye sonra Luna'yı göster
    setTimeout(() => {
        lunaChat.style.display = 'block';
        setTimeout(() => {
            lunaChat.style.display = 'none';
        }, 5000);
    }, 3000);
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
        const response = await fetch('https://tozyapi-backend.onrender.com/api/luna/chat', {
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
            addMessage('Üzgünüm, bir hata oluştu. Lütfen tekrar deneyin.', 'bot');
        }
    } catch (error) {
        removeMessage(loadingId);
        addMessage('Bağlantı hatası. Lütfen daha sonra tekrar deneyin.', 'bot');
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
    
    messageDiv.innerHTML = `<p>${text}</p>`;
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
        const response = await fetch('https://tozyapi-backend.onrender.com/api/luna/quick-responses');
        const data = await response.json();
        
        const quickResponsesContainer = document.getElementById('luna-quick-responses');
        quickResponsesContainer.innerHTML = '';
        
        data.quick_responses.forEach(responseText => {
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
    }
}

// Smooth scrolling
function initSmoothScrolling() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
}

// Carousel otomatik kaydırma
function startCarouselAutoScroll() {
    const carousels = document.querySelectorAll('.project-carousel, .partner-carousel');
    
    carousels.forEach(carousel => {
        let scrollAmount = 0;
        const scrollStep = 2;
        const maxScroll = carousel.scrollWidth - carousel.clientWidth;
        
        setInterval(() => {
            if (scrollAmount >= maxScroll) {
                scrollAmount = 0;
            } else {
                scrollAmount += scrollStep;
            }
            carousel.scrollLeft = scrollAmount;
        }, 50);
    });
}

// Sayfa yüklendikten sonra carousel'i başlat
window.addEventListener('load', () => {
    setTimeout(startCarouselAutoScroll, 2000);
});

// Mobile Menu Functionality
function initMobileMenu() {
    const mobileToggle = document.querySelector('.mobile-menu-toggle');
    const navMenu = document.querySelector('nav ul');
    const navLinks = document.querySelectorAll('nav ul li a');

    if (!mobileToggle || !navMenu) return;

    mobileToggle.addEventListener('click', function() {
        navMenu.classList.toggle('active');
        const isExpanded = navMenu.classList.contains('active');
        mobileToggle.setAttribute('aria-expanded', isExpanded);
        
        // Animate hamburger icon
        const spans = mobileToggle.querySelectorAll('span');
        spans.forEach((span, index) => {
            if (isExpanded) {
                if (index === 0) span.style.transform = 'rotate(45deg) translate(5px, 5px)';
                if (index === 1) span.style.opacity = '0';
                if (index === 2) span.style.transform = 'rotate(-45deg) translate(7px, -6px)';
            } else {
                span.style.transform = 'none';
                span.style.opacity = '1';
            }
        });
    });

    // Close menu when clicking on links
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            navMenu.classList.remove('active');
            mobileToggle.setAttribute('aria-expanded', 'false');
            const spans = mobileToggle.querySelectorAll('span');
            spans.forEach(span => {
                span.style.transform = 'none';
                span.style.opacity = '1';
            });
        });
    });

    // Close menu when clicking outside
    document.addEventListener('click', function(event) {
        if (!mobileToggle.contains(event.target) && !navMenu.contains(event.target)) {
            navMenu.classList.remove('active');
            mobileToggle.setAttribute('aria-expanded', 'false');
        }
    });
}

// Contact Form Functionality
function initContactForm() {
    const contactForm = document.querySelector('.contact-form form');
    if (!contactForm) return;

    contactForm.addEventListener('submit', async function(e) {
        e.preventDefault();
        
        const formData = new FormData(contactForm);
        const submitBtn = contactForm.querySelector('.submit-btn');
        const originalText = submitBtn.textContent;
        
        // Show loading state
        submitBtn.textContent = 'Gönderiliyor...';
        submitBtn.disabled = true;
        
        try {
            // Simulate form submission (replace with actual endpoint)
            await new Promise(resolve => setTimeout(resolve, 1000));
            
            // Show success message
            showNotification('Mesajınız başarıyla gönderildi! En kısa sürede size dönüş yapacağız.', 'success');
            contactForm.reset();
            
        } catch (error) {
            showNotification('Mesaj gönderilirken bir hata oluştu. Lütfen tekrar deneyin.', 'error');
        } finally {
            submitBtn.textContent = originalText;
            submitBtn.disabled = false;
        }
    });
}

// Notification System
function showNotification(message, type = 'info') {
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.innerHTML = `
        <div class="notification-content">
            <span>${message}</span>
            <button class="notification-close" onclick="this.parentElement.parentElement.remove()">&times;</button>
        </div>
    `;
    
    // Add notification styles if not exists
    if (!document.querySelector('#notification-styles')) {
        const styles = document.createElement('style');
        styles.id = 'notification-styles';
        styles.textContent = `
            .notification {
                position: fixed;
                top: 20px;
                right: 20px;
                max-width: 400px;
                padding: 15px 20px;
                border-radius: 8px;
                color: white;
                z-index: 10000;
                animation: slideInRight 0.3s ease;
                box-shadow: 0 5px 15px rgba(0,0,0,0.2);
            }
            .notification-success { background: #27ae60; }
            .notification-error { background: #e74c3c; }
            .notification-info { background: #3498db; }
            .notification-content {
                display: flex;
                justify-content: space-between;
                align-items: center;
                gap: 15px;
            }
            .notification-close {
                background: none;
                border: none;
                color: white;
                font-size: 20px;
                cursor: pointer;
                padding: 0;
                width: 25px;
                height: 25px;
            }
            @keyframes slideInRight {
                from { transform: translateX(100%); opacity: 0; }
                to { transform: translateX(0); opacity: 1; }
            }
        `;
        document.head.appendChild(styles);
    }
    
    document.body.appendChild(notification);
    
    // Auto remove after 5 seconds
    setTimeout(() => {
        if (notification.parentElement) {
            notification.remove();
        }
    }, 5000);
}

// Lazy Loading for Images
function initLazyLoading() {
    const images = document.querySelectorAll('img[data-src]');
    
    if ('IntersectionObserver' in window) {
        const imageObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    img.src = img.dataset.src;
                    img.classList.remove('lazy');
                    imageObserver.unobserve(img);
                }
            });
        });

        images.forEach(img => imageObserver.observe(img));
    } else {
        // Fallback for older browsers
        images.forEach(img => {
            img.src = img.dataset.src;
            img.classList.remove('lazy');
        });
    }
}

// Performance Optimizations
function initPerformanceOptimizations() {
    // Preload critical resources
    preloadCriticalResources();
    
    // Initialize scroll-based animations
    initScrollAnimations();
    
    // Optimize carousel performance
    optimizeCarousels();
}

function preloadCriticalResources() {
    const criticalImages = [
        'images/products/URUNGRUPLARI(1).jpg',
        'images/logos/toz-logo.png'
    ];
    
    criticalImages.forEach(src => {
        const link = document.createElement('link');
        link.rel = 'preload';
        link.as = 'image';
        link.href = src;
        document.head.appendChild(link);
    });
}

function initScrollAnimations() {
    const animateElements = document.querySelectorAll('.product-card, .about-item, .project-item');
    
    if ('IntersectionObserver' in window) {
        const animationObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.animation = 'fadeInUp 0.6s ease forwards';
                }
            });
        }, { threshold: 0.1 });

        animateElements.forEach(el => {
            el.style.opacity = '0';
            el.style.transform = 'translateY(30px)';
            animationObserver.observe(el);
        });
        
        // Add animation keyframes
        if (!document.querySelector('#scroll-animations')) {
            const styles = document.createElement('style');
            styles.id = 'scroll-animations';
            styles.textContent = `
                @keyframes fadeInUp {
                    to {
                        opacity: 1;
                        transform: translateY(0);
                    }
                }
            `;
            document.head.appendChild(styles);
        }
    }
}

function optimizeCarousels() {
    const carousels = document.querySelectorAll('.project-carousel, .partner-carousel');
    
    carousels.forEach(carousel => {
        // Add smooth scrolling
        carousel.style.scrollBehavior = 'smooth';
        
        // Pause auto-scroll on hover
        carousel.addEventListener('mouseenter', () => {
            carousel.dataset.paused = 'true';
        });
        
        carousel.addEventListener('mouseleave', () => {
            carousel.dataset.paused = 'false';
        });
    });
}

// Enhanced Luna AI with better error handling
function enhanceLunaAI() {
    // Add typing indicator
    function showTypingIndicator() {
        const messagesContainer = document.getElementById('luna-messages');
        const typingDiv = document.createElement('div');
        typingDiv.className = 'luna-message luna-message-bot typing-indicator';
        typingDiv.id = 'typing-indicator';
        typingDiv.innerHTML = `
            <div class="typing-dots">
                <div class="typing-dot"></div>
                <div class="typing-dot"></div>
                <div class="typing-dot"></div>
            </div>
        `;
        messagesContainer.appendChild(typingDiv);
        messagesContainer.scrollTop = messagesContainer.scrollHeight;
        return typingDiv;
    }
    
    function hideTypingIndicator() {
        const indicator = document.getElementById('typing-indicator');
        if (indicator) {
            indicator.remove();
        }
    }
    
    // Enhanced message sending with typing indicator
    const originalSendMessage = window.sendMessage;
    window.sendMessage = async function() {
        const input = document.getElementById('luna-input');
        const message = input.value.trim();
        
        if (!message) return;

        // Add user message
        addMessage(message, 'user');
        input.value = '';

        // Show typing indicator
        const typingIndicator = showTypingIndicator();

        try {
            const response = await fetch('/api/luna/chat', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ message: message })
            });

            const data = await response.json();
            
            // Hide typing indicator
            hideTypingIndicator();
            
            if (data.response) {
                addMessage(data.response, 'bot');
            } else {
                addMessage('Üzgünüm, bir hata oluştu. Lütfen tekrar deneyin.', 'bot');
            }
        } catch (error) {
            hideTypingIndicator();
            addMessage('Bağlantı hatası. Lütfen daha sonra tekrar deneyin.', 'bot');
        }
    };
}


# Toz Yapı Teknolojileri - Frontend

Bu, Toz Yapı Teknolojileri web sitesinin frontend kısmıdır. Modern, responsive ve erişilebilir tasarım ile Netlify üzerinde statik site olarak dağıtılmak üzere tasarlanmıştır.

![Website Screenshot](https://github.com/user-attachments/assets/9c1c196b-9efa-4e96-be07-d5617ef7f1a8)

## 🎯 Özellikler

- 🎨 **Modern ve responsive tasarım** - Tüm cihazlarda mükemmel görünüm
- 📱 **Mobil öncelikli yaklaşım** - Touch-friendly arayüz
- ♿ **Erişilebilirlik (WCAG 2.1)** - Screen reader ve keyboard navigation desteği
- 🔍 **SEO optimizasyonu** - Structured data, meta tags, sitemap
- 🤖 **Luna AI asistanı** - Akıllı müşteri hizmetleri
- 📊 **Dinamik içerik** - JavaScript ile yüklenen ürün ve proje galerisi
- 🚀 **Performance optimizasyonu** - Lazy loading, CDN, minification
- 🔒 **Güvenlik headers** - CSP, HSTS, XSS koruması
- 📧 **İletişim formu** - Validation ve KVKK uyumlu
- 🌐 **Çoklu dil desteği** - TR/EN (gelecek güncellemede)

## 🛠 Teknolojiler

- **HTML5** - Semantic markup
- **CSS3** - Modern CSS Grid, Flexbox, Custom Properties
- **JavaScript (ES6+)** - Modern JavaScript özellikleri
- **Netlify** - Hosting ve deployment
- **GitHub Actions** - CI/CD pipeline

## 📁 Dosya Yapısı

```
tozyapi-frontend/
├── index.html              # Ana sayfa
├── package.json            # NPM dependencies ve scripts
├── netlify.toml            # Netlify konfigürasyonu
├── _redirects              # API proxy ayarları
├── robots.txt              # SEO crawler yönergeleri
├── sitemap.xml             # Site haritası
├── favicon.ico             # Site ikonu
├── css/
│   └── style.css           # Ana stil dosyası (responsive, modern)
├── js/
│   └── script.js           # Ana JavaScript dosyası (ES6+)
├── images/
│   ├── logos/              # Logo dosyaları
│   ├── products/           # Ürün görselleri
│   └── references/         # Referans proje görselleri
├── pages/
│   ├── blog.html           # Blog sayfası
│   ├── e-ticaret.html      # E-ticaret coming soon
│   └── kvkk.html           # KVKK politikası
├── .github/
│   └── workflows/
│       └── ci-cd.yml       # GitHub Actions workflow
└── .gitignore              # Git ignore dosyası
```

## 🚀 Hızlı Başlangıç

### Gereksinimler

- Node.js 18+
- NPM 8+
- Modern web browser

### Kurulum

1. **Repository'yi klonlayın:**
   ```bash
   git clone https://github.com/tozsolutions/tozyapi-frontend.git
   cd tozyapi-frontend
   ```

2. **Dependencies'leri yükleyin:**
   ```bash
   npm install
   ```

3. **Development server'ı başlatın:**
   ```bash
   npm run dev
   ```

4. **Tarayıcıda açın:**
   ```
   http://localhost:8000
   ```

## 📝 NPM Scripts

```bash
# Development server
npm run dev

# Production build
npm run build

# Code quality checks
npm run test
npm run lint-css
npm run lint-js
npm run validate-html

# Asset optimization
npm run minify
npm run optimize-images

# Deployment
npm run deploy
```

## 🌐 Deployment

### Netlify (Otomatik)

1. Bu repository'yi GitHub'a push edin
2. Netlify hesabınızla GitHub'ı bağlayın
3. Bu repository'yi seçin
4. Otomatik deployment başlayacaktır

Netlify ayarları `netlify.toml` dosyasında tanımlıdır:
- Security headers
- Cache optimization
- API proxy
- Form handling

### Manuel Deployment

```bash
npm run build
# dist/ klasörünü hosting servisine yükleyin
```

## 🔧 Konfigürasyon

### API Entegrasyonu

Frontend, backend API'sine şu şekilde bağlanır:
- **Production:** `https://tozyapi-backend.onrender.com/api/`
- **Proxy:** Netlify üzerinden `/api/*` route'ları

### Environment Variables

Netlify dashboard'unda aşağıdaki değişkenleri ayarlayın:
```
GA_TRACKING_ID=GA_MEASUREMENT_ID
NETLIFY_AUTH_TOKEN=your_token
NETLIFY_SITE_ID=your_site_id
```

## 🎨 Tasarım Sistemi

### Renk Paleti

```css
--primary-color: #27ae60;    /* Rolex Yeşili */
--primary-dark: #219a52;     /* Koyu Yeşil */
--secondary-color: #2c3e50;  /* Koyu Antrasit Gri */
--background-color: #ffffff; /* Beyaz */
--background-light: #f8f9fa; /* Açık Gri */
```

### Typography

- **Font Family:** Segoe UI, Tahoma, Geneva, Verdana, sans-serif
- **Responsive:** clamp() fonksiyonu ile ölçeklenebilir boyutlar

### Responsive Breakpoints

```css
/* Mobile First Approach */
Mobile: < 768px
Tablet: 768px - 1024px
Desktop: > 1024px
```

## ♿ Erişilebilirlik

- **WCAG 2.1 AA** standardlarına uygun
- **Semantic HTML** yapısı
- **ARIA labels** ve roles
- **Keyboard navigation** desteği
- **Screen reader** uyumluluğu
- **High contrast** mode desteği
- **Reduced motion** desteği

## 🔍 SEO Özellikleri

- **Meta etiketler** optimize edilmiş
- **Open Graph** ve Twitter Cards
- **Structured data** (JSON-LD)
- **Semantic HTML** yapısı
- **Alt etiketleri** mevcut
- **Sitemap.xml** güncellendi
- **Robots.txt** optimize edildi

## ⚡ Performance

- **Lazy loading** görsel için
- **CSS ve JS minification**
- **Image optimization**
- **CDN cache** ayarları
- **Preconnect** hints
- **Resource hints**

Performance metrikleri:
- **Lighthouse Score:** 95+ (Target)
- **First Contentful Paint:** < 1.5s
- **Largest Contentful Paint:** < 2.5s
- **Cumulative Layout Shift:** < 0.1

## 🔒 Güvenlik

### Security Headers

```
Content-Security-Policy: Strict CSP policy
X-Frame-Options: DENY
X-XSS-Protection: 1; mode=block
X-Content-Type-Options: nosniff
Strict-Transport-Security: HSTS enabled
```

### Form Security

- Input validation ve sanitization
- CSRF protection
- Rate limiting (backend)
- KVKK compliance

## 🤖 Luna AI Asistanı

Luna AI, müşteri hizmetleri için entegre edilmiş yapay zeka asistanıdır:

- **Anlık cevaplar** - 7/24 müşteri desteği
- **Ürün bilgileri** - Detaylı ürün açıklamaları
- **Fiyat talepleri** - Otomatik yönlendirme
- **Hızlı cevaplar** - Önceden tanımlı sorular
- **Analytics** - Kullanıcı etkileşim takibi

## 📊 Analytics

Google Analytics 4 entegrasyonu ile:
- **Page views** tracking
- **User interactions** monitoring
- **Form submissions** tracking
- **Performance metrics** collection
- **Luna AI** usage analytics

## 🧪 Testing

```bash
# HTML validation
npm run validate-html

# CSS linting
npm run lint-css

# JavaScript linting
npm run lint-js

# Full test suite
npm run test
```

## 🐛 Troubleshooting

### Common Issues

1. **Images not loading:**
   - Check image paths (case-sensitive)
   - Verify image formats (jpg, png, webp)

2. **API connection issues:**
   - Check backend server status
   - Verify API endpoints in config

3. **Build errors:**
   - Clear node_modules and reinstall
   - Check Node.js version compatibility

### Debug Mode

Development modunda daha fazla log için:
```javascript
localStorage.setItem('debug', 'true');
```

## 🤝 Contributing

1. Fork repository
2. Create feature branch (`git checkout -b feature/amazing-feature`)
3. Commit changes (`git commit -m 'Add amazing feature'`)
4. Push branch (`git push origin feature/amazing-feature`)
5. Create Pull Request

### Code Style

- **HTML:** Semantic, accessible markup
- **CSS:** BEM methodology, mobile-first
- **JavaScript:** ES6+, functional programming

## 📞 Support

- **Email:** merhaba@tozyapi.com.tr
- **Phone:** +90 536 773 14 04
- **Address:** Üniversiteler Mah. 1597. Cad Bilkent Center AVM No:3, Bilkent Çankaya, ANKARA

## 📄 License

Bu proje Toz Yapı Teknolojileri için özel olarak geliştirilmiştir. Tüm hakları saklıdır.

---

**Made with ❤️ by TozSolutions**


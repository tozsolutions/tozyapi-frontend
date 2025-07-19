# Toz Yapı Teknolojileri - Frontend

Bu, Toz Yapı Teknolojileri web sitesinin frontend kısmıdır. Netlify üzerinde statik site olarak dağıtılmak üzere tasarlanmıştır.

## Özellikler

- 🎨 Modern ve responsive tasarım
- 📱 Mobil uyumlu
- 🔍 SEO optimizasyonu
- 🤖 Luna AI asistanı entegrasyonu
- 📊 Dinamik içerik gösterimi

## Teknolojiler

- HTML5
- CSS3
- JavaScript (ES6+)
- Responsive Design

## Dosya Yapısı

```
tozyapi-frontend/
├── index.html          # Ana sayfa
├── css/
│   └── style.css       # Ana stil dosyası
├── js/
│   └── script.js       # Ana JavaScript dosyası
├── images/
│   ├── logos/          # Logo dosyaları
│   ├── products/       # Ürün görselleri
│   └── references/     # Referans proje görselleri
├── pages/
│   └── blog.html       # Blog sayfası
├── robots.txt          # Arama motoru yönergeleri
├── sitemap.xml         # Site haritası
├── llms.txt           # AI dil modelleri için yönergeler
├── netlify.toml       # Netlify konfigürasyonu
└── _redirects         # API proxy ayarları
```

## Netlify Deployment

### Otomatik Deployment
1. Bu repository'yi GitHub'a push edin
2. Netlify hesabınızla GitHub'ı bağlayın
3. Bu repository'yi seçin
4. Otomatik deployment başlayacaktır

### Manuel Deployment
1. Bu klasörü zip olarak sıkıştırın
2. Netlify dashboard'una gidin
3. "Deploy manually" seçeneğini kullanın
4. Zip dosyasını sürükleyip bırakın

## API Entegrasyonu

Frontend, backend API'sine şu şekilde bağlanır:
- Production: `https://tozyapi-backend.onrender.com/api/`
- Netlify proxy ayarları `_redirects` dosyasında tanımlıdır

## Özelleştirme

### Renk Paleti
- Ana renk: #27ae60 (Rolex Yeşili)
- İkincil renk: #2c3e50 (Koyu Antrasit Gri)
- Arka plan: #ffffff (Beyaz)

### Responsive Breakpoints
- Mobile: < 768px
- Tablet: 768px - 1024px
- Desktop: > 1024px

## SEO Özellikleri

- Meta etiketler optimize edilmiş
- Semantic HTML yapısı
- Alt etiketleri eklenmiş
- Sitemap.xml mevcut
- Robots.txt yapılandırılmış

## Performans

- CSS ve JS dosyaları optimize edilmiş
- Görseller sıkıştırılmış
- Lazy loading uygulanmış
- CDN cache ayarları yapılandırılmış

## Tarayıcı Desteği

- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+

## Lisans

Bu proje Toz Yapı Teknolojileri için özel olarak geliştirilmiştir.


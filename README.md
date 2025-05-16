# 🛒 Anadolu Gıda Yönetim Sistemi

Anadolu Gıda Yönetim Sistemi, ürün, kategori ve stok yönetimini kolaylaştırmak amacıyla geliştirilen modern bir web uygulamasıdır.  
Back-end tarafında **ASP.NET Core Web API**, front-end tarafında ise **React.js**, **Tailwind CSS** ve çeşitli modern kütüphaneler kullanılmıştır.

---

## 🚀 Projeyi Çalıştırma Adımları

Aşağıdaki adımları takip ederek projeyi kendi bilgisayarınızda kurup çalıştırabilirsiniz:

```bash
# 1️⃣ Projeyi Klonlayın
git clone https://github.com/onuraydinoglu/AnadoluGida.git
cd AnadoluGida

# 2️⃣ Migration Silme (Opsiyonel)
cd Server
dotnet ef migrations remove
# Gerekirse bu komutu birden fazla kez çalıştırarak tüm migrationları kaldırabilirsiniz.

# 3️⃣ Yeni Migration Ekleme ve Veritabanını Güncelleme
dotnet ef migrations add InitialCreate
dotnet ef database update

# 4️⃣ Sunucuyu (Back-end) Başlatma
dotnet run
# API genellikle http://localhost:5000 veya https://localhost:5001 adreslerinde çalışır.

# 5️⃣ Client (Front-end) Başlatma
cd ../Client
npm install
npm run dev
# React uygulaması genellikle http://localhost:5173 adresinde çalışır.

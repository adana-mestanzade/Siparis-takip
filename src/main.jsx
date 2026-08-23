import React, { useMemo, useState } from 'react';
import { createRoot } from 'react-dom/client';
import { Search, ShoppingCart, Truck, ShieldCheck, Headphones, Star, MapPin, Menu, ChevronRight } from 'lucide-react';
import './styles.css';

const categories = [
  { name: "COOKIN'DUSTRIO", title: 'Pişirme Ekipmanları', items: 'Izgara, ocak, fırın, LAM 700 seri', color: '#ef4444' },
  { name: "COOLIN'DUSTRIO", title: 'Soğutma Ekipmanları', items: 'Phoenix seri, buz makinesi, şişe soğutucu', color: '#06b6d4' },
  { name: "PRESERVIN'DUSTRIO", title: 'Saklama Ekipmanları', items: 'Raf, dolap, soğuk oda çözümleri', color: '#22c55e' },
  { name: "PREPARIN'DUSTRIO", title: 'Hazırlık Ekipmanları', items: 'Tezgah, evye, kesim ve hazırlık hattı', color: '#f59e0b' },
  { name: "BAKIN'DUSTRIO", title: 'Pastahane Ekipmanları', items: 'Mayalama, tepsi, fırın ve mikser', color: '#a855f7' },
  { name: "DISHWASHIN'DUSTRIO", title: 'Bulaşıkhane Ekipmanları', items: 'Bardak, tabak, kazan yıkama makineleri', color: '#3b82f6' },
];

const products = [
  { name: 'LAM 700 Seri Profesyonel Pişirici', category: "COOKIN'DUSTRIO", price: '₺89.900', tag: 'Çok Satan', rating: 4.9 },
  { name: 'Phoenix Seri Tezgah Tipi Buzdolabı', category: "COOLIN'DUSTRIO", price: '₺64.500', tag: 'Yeni', rating: 4.8 },
  { name: 'Tezgahaltı Bulaşık Makinası', category: "DISHWASHIN'DUSTRIO", price: '₺52.250', tag: 'Servis Dahil', rating: 4.7 },
  { name: 'Paslanmaz Hazırlık Tezgahı', category: "PREPARIN'DUSTRIO", price: '₺18.750', tag: 'Hızlı Teslimat', rating: 4.6 },
];

function App() {
  const [query, setQuery] = useState('');
  const filtered = useMemo(() => products.filter((p) => `${p.name} ${p.category}`.toLowerCase().includes(query.toLowerCase())), [query]);

  return <>
    <div className="topbar">2026 güncel katalog, fiyat listesi, bayi ve servis deneyimini tek pazaryerinde birleştiren demo.</div>
    <header className="nav">
      <div className="brand"><span>N</span>Dustrio Market</div>
      <nav><a>Kategoriler</a><a>Kurumsal</a><a>Servis</a><a>Bayiler</a></nav>
      <button className="ghost"><Menu size={18}/> Menü</button>
    </header>
    <section className="hero">
      <div className="heroText">
        <p className="eyebrow">Amazon & Trendyol tarzı B2B/B2C pazaryeri</p>
        <h1>Endüstriyel mutfak ekipmanlarını keşfet, karşılaştır, sepete ekle.</h1>
        <p>N'Dustrio'nun pişirme, soğutma, saklama, hazırlık, pastahane ve bulaşıkhane ürün mimarisinden ilham alan modern e-ticaret vitrini.</p>
        <div className="search"><Search/><input value={query} onChange={(e)=>setQuery(e.target.value)} placeholder="Ürün, kategori veya seri ara..."/><button>Ara</button></div>
        <div className="metrics"><b>300+ bayi</b><b>200+ servis</b><b>67+ ülke</b><b>2026 katalog</b></div>
      </div>
      <div className="heroCard"><ShoppingCart size={42}/><h2>Sepet Özeti</h2><p>4 ürün • Kurumsal teklif hazır</p><button>Teklif İste</button></div>
    </section>
    <main>
      <section className="features">{[
        [Truck,'Hızlı teslimat','Bayi ve depo ağına göre teslimat planı'], [ShieldCheck,'KVKK uyumlu','Kurumsal üyelik, güvenli teklif ve ödeme'], [Headphones,'Servis talebi','Yetkili servis, kurulum ve yedek parça akışı']
      ].map(([Icon,t,d])=><article key={t}><Icon/><h3>{t}</h3><p>{d}</p></article>)}</section>
      <section className="sectionTitle"><h2>Öne çıkan kategoriler</h2><p>N'Dustrio menüsündeki ürün ailesi, pazaryeri navigasyonuna dönüştürüldü.</p></section>
      <section className="grid categories">{categories.map(c=><article key={c.name} style={{'--accent':c.color}}><span>{c.name}</span><h3>{c.title}</h3><p>{c.items}</p><ChevronRight/></article>)}</section>
      <section className="sectionTitle"><h2>Vitrin ürünleri</h2><p>Filtrelenebilir liste, puan, kampanya etiketi ve teklif akışıyla tasarlandı.</p></section>
      <section className="grid products">{filtered.map(p=><article key={p.name}><div className="badge">{p.tag}</div><div className="photo">{p.category.split("'")[0]}</div><h3>{p.name}</h3><p>{p.category}</p><div className="rating"><Star fill="currentColor" size={16}/> {p.rating}</div><div className="buy"><strong>{p.price}</strong><button>Sepete Ekle</button></div></article>)}</section>
      <section className="marketplace"><div><h2>Kurumsal altyapı planı</h2><p>Satıcı paneli, bayi girişi, servis başvurusu, katalog indirme, teklif yönetimi, çoklu dil ve WhatsApp destek modülleriyle büyümeye hazır.</p></div><button>Yol Haritasını Başlat</button></section>
    </main>
    <footer><div><b>NDustrio Market</b><p><MapPin size={16}/> İstanbul merkezli global endüstriyel mutfak pazaryeri konsepti.</p></div><p>© 2026 Demo. N'Dustrio içerik yapısından esinlenilmiştir.</p></footer>
  </>;
}

createRoot(document.getElementById('root')).render(<App />);

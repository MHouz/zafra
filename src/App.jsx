import { 
  Search, 
  User, 
  ShoppingBag,
  CreditCard, 
  Truck, 
  Package, 
  Heart, 
  Quote,
  Facebook,
  Instagram,
  Youtube,
  Twitter
} from 'lucide-react';
import zafraLogo from '../zafra_white-removebg-preview.png';

const HERO_IMAGE = "https://lh3.googleusercontent.com/aida-public/AB6AXuAl4MSYRiwt1BqMt8Ou7HFLU_XJZSszvs92yso_XjsFHvSOtVWeskpfafj0HvNaW6Lcw0EilTT4xQXuEeUCNdCJzbHzMrA7sNhf4C9Q8sPD1hZwtqre7V3uc49R5JfEW1UiMjazU5gbkElFdQ8Cqjpbtr3zqDcuJjY1SiEqLDHv6lPazRMKDMsDpCo2dDqUMrPsFwzH79699nfipnuuHI6tWhO9iaZbsy6NtYkYgbtGhep1mABYDAxNXXSk8Gy_OUFeRKhnYoQJ0ho";
const PROD_TAGINE = "https://lh3.googleusercontent.com/aida-public/AB6AXuAR8fTsLvlXtuay2F1Ju5Niuq96OMlg_ADwg3L7GZqG9TbjfoM1VMVU-ypD4j0e5yoSHi15TxuIy8eurGbZi-TSEdTA5DSGG0yC0iCc-rEVFHgr4I5Nx8KrE-zAl_d5TSfLeBa0yTLs3A9typmIsDr71Pn-Vu2NkcjovmJaNdpxq51zswTS9qHh-wcWdzY55b05koqD_VK2VanjYgcMTVZqf-3ATV6NAi8tjGDEqVNs_F21JKkfEohnTsy7RPAqkzKvNA_fUdOVaXQ";
const PROD_BAKER = "https://lh3.googleusercontent.com/aida-public/AB6AXuDcDNsZeRyggzj7D5vVOTM2aOPIepadVslc5cJRTGQT1ECb7wD07FdWRSmPfcHMJ4psUX1DlGGCOQb2fhOPr8CVW-2g9iZg-s6BlSn-M0BmyHgLEwkgQ1p5FbMO4JqiX5P4FHRGrs1bxhZJslYndzHliHkAhpSTuo34d8ArvM_67idAiiVw9pGvQLZIFaSr-ROT2DxKf3ulPClrRRZqaNQC3JNFVuhxOGA24JZTiKDgtZVNB998ctmJbeLT2EVIN_gB7CjJLFFSgcg";
const PROD_DISCOVERY = "https://lh3.googleusercontent.com/aida-public/AB6AXuBaK0k4oEXz-zR_i1i_OYclo6em0vDDNTxFETaVHGSCA-BpG9swW8fEMcfgo50MDHM58oq_uCSd-I6muxA5CHB5mTu4dLBvrzSTmmzTce4xbr-pFAtFyPHQH5U9sfbPJz4xh2LIOozxJZh0xAOm1ALJsTEiL88zvlNdtJsZq5PDoRao7Z4IkjaIbCEdJ-Ph3jgHwB1GBEIgl91yMXFohcmNs85cJiMT1O1SvuAhVaPjmpqxVaZMCcxu6zxxojf4IPMOpaIvbL31F6w";
const PROD_HERBS = "https://lh3.googleusercontent.com/aida-public/AB6AXuBHySE2Ux8jeAeP0htqedFCvChKASEsNvAbwAyzhOXCF7940ymlSvere6fDVauiMOvr5zHyiFrIh1zO9Pyi_aRGIEfTA8peczcFAH3VjSpC0B_UqKrQ3LYOOnHmK2oVwORIT5j3e5N7Nx7sfgERfgHxy2nhANry3InQxgYt-NP4Pt-o1PfmfIgfVkyNwCCOzH9zpZvJ8yvEl1nEPE07shm-P-XYDHATjukMw8etqAzpNvyG9ngXJDxFWAGNrAffnB1fkyzvWYC4Ie0";
const HERITAGE_IMAGE = "https://lh3.googleusercontent.com/aida-public/AB6AXuBcVNZv91jHsjm3nQZ0vo41aLQCiVoq7FI_2VqbrG77toI4K7v1g_Agxuf6dNhjwkRHGoPpw2xikzWRG3CPlyy14C4Zhy5V-3CQ_nhk8QxMLgijJb0prbMK6CPqRUWnW1fGaHmD1e2yHGh373Kcg9LoHS-nMH89-9_qMhCGG9W24Vhnur-qL3hMlHJVOsacOpgFzPw2o6fhjE8k1eSmDMgZPRyMif5LSIXAqHsIiyA5SKBQK9EAw3X8wOywGXNZz2kbWPyd8ym_xcA";
const PROD_TURMERIC = "https://lh3.googleusercontent.com/aida-public/AB6AXuDPtiu6FRBHdIZoqvvpVyKUSrj7jw63v4o5jG18ETzJzhm-2LFqV7KbdtPNn9k75_SBkpf_gvEIFPVYGmoTg123Iaq0Htd-AXr_YVlLbZZzhi-aUH1b5pVtqbtnOkmBOWj2o8JIdVNetNAiWVrEJX8L_Q2htZrLacqV0sHOMfWB0ctTfx-1fzZZyg-iHbIgX3qG6fEzqHL8PHchI4qyrYlwEBeqYrq2rOvpHcD0jCywCJE-qBOK7yA7MVsT63nocRP_d7hTGh68Sho";
const PROD_CARDAMOM = "https://lh3.googleusercontent.com/aida-public/AB6AXuDzsS2mEW66vr63VMJ-_uSfrUgx1-7WK2x6F8sFIdYCN1QUULEoCMwKnJw08LRUuKpOFnByaJ34GhesOkO-QF6TcInF7ZBFWVKisnqJYfmTJ0v2XZyLHWwuQq7UDB-Epuxl_VHLF5Rb6HN8i6QntTbpo9eyLOSYrmB15P9Px2-VcirPJwcyZMhdKPair31k17YKWuDHaOUL3WOVQbhjq_Wiy_gKgBYUjQ9GqC8ugVoZbf_TOK3MlXQYFGg7JB828n3gXgZXlZKEeBs";
const PROD_HARISSA = "https://lh3.googleusercontent.com/aida-public/AB6AXuAcgJCVQH1755ch7sqXmYSF_9VrZUz65iyEMQ9Fc4KKLOXuFIDKupsQajfBRU32VEBoJvqelVfrIT92S9OsFjd-oWrbsfT1-uETURVxpuMzTPlI6ky-F3eMlkHwA8d365HNof0YejH2vlDWvl2oiVXeEoyI6-1Wu3vugLFfKz2ZdJgS_XwtqoWQ5jLAMewRG006tL9C0CWrjDoZOQ1xYjySSpWL47MWSUC7lt7XgEdyyPoslshrAyiBJpIAPegRfhztXuUB1xgQ2R4";
const LOGO_URL = "https://aspcoaiqyomzrmivivth.supabase.co/storage/v1/object/public/logo/zafralogo.png";

export default function App() {
  return (
    <div className="min-h-screen bg-white font-sans text-[#1b1c1c] selection:bg-[#c8952a] selection:text-white overflow-x-hidden">
      {/* Navbar */}
      <nav className="absolute top-0 left-0 right-0 z-50 bg-transparent">
        <div className="max-w-[1400px] mx-auto px-6 h-24 flex items-center justify-between">
          <a href="/" className="flex items-center">
            <img src={zafraLogo} alt="Zafra Marrakech" className="h-14 w-auto" />
          </a>
          
          <div className="hidden md:flex items-center gap-10">
            {['Home', 'Shop', 'About', 'Contact'].map((item) => (
              <a 
                key={item} 
                href={`#${item.toLowerCase()}`} 
                className="text-[13px] font-semibold text-white hover:text-white/80 transition-colors tracking-wide"
              >
                {item}
              </a>
            ))}
          </div>

          <div className="flex items-center gap-5 text-white">
            <div className="hidden lg:flex items-center gap-5 mr-2">
              <Facebook className="w-4 h-4 cursor-pointer hover:text-white/80 transition-colors" />
              <Instagram className="w-4 h-4 cursor-pointer hover:text-white/80 transition-colors" />
              <Youtube className="w-4 h-4 cursor-pointer hover:text-white/80 transition-colors" />
              <Twitter className="w-4 h-4 cursor-pointer hover:text-white/80 transition-colors" />
            </div>
            <User className="w-[18px] h-[18px] cursor-pointer hover:text-white/80 transition-colors" />
            <div className="relative cursor-pointer hover:text-white/80 transition-colors">
              <ShoppingBag className="w-[18px] h-[18px]" />
              <span className="absolute -top-2 -right-2 w-4 h-4 bg-white text-black text-[10px] font-bold flex items-center justify-center rounded-full">0</span>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="relative h-screen min-h-[600px] flex items-center justify-center">
        <img 
          src={HERO_IMAGE} 
          alt="Moroccan Spices" 
          className="absolute inset-0 w-full h-full object-cover" 
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-black/40" />
        
        <div className="relative z-10 text-center px-6 max-w-4xl mt-16">
          <span className="text-[11px] font-bold uppercase tracking-[0.25em] text-white/90 mb-5 block">
            WELCOME TO ZAFRA MARRAKECH
          </span>
          <h1 className="text-4xl md:text-6xl lg:text-[64px] font-semibold leading-[1.15] text-white mb-8">
            Discover the Soul of<br/>the Medina in Every Pinch
          </h1>
          <button className="bg-[#7c5800] hover:bg-[#c8952a] text-white px-8 py-3.5 rounded-full text-[13px] font-semibold transition-all">
            Shop Now
          </button>
        </div>
      </header>

      {/* Features */}
      <section className="bg-white py-16 border-b border-gray-100">
        <div className="max-w-[1200px] mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
            { icon: CreditCard, title: "Secure Payment", desc: "100% Encrypted transactions" },
            { icon: Truck, title: "Free Shipping", desc: "On orders over $75" },
            { icon: Package, title: "Delivered with Care", desc: "Hand-packed for purity" },
            { icon: Heart, title: "Ethically Sourced", desc: "Direct from local farmers" },
          ].map((feature, i) => (
            <div key={i} className="flex flex-col items-center text-center gap-3">
              <feature.icon className="w-[26px] h-[26px] text-[#1b1c1c]" strokeWidth={1.5} />
              <div>
                <h3 className="font-semibold text-[13px] text-[#1b1c1c]">{feature.title}</h3>
                <p className="text-[12px] text-[#4f4536] mt-1">{feature.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Trending Products & Banner */}
      <section className="pt-20 pb-10 text-center bg-white">
        <h2 className="text-[26px] font-semibold text-[#1b1c1c]">Trending Products</h2>
      </section>

      <section className="relative h-[400px] w-full overflow-hidden">
        <img src={PROD_DISCOVERY} alt="Flash Sale" className="absolute inset-0 w-full h-full object-cover" referrerPolicy="no-referrer" />
        <div className="absolute inset-0 bg-black/60" />
        <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-6 text-white">
          <h2 className="text-3xl md:text-[40px] font-semibold leading-[1.2] mb-4">
            Flash Sale: Up to 50% Off<br />On Select Items!
          </h2>
          <p className="text-[15px] text-white/90 max-w-2xl mx-auto mb-8 font-light leading-relaxed">
            Don't miss out on our flash sale event! For a limited time, enjoy up to 50% off on a selection of our best-selling artisanal spices.
          </p>
          <button className="border border-white text-white px-8 py-3.5 rounded-full text-[13px] font-semibold hover:bg-white hover:text-black transition-all">
            Shop Now
          </button>
        </div>
      </section>

      {/* Categories */}
      <section className="py-24 px-6 max-w-[1200px] mx-auto bg-white">
        <h2 className="text-[26px] font-semibold text-center mb-16 text-[#1b1c1c]">Our Categories</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
            { name: "Whole Spices", img: PROD_DISCOVERY },
            { name: "Gourmet Herbs", img: PROD_HERBS },
            { name: "Signature Blends", img: PROD_BAKER },
            { name: "Ceramic Gift Sets", img: PROD_TAGINE },
          ].map((cat, i) => (
            <a key={i} href="#" className="text-center group flex flex-col items-center">
              <div className="w-full aspect-square mb-6 relative flex items-center justify-center p-4">
                <img src={cat.img} alt={cat.name} className="w-full h-full object-contain mix-blend-multiply transition-transform duration-500 group-hover:scale-105" referrerPolicy="no-referrer" />
              </div>
              <h3 className="font-medium text-[15px] text-[#1b1c1c]">{cat.name}</h3>
            </a>
          ))}
        </div>
      </section>

      {/* Split About Section */}
      <section className="bg-[#E9F2E6] w-full">
        <div className="max-w-[1200px] mx-auto px-6 py-20 lg:py-24">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div className="w-full aspect-[4/3] relative overflow-hidden">
              <img src={HERITAGE_IMAGE} alt="Artisan Market" className="absolute inset-0 w-full h-full object-cover" referrerPolicy="no-referrer" />
            </div>
            <div className="flex flex-col justify-center">
              <h2 className="text-3xl md:text-[34px] font-semibold leading-[1.25] text-[#1b1c1c] mb-6">
                Your Premier<br />Destination for All<br />Flavors.
              </h2>
              <p className="text-[14px] text-[#4f4536] mb-10 leading-relaxed max-w-md">
                At Zafra Marrakech, we believe in the transformative power of quality spices. Whether you're a professional chef or just starting your culinary journey, our curated selection of botanical treasures will inspire and enrich your cooking.
              </p>
              <div className="flex gap-16 border-t border-[#1b1c1c]/10 pt-8">
                <div>
                  <p className="text-[26px] font-semibold text-[#1b1c1c] mb-1">98%</p>
                  <p className="text-[12px] text-[#4f4536]">Customer Satisfaction</p>
                </div>
                <div>
                  <p className="text-[26px] font-semibold text-[#1b1c1c] mb-1">103K</p>
                  <p className="text-[12px] text-[#4f4536]">Orders Delivered</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Popular Products */}
      <section className="py-24 px-6 max-w-[1200px] mx-auto bg-white">
        <h2 className="text-[26px] font-semibold text-center mb-16 text-[#1b1c1c]">Popular Products</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {[
            { name: "Organic Turmeric", category: "Ground Root", price: "14.00", img: PROD_TURMERIC },
            { name: "Green Cardamom", category: "Whole Pods", price: "16.00", img: PROD_CARDAMOM },
            { name: "Rose Harissa", category: "Artisan Paste", price: "15.00", img: PROD_HARISSA },
            { name: "Ras el Hanout", category: "Signature Blend", price: "18.00", img: PROD_BAKER },
          ].map((prod, i) => (
            <div key={i} className="group cursor-pointer">
              <div className="bg-[#f9f9f9] aspect-square mb-5 flex items-center justify-center p-8">
                <img src={prod.img} alt={prod.name} className="w-full h-full object-contain mix-blend-multiply transition-transform duration-500 group-hover:scale-105" referrerPolicy="no-referrer" />
              </div>
              <h3 className="font-semibold text-[14px] text-[#1b1c1c] mb-1">{prod.name}</h3>
              <p className="text-[13px] text-[#4f4536] mb-2">{prod.category}</p>
              <p className="text-[14px] font-semibold text-[#1b1c1c]">${prod.price}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-[#E9F2E6] w-full">
        <div className="max-w-[1200px] mx-auto px-6 py-20 lg:py-28">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24">
            {/* Left Column */}
            <div className="flex flex-col gap-10">
              <div className="max-w-md">
                <h2 className="text-3xl md:text-[34px] font-semibold leading-[1.25] mb-4 text-[#1b1c1c]">
                  What Our Customers Say
                </h2>
                <p className="text-[14px] text-[#4f4536]">
                  Discover the reasons why people love us and become your go-to partner.
                </p>
              </div>
              <div className="bg-white p-10 flex flex-col gap-6 shadow-sm">
                <Quote className="w-6 h-6 text-[#c8952a]" fill="currentColor" />
                <p className="text-[14px] text-[#4f4536] leading-relaxed">
                  "The quality of the Saffron I received is simply unparalleled. It has transformed my cooking completely. The delivery was prompt and the packaging is beautiful. Highly recommend them."
                </p>
                <div className="mt-2">
                  <p className="font-semibold text-[14px] text-[#1b1c1c]">Marcus Reed</p>
                  <p className="text-[12px] text-[#4f4536] mt-0.5">Home Chef</p>
                </div>
              </div>
            </div>

            {/* Right Column */}
            <div className="flex flex-col justify-end">
              <div className="bg-white p-10 flex flex-col gap-6 shadow-sm lg:translate-y-16">
                <Quote className="w-6 h-6 text-[#c8952a]" fill="currentColor" />
                <p className="text-[14px] text-[#4f4536] leading-relaxed">
                  "I am absolutely thrilled with the service I received from their company! They were attentive, responsive, and genuinely cared about meeting my needs. Highly recommend them."
                </p>
                <div className="mt-2">
                  <p className="font-semibold text-[14px] text-[#1b1c1c]">Elena Vance</p>
                  <p className="text-[12px] text-[#4f4536] mt-0.5">Restaurant Owner</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer Minimal */}
      <footer className="bg-white py-12 border-t border-gray-100">
        <div className="max-w-[1200px] mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
          <a href="/" className="flex items-center">
            <img src={LOGO_URL} alt="Zafra Marrakech" className="h-10 w-auto" referrerPolicy="no-referrer" />
          </a>
          <p className="text-[13px] text-[#4f4536]">
            © 2024 Zafra Marrakech. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}

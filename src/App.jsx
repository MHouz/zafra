import { 
  ShoppingBag, 
  Search, 
  User, 
  ShoppingCart, 
  CreditCard, 
  Truck, 
  Package, 
  Heart, 
  Quote, 
  Globe, 
  Mail, 
  Share2,
  ChevronRight
} from 'lucide-react';
import { motion } from 'motion/react';
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
const FINAL_CTA_BG = "https://lh3.googleusercontent.com/aida-public/AB6AXuA_ymgRUkZqu3yTH-7h6lVLGlHuuZXYzzMxeyV2ujrPtUNkOtj1gnKFhsn8RYQAOK3icS_phmVXNzhPPICsudUSMJO1YkAi7EEG0PehXGipZTvXpu4v_eBpfoW7Pn0-pP0x63Wel7r5GQNkx3u4jKAgt6bItChwr3BQZqY_m7Rks_6Vv-knae-swL3YEVq9vlyXvUMjyDn75y8mfW8Qgo2kp2WYeyRJ3AGoXYQpnftd5FppcAqgRsq0VnzOEF9FKEGwl7YniDbgGuY";
const LOGO_URL = "https://aspcoaiqyomzrmivivth.supabase.co/storage/v1/object/public/logo/zafralogo.png";

export default function App() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <div className="min-h-screen bg-background selection:bg-primary-container selection:text-on-primary-container overflow-x-hidden">
      {/* Navbar */}
      <nav className="absolute top-0 left-0 right-0 z-50 bg-transparent">
        <div className="max-w-7xl mx-auto px-6 h-24 flex items-center justify-between">
          <a href="/" className="flex items-center gap-3 group">
            <img src={zafraLogo} alt="Zafra Marrakech" className="h-28 md:h-32 w-auto transition-transform group-hover:scale-105" />
          </a>
          
          <div className="hidden md:flex items-center gap-8">
            {['Home', 'Shop', 'About', 'Contact'].map((item) => (
              <a 
                key={item} 
                href={`#${item.toLowerCase()}`} 
                className="text-sm font-semibold uppercase tracking-[0.1em] text-white/90 hover:text-white transition-colors"
              >
                {item}
              </a>
            ))}
          </div>

          <div className="flex items-center gap-6 text-white">
            <button className="p-2 hover:bg-white/10 rounded-full transition-colors">
              <Search className="w-5 h-5" />
            </button>
            <button className="p-2 hover:bg-white/10 rounded-full transition-colors">
              <User className="w-5 h-5" />
            </button>
            <button className="p-2 hover:bg-white/10 rounded-full transition-colors relative">
              <ShoppingBag className="w-5 h-5" />
              <span className="absolute top-0 right-0 w-4 h-4 bg-primary text-white text-[10px] font-bold flex items-center justify-center rounded-full">0</span>
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="relative h-screen flex items-center justify-center overflow-hidden">
        <img 
          src={HERO_IMAGE} 
          alt="Moroccan Spices" 
          className="absolute inset-0 w-full h-full object-cover" 
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-black/40" />
        
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="relative z-10 text-center px-6 max-w-4xl pt-24"
        >
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-white mb-6 block">WELCOME TO ZAFRA MARRAKECH</span>
          <h1 className="text-5xl md:text-7xl font-bold leading-[1.1] text-white mb-10">
            Discover the Soul of the Medina in Every Pinch
          </h1>
          <motion.button 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-primary hover:bg-primary-container text-white px-10 py-4 rounded-full text-sm font-bold uppercase tracking-[0.1em] transition-all"
          >
            Shop Now
          </motion.button>
        </motion.div>
      </header>

      {/* Features Bar */}
      <section className="bg-white py-16 border-b border-outline-variant/30">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
            { icon: CreditCard, title: "Secure Payment", desc: "100% Encrypted transactions" },
            { icon: Truck, title: "Free Shipping", desc: "On orders over $75" },
            { icon: Package, title: "Delivered with Care", desc: "Hand-packed for purity" },
            { icon: Heart, title: "Ethically Sourced", desc: "Direct from local farmers" },
          ].map((feature, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="flex flex-col items-center text-center gap-4"
            >
              <feature.icon className="w-8 h-8 text-on-surface mb-2" strokeWidth={1.5} />
              <div>
                <h3 className="font-bold text-sm text-on-surface mb-1">{feature.title}</h3>
                <p className="text-xs text-on-surface-variant">{feature.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Trending Products */}
      <section className="pt-24 pb-12 px-6 max-w-7xl mx-auto text-center" id="shop">
        <h2 className="text-[32px] font-semibold leading-[1.2] text-on-surface">Trending Products</h2>
      </section>

      {/* Flash Sale Banner */}
      <section className="relative h-[400px] overflow-hidden flex items-center justify-center">
        <img src={PROD_DISCOVERY} alt="Flash Sale" className="absolute inset-0 w-full h-full object-cover" referrerPolicy="no-referrer" />
        <div className="absolute inset-0 bg-black/60" />
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="relative z-10 text-center px-6 text-white"
        >
          <h2 className="text-4xl md:text-5xl font-semibold leading-[1.2] mb-4">Flash Sale: Up to 50% Off<br />On Select Items!</h2>
          <p className="text-lg text-stone-200 max-w-xl mx-auto mb-8 opacity-90">
            Don't miss out on our flash sale event! For a limited time, enjoy up to 50% off on a selection of our best-selling artisanal spices.
          </p>
          <button className="border border-white text-white px-10 py-3 rounded-full text-sm font-bold uppercase tracking-[0.1em] hover:bg-white hover:text-black transition-all">
            Shop Now
          </button>
        </motion.div>
      </section>

      {/* Categories */}
      <section className="py-24 px-6 max-w-7xl mx-auto">
        <h2 className="text-[32px] font-semibold leading-[1.2] text-center mb-16 text-on-surface">Our Categories</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
            { name: "Whole Spices", img: PROD_DISCOVERY },
            { name: "Gourmet Herbs", img: PROD_HERBS },
            { name: "Signature Blends", img: PROD_BAKER },
            { name: "Ceramic Gift Sets", img: PROD_TAGINE },
          ].map((cat, i) => (
            <motion.a 
              key={i}
              href="#"
              whileHover={{ y: -10 }}
              className="text-center group flex flex-col items-center"
            >
              <div className="aspect-square w-full max-w-[200px] mb-6 relative overflow-hidden">
                <img src={cat.img} alt={cat.name} className="w-full h-full object-contain" referrerPolicy="no-referrer" />
              </div>
              <h3 className="font-bold text-sm text-on-surface uppercase tracking-widest">{cat.name}</h3>
            </motion.a>
          ))}
        </div>
      </section>

      {/* About Section */}
      <section className="bg-[#E9F2E6] py-24" id="about">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <img src={HERITAGE_IMAGE} alt="Artisan Market" className="w-full h-auto object-cover" referrerPolicy="no-referrer" />
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex flex-col justify-center"
          >
            <h2 className="text-[48px] font-bold leading-[1.1] text-on-surface mb-6">Your Premier Destination for Authentic Flavors.</h2>
            <p className="text-lg text-on-surface-variant mb-12">
              At Zafra Marrakech, we believe in the transformative power of quality spices. Whether you're a professional chef or a home cook, our curated selection of organic, hand-sorted botanical treasures will inspire and enrich your culinary journey.
            </p>
            <div className="flex gap-16">
              <div>
                <p className="text-[32px] font-semibold leading-[1.2] text-on-surface mb-1">500K+</p>
                <p className="text-on-surface-variant text-sm font-medium">Spice Enthusiasts</p>
              </div>
              <div>
                <p className="text-[32px] font-semibold leading-[1.2] text-on-surface mb-1">10.5K</p>
                <p className="text-on-surface-variant text-sm font-medium">Orders Delivered</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Popular Products */}
      <section className="py-24 px-6 max-w-7xl mx-auto">
        <h2 className="text-[32px] font-semibold leading-[1.2] text-center mb-16 text-on-surface">Popular Products</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {[
            { name: "Organic Turmeric", category: "Ground Root", price: "14.00", img: PROD_TURMERIC },
            { name: "Green Cardamom Pods", category: "Whole Pods", price: "16.00", img: PROD_CARDAMOM },
            { name: "Rose Harissa", category: "Artisan Paste", price: "15.00", img: PROD_HARISSA },
          ].map((prod, i) => (
            <motion.div 
              key={i} 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group cursor-pointer"
            >
              <div className="aspect-[4/5] bg-surface-container overflow-hidden mb-6 relative">
                <img src={prod.img} alt={prod.name} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" referrerPolicy="no-referrer" />
              </div>
              <h3 className="font-bold text-lg text-on-surface mb-1">{prod.name}</h3>
              <p className="text-sm text-on-surface-variant mb-2">{prod.category}</p>
              <p className="text-lg font-bold text-on-surface">${prod.price}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-[#E9F2E6] py-24 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left Column */}
          <div className="flex flex-col gap-10">
            <div>
              <h2 className="text-[48px] font-bold leading-[1.1] mb-4 text-on-surface">What Our Customers Say</h2>
              <p className="text-lg text-on-surface-variant">
                Discover the reasons why people love us and become your go-to partner.
              </p>
            </div>
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white p-10 rounded-2xl flex flex-col gap-6"
            >
              <Quote className="w-8 h-8 text-primary" fill="currentColor" />
              <p className="text-lg text-on-surface leading-relaxed">
                "The quality of the Saffron I received is simply unparalleled. It has transformed my cooking completely. The delivery was prompt and the packaging is beautiful. Highly recommend them."
              </p>
              <div className="flex items-center gap-4 mt-2">
                <img src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=100" alt="Marcus Reed" className="w-12 h-12 rounded-full object-cover" />
                <div>
                  <p className="font-bold text-sm text-on-surface">Marcus Reed</p>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right Column */}
          <div className="flex flex-col gap-8">
            {[
              { 
                name: "Elena Vance", 
                text: "I am absolutely thrilled with the service I received from their company! They were attentive, responsive, and genuinely cared about meeting my needs. Highly recommend them.",
                img: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=100"
              },
              { 
                name: "Sophia Chen", 
                text: "Their team exceeded our expectations. Their creative approach and attention to detail brought our kitchen vision to life. Highly recommended!",
                img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=100"
              }
            ].map((test, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.2 }}
                className="bg-white p-10 rounded-2xl flex flex-col gap-6"
              >
                <Quote className="w-8 h-8 text-primary opacity-50" fill="currentColor" />
                <p className="text-lg text-on-surface/80">{test.text}</p>
                <div className="flex items-center gap-4 mt-2">
                  <img src={test.img} alt={test.name} className="w-12 h-12 rounded-full object-cover" />
                  <div>
                    <p className="font-bold text-sm text-on-surface">{test.name}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="relative h-[400px] flex items-center justify-center overflow-hidden">
        <img src={FINAL_CTA_BG} alt="Spice Background" className="absolute inset-0 w-full h-full object-cover" referrerPolicy="no-referrer" />
        <div className="absolute inset-0 bg-black/50" />
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative z-10 text-center px-6 text-white"
        >
          <h2 className="text-[32px] font-semibold leading-[1.2] text-4xl mb-6">Ready to Find Your Perfect Blend?</h2>
          <p className="text-lg text-stone-200 mb-8 max-w-xl mx-auto">
            Browse our online store or visit us in person to experience the heritage of Moroccan flavor.
          </p>
          <button className="bg-primary hover:bg-primary-container text-white px-10 py-3 rounded-full text-sm font-bold uppercase tracking-[0.1em] transition-all">
            Shop Now
          </button>
        </motion.div>
      </section>

      {/* Footer */}
      <footer className="bg-background pt-16 pb-8 px-6">
        <div className="max-w-7xl mx-auto flex flex-col items-center">
          {/* Row 1: Logo, Links, Socials */}
          <div className="w-full flex flex-col md:flex-row items-center justify-between gap-8 mb-12">
            <a href="/" className="flex items-center gap-3">
              <img src={LOGO_URL} alt="Zafra Marrakech" className="h-10 w-auto" referrerPolicy="no-referrer" />
            </a>
            
            <div className="flex items-center gap-8">
              {['Home', 'Shop', 'About', 'Contact'].map((item) => (
                <a key={item} href={`#${item.toLowerCase()}`} className="text-sm font-semibold uppercase tracking-[0.1em] text-on-surface hover:text-primary transition-colors">
                  {item}
                </a>
              ))}
            </div>

            <div className="flex gap-4">
              {[Globe, Mail, Share2].map((Icon, i) => (
                <button key={i} className="p-2 hover:bg-surface-container rounded-full transition-colors">
                  <Icon className="w-5 h-5 text-on-surface" strokeWidth={1.5} />
                </button>
              ))}
            </div>
          </div>

          {/* Row 2: Copyright */}
          <div className="text-xs text-on-surface-variant tracking-wider uppercase font-semibold">
            © 2024 Zafra Marrakech. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}

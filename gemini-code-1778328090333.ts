'use client';

import { motion } from 'framer-motion';
import { Instagram, MapPin, Phone, Clock, ChevronRight, Menu as MenuIcon, X, ArrowRight } from 'lucide-react';
import { useState } from 'react';

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { name: 'Gusti', href: '#gusti' },
    { name: 'Storia', href: '#storia' },
    { name: 'Dove siamo', href: '#contatti' },
  ];

  return (
    <div className="min-h-screen overflow-x-hidden">
      {/* NAVBAR */}
      <nav className="fixed w-full z-50 top-0 py-6 px-6 lg:px-12 flex justify-between items-center premium-blur border-b border-brand-espresso/5">
        <div className="text-2xl font-serif font-bold tracking-widest uppercase">Oasi Merano</div>
        
        {/* Desktop Nav */}
        <div className="hidden md:flex gap-12 items-center">
          {navLinks.map((link) => (
            <a key={link.name} href={link.href} className="text-sm uppercase tracking-widest hover:text-brand-pistachio transition-colors">
              {link.name}
            </a>
          ))}
          <a href="#contatti" className="bg-brand-espresso text-brand-vanilla px-8 py-3 rounded-full text-xs uppercase tracking-widest hover:scale-105 transition-transform">
            Vieni a trovarci
          </a>
        </div>

        {/* Mobile Toggle */}
        <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? <X /> : <MenuIcon />}
        </button>
      </nav>

      {/* MOBILE MENU OVERLAY */}
      {isMenuOpen && (
        <div className="fixed inset-0 z-[60] bg-brand-vanilla flex flex-col items-center justify-center gap-8">
          <button className="absolute top-6 right-6" onClick={() => setIsMenuOpen(false)}><X size={32} /></button>
          {navLinks.map((link) => (
            <a key={link.name} href={link.href} onClick={() => setIsMenuOpen(false)} className="text-3xl font-serif uppercase tracking-widest">
              {link.name}
            </a>
          ))}
        </div>
      )}

      {/* HERO SECTION */}
      <section className="relative h-screen flex items-center justify-center pt-20">
        <div className="absolute inset-0 bg-[url('[https://images.unsplash.com/photo-1501443762994-82bd5dace89a?q=80&w=2070&auto=format&fit=crop](https://images.unsplash.com/photo-1501443762994-82bd5dace89a?q=80&w=2070&auto=format&fit=crop)')] bg-cover bg-center">
           <div className="absolute inset-0 bg-brand-espresso/30 mix-blend-multiply"></div>
        </div>
        
        <div className="relative z-10 text-center px-4 max-w-5xl">
          <motion.span 
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
            className="inline-block text-brand-vanilla text-xs lg:text-sm uppercase tracking-[0.4em] mb-6"
          >
            Dal 1990 l'eccellenza artigianale
          </motion.span>
          <motion.h1 
            initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.2 }}
            className="text-6xl md:text-8xl lg:text-9xl text-white font-serif leading-tight mb-10"
          >
            Puro Piacere,<br />Naturalmente.
          </motion.h1>
          <motion.div 
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }}
            className="flex flex-col sm:flex-row gap-6 justify-center items-center"
          >
            <a href="#gusti" className="bg-brand-vanilla text-brand-espresso w-full sm:w-auto px-12 py-5 rounded-full font-bold uppercase text-xs tracking-widest hover:bg-white transition-all shadow-xl">
              Esplora i Gusti
            </a>
            <a href="#contatti" className="text-white border border-white/30 backdrop-blur-md w-full sm:w-auto px-12 py-5 rounded-full font-bold uppercase text-xs tracking-widest hover:bg-white/10 transition-all">
              Dove Siamo
            </a>
          </motion.div>
        </div>
      </section>

      {/* FEATURES - L'ESPERIENZA */}
      <section className="py-32 px-6 lg:px-12 bg-white">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-24 items-center">
          <motion.div initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
            <h2 className="text-5xl lg:text-6xl mb-8 leading-tight">Il Segreto è nella Semplicità delle Alpi.</h2>
            <p className="text-xl text-brand-espresso/70 mb-12 font-light leading-relaxed">
              Il nostro gelato non è solo un dolce. È un racconto di Merano, fatto di latte fresco di malga, frutta raccolta all'apice della maturazione e una pazienza d'altri tempi. Ogni mantecatura è una promessa di qualità premium.
            </p>
            <div className="space-y-8">
              {[
                { title: 'Latte Altoatesino', text: 'Solo latte fresco dai nostri pascoli.' },
                { title: 'Artigianalità', text: 'Nessun preparato industriale, solo ricette autentiche.' },
                { title: 'Frutta Vera', text: 'Selezionata a mano dai mercati locali.' }
              ].map((item, i) => (
                <div key={i} className="flex gap-6 items-start">
                  <div className="w-10 h-10 rounded-full bg-brand-pistachio/10 flex items-center justify-center shrink-0">
                    <ChevronRight className="text-brand-pistachio" size={20} />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold mb-1">{item.title}</h4>
                    <p className="text-brand-espresso/60">{item.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }}
            className="relative h-[600px] rounded-3xl overflow-hidden shadow-2xl"
          >
            <img 
              src="[https://images.unsplash.com/photo-1567206563064-6f60f40a2b57?q=80&w=1974&auto=format&fit=crop](https://images.unsplash.com/photo-1567206563064-6f60f40a2b57?q=80&w=1974&auto=format&fit=crop)" 
              className="w-full h-full object-cover" 
              alt="Gelato artigianale premium"
            />
          </motion.div>
        </div>
      </section>

      {/* GUSTI PREVIEW */}
      <section id="gusti" className="py-32 px-6 lg:px-12 bg-brand-cream">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
            <div className="max-w-2xl">
              <span className="text-brand-pistachio uppercase tracking-widest text-sm font-bold block mb-4">I Nostri Capolavori</span>
              <h2 className="text-5xl lg:text-7xl">Gusti che Emozionano.</h2>
            </div>
            <a href="#" className="flex items-center gap-3 text-sm font-bold uppercase tracking-widest border-b-2 border-brand-espresso pb-2 hover:text-brand-pistachio hover:border-brand-pistachio transition-all">
              Vedi il Menu Completo <ArrowRight size={18} />
            </a>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { name: 'Pistacchio Bronte', cat: 'I Classici', img: '[https://images.unsplash.com/photo-1594913785162-e6786b02dbaa?q=80&w=2042&auto=format&fit=crop](https://images.unsplash.com/photo-1594913785162-e6786b02dbaa?q=80&w=2042&auto=format&fit=crop)' },
              { name: 'Fragola di Bosco', cat: 'Frutta', img: '[https://images.unsplash.com/photo-1497034825429-c343d7c6a68f?q=80&w=1974&auto=format&fit=crop](https://images.unsplash.com/photo-1497034825429-c343d7c6a68f?q=80&w=1974&auto=format&fit=crop)' },
              { name: 'Nocciola IGP', cat: 'Creme', img: '[https://images.unsplash.com/photo-1557142046-c704a3adf364?q=80&w=1974&auto=format&fit=crop](https://images.unsplash.com/photo-1557142046-c704a3adf364?q=80&w=1974&auto=format&fit=crop)' }
            ].map((gusto, i) => (
              <motion.div 
                key={i} 
                whileHover={{ y: -12 }}
                className="group cursor-pointer"
              >
                <div className="relative h-96 rounded-2xl overflow-hidden mb-6 shadow-lg">
                  <img src={gusto.img} className="w-full h-full object-cover grayscale-[20%] group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105" />
                  <div className="absolute top-6 left-6 bg-white/90 px-4 py-1 rounded-full text-[10px] uppercase font-bold tracking-widest">
                    {gusto.cat}
                  </div>
                </div>
                <h3 className="text-2xl mb-1">{gusto.name}</h3>
                <p className="text-brand-espresso/50 uppercase text-xs tracking-widest">Disponibilità Stagionale</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="py-24 px-6 bg-brand-espresso text-brand-vanilla text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-5xl mb-8">Un'estate a Merano non è completa senza l'Oasi.</h2>
          <p className="text-brand-vanilla/60 mb-12 text-lg font-light">Vieni a scoprire perché siamo la gelateria preferita dai locali e dai viaggiatori più esigenti.</p>
          <div className="flex flex-wrap justify-center gap-6">
             <a href="tel:+390000000000" className="flex items-center gap-3 bg-brand-pistachio text-white px-10 py-4 rounded-full font-bold uppercase text-xs tracking-widest hover:scale-105 transition-transform">
               <Phone size={18} /> Chiama Ora
             </a>
             <a href="[https://wa.me/390000000000](https://wa.me/390000000000)" className="flex items-center gap-3 bg-white text-brand-espresso px-10 py-4 rounded-full font-bold uppercase text-xs tracking-widest hover:scale-105 transition-transform">
               WhatsApp Rapido
             </a>
          </div>
        </div>
      </section>

      {/* FOOTER & MAP */}
      <footer id="contatti" className="bg-brand-vanilla pt-32 pb-12 px-6 lg:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-24 mb-24">
            <div>
              <h2 className="text-6xl mb-12">Passa a trovarci.</h2>
              <div className="space-y-10">
                <div className="flex gap-8">
                  <MapPin className="text-brand-pistachio shrink-0" size={32} />
                  <div>
                    <h4 className="text-sm uppercase tracking-widest opacity-50 mb-2">Indirizzo</h4>
                    <p className="text-2xl font-serif">Via delle Eccellenze 1<br />39012 Merano (BZ)</p>
                  </div>
                </div>
                <div className="flex gap-8">
                  <Clock className="text-brand-pistachio shrink-0" size={32} />
                  <div>
                    <h4 className="text-sm uppercase tracking-widest opacity-50 mb-2">Orari</h4>
                    <p className="text-2xl font-serif">Ogni giorno: 11:00 — 23:00</p>
                    <p className="text-sm text-brand-strawberry font-bold uppercase mt-2">Aperti anche nei festivi</p>
                  </div>
                </div>
                <div className="flex gap-8">
                  <Instagram className="text-brand-pistachio shrink-0" size={32} />
                  <div>
                    <h4 className="text-sm uppercase tracking-widest opacity-50 mb-2">Social</h4>
                    <a href="#" className="text-2xl font-serif border-b-2 border-brand-espresso hover:text-brand-pistachio hover:border-brand-pistachio transition-all">@oasimerano</a>
                  </div>
                </div>
              </div>
            </div>
            <div className="h-[500px] bg-brand-cream rounded-3xl overflow-hidden shadow-2xl relative">
              {/* Google Maps Placeholder - Inserire Iframe qui */}
              <div className="absolute inset-0 bg-gray-200 flex items-center justify-center">
                 <p className="text-brand-espresso/40 uppercase tracking-widest font-bold">Mappa Interattiva</p>
              </div>
            </div>
          </div>
          
          <div className="pt-12 border-t border-brand-espresso/10 flex flex-col md:flex-row justify-between items-center gap-8">
            <p className="text-sm opacity-40">© 2026 Oasi Merano. Tutti i diritti riservati.</p>
            <div className="flex gap-8 text-xs uppercase tracking-[0.2em] opacity-40">
              <a href="#">Privacy Policy</a>
              <a href="#">Note Legali</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
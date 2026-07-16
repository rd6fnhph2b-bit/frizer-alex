'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Scissors, Star, MapPin, Phone, Clock, Quote, CheckCircle2, ChevronRight, X, ArrowLeftRight } from 'lucide-react';

// --- KOMPONENTA ZA "PRE I POSLE" SLAJDER ---
const BeforeAfterSlider = ({ beforeImage, afterImage }: { beforeImage: string, afterImage: string }) => {
  const [sliderPosition, setSliderPosition] = useState(50);

  return (
    <div className="relative w-full h-[400px] md:h-[500px] rounded-sm overflow-hidden group select-none border border-white/10 shadow-2xl">
      {/* Posle Slika (Pozadina) */}
      <div className="absolute inset-0">
        <img src={afterImage} alt="Posle" className="w-full h-full object-cover" />
      </div>

      {/* Pre Slika (Prednji plan, isečena) */}
      <div 
        className="absolute inset-0 pointer-events-none"
        style={{ clipPath: `polygon(0 0, ${sliderPosition}% 0, ${sliderPosition}% 100%, 0 100%)` }}
      >
        <img src={beforeImage} alt="Pre" className="w-full h-full object-cover grayscale-[30%]" />
      </div>

      {/* Linija i Ručica Slajdera */}
      <div 
        className="absolute top-0 bottom-0 w-[2px] bg-white cursor-ew-resize pointer-events-none"
        style={{ left: `calc(${sliderPosition}%)` }}
      >
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 bg-white flex items-center justify-center shadow-xl">
          <ArrowLeftRight className="w-5 h-5 text-black" />
        </div>
      </div>

      {/* Nevidljivi Input Range za kontrolu */}
      <input 
        type="range" 
        min="0" 
        max="100" 
        value={sliderPosition}
        onChange={(e) => setSliderPosition(Number(e.target.value))}
        className="absolute inset-0 w-full h-full opacity-0 cursor-ew-resize z-10 touch-pan-y"
      />
      
      {/* Oznake Pre i Posle */}
      <div className="absolute top-6 left-6 bg-black/80 backdrop-blur-md text-white px-4 py-2 text-xs font-bold tracking-widest uppercase pointer-events-none border border-white/10">Pre</div>
      <div className="absolute top-6 right-6 bg-white text-black px-4 py-2 text-xs font-bold tracking-widest uppercase pointer-events-none shadow-lg">Posle</div>
    </div>
  );
};

// --- BAZA PODATAKA ---
const services = [
  { id: 1, name: 'Šišanje', price: '1000 RSD', desc: 'Klasično ili moderno šišanje tačno po vašoj želji.', popular: false },
  { id: 2, name: 'Šišanje Fade', price: '1300 RSD', desc: 'Precizan i čist prelaz (fade) mašinicom.', popular: true },
  { id: 3, name: 'Brada Štucovanje', price: '500 RSD', desc: 'Sređivanje i oblikovanje brade.', popular: false },
  { id: 4, name: 'Brada Fade', price: '700 RSD', desc: 'Oblikovanje brade sa prelazom za oštriji izgled.', popular: false },
  { id: 5, name: 'Pranje Kose', price: '400 RSD', desc: 'Priprema za šišanje ili osveženje nakon.', popular: false },
];

const reviews = [
  {
    id: 1,
    text: "Professional service. The guy was very straightforward and finished the haircut as it is requested... I think this frizer can be the best in Prvomajska.",
    author: "Zadovoljni Klijent",
  },
  {
    id: 2,
    text: "Uvek naprave frizuru tačnu kako im vi kažete i uvek bez mane. Zaposleni su veoma ljubazni i prijatni. Odlična frizura za svačiji džep!",
    author: "Stalna Mušterija",
  },
  {
    id: 3,
    text: "Odlican frizer, mnogo dobro sisaju za mene je jedan od najboljih u Zemunu. Nije skupo al bas super sisaju za svaku pohvalu... 😀",
    author: "Lokalni Vodič",
  },
];

const galleryImages = [
  "https://images.unsplash.com/photo-1503951914875-452162b09f6f?auto=format&fit=crop&q=80&w=600&h=600", 
  "https://images.unsplash.com/photo-1599351431202-1e0f0137599a?auto=format&fit=crop&q=80&w=600&h=800",
  "https://images.unsplash.com/photo-1622286342621-4bd786c2447c?auto=format&fit=crop&q=80&w=800&h=600",
  "https://images.unsplash.com/photo-1585747860715-2ba37e788b70?auto=format&fit=crop&q=80&w=600&h=600",
];

// --- FRAMER MOTION ANIMACIJE ---
const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
  },
};

const imageScale = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.8, ease: 'easeOut' } },
};

export default function AlexHairSalon() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <div className="min-h-screen bg-[#090a0f] text-slate-200 font-sans overflow-x-hidden selection:bg-slate-700">
      
      {/* HERO SEKCIJA - ELEGANTNA I OZBILJNA */}
      <section className="relative min-h-[90vh] flex items-center justify-center px-4 md:px-8 bg-[#040404] border-b border-white/5">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1585747860715-2ba37e788b70?auto=format&fit=crop&q=80&w=1920&h=1080" 
            alt="Enterijer frizerskog salona" 
            className="w-full h-full object-cover opacity-30 grayscale"
          />
          {/* Suptilni gradijenti umesto prenaglašenih */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#090a0f] via-transparent to-[#090a0f]/80" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#090a0f] via-[#090a0f]/50 to-transparent" />
        </div>

        <div className="relative z-10 w-full max-w-6xl mx-auto flex flex-col items-start justify-center pt-20">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="space-y-6 max-w-3xl"
          >
            {/* Elegantna mala oznaka */}
            <div className="flex items-center gap-4 mb-4">
              <div className="w-12 h-[1px] bg-slate-400"></div>
              <p className="text-xs font-bold tracking-[0.3em] text-slate-400 uppercase">Muški Frizer Alex</p>
            </div>
            
            {/* Oštar, čist naslov */}
            <h1 className="text-5xl md:text-7xl lg:text-[5.5rem] font-black tracking-tight text-white uppercase leading-[1.05]">
              Bez čekanja.<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-slate-300 to-slate-600">Samo rezultati.</span>
            </h1>
            
            <p className="text-lg md:text-xl text-slate-400 font-light leading-relaxed max-w-xl pt-2">
              Zaboravite na zakazivanje mesec dana unapred. Uđite kada vama odgovara i dobijte vrhunsku uslugu, precizno šišanje i najbolji fade u Zemunu.
            </p>

            {/* Oštra, četvrtasta dugmad (premium osećaj) */}
            <div className="flex flex-col sm:flex-row items-start gap-4 pt-8">
              <a href="tel:0638345007" className="w-full sm:w-auto px-10 py-5 bg-white text-black font-bold uppercase tracking-widest text-sm hover:bg-slate-200 transition-all duration-300 flex items-center justify-center gap-3">
                <Phone className="w-4 h-4" /> Pozovi Nas
              </a>
              <a href="#usluge" className="w-full sm:w-auto px-10 py-5 bg-transparent border border-white/20 text-white font-bold uppercase tracking-widest text-sm hover:bg-white/10 transition-all duration-300 flex items-center justify-center gap-3">
                Cenovnik <ChevronRight className="w-4 h-4" />
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* O NAMA */}
      <section className="py-20 px-4 md:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={imageScale}
            className="relative h-[400px] md:h-[500px] rounded-sm overflow-hidden border border-white/10"
          >
            <img src="https://images.unsplash.com/photo-1599351431202-1e0f0137599a?auto=format&fit=crop&q=80&w=800&h=1000" alt="Rad u salonu" className="w-full h-full object-cover grayscale-[30%]" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#090a0f] via-transparent to-transparent opacity-80" />
            <div className="absolute bottom-6 left-6 right-6 p-6 bg-white/5 backdrop-blur-md border border-white/10">
              <p className="text-slate-200 font-medium italic">"Uvek naprave frizuru tačnu kako im vi kažete i uvek bez mane."</p>
            </div>
          </motion.div>

          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={staggerContainer}
            className="space-y-6"
          >
            <motion.h2 variants={fadeInUp} className="text-3xl md:text-4xl font-bold text-white uppercase tracking-tight">
              Vaša kosa je naš potpis.
            </motion.h2>
            <motion.p variants={fadeInUp} className="text-slate-400 text-lg leading-relaxed">
              Naš salon u Prvomajskoj ulici nije opremljen da vas zaslepi nepotrebnim luksuzom, već da vam pruži ono najvažnije — <strong className="text-white">vrhunsku, preciznu i profesionalnu uslugu</strong>. 
            </motion.p>
            <motion.ul variants={staggerContainer} className="space-y-4 pt-4">
              {['Stručnost na prvom mestu', 'Pristupačne cene', 'Odlična lokacija u Zemunu', 'Uvek prijatna atmosfera'].map((item, i) => (
                <motion.li key={i} variants={fadeInUp} className="flex items-center gap-3 text-slate-300">
                  <CheckCircle2 className="w-6 h-6 text-slate-500" />
                  {item}
                </motion.li>
              ))}
            </motion.ul>
          </motion.div>
        </div>
      </section>

      {/* CENOVNIK SEKCIJA */}
      <section id="usluge" className="py-24 px-4 md:px-8 bg-[#0d0e14] border-y border-white/5 relative">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-slate-800/10 blur-[120px] pointer-events-none" />

        <div className="max-w-4xl mx-auto relative z-10">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-4 flex items-center justify-center gap-4 uppercase tracking-tight">
              <Scissors className="w-8 h-8 text-slate-500" /> Cenovnik
            </h2>
            <p className="text-slate-400 text-lg">Povoljne cene. Odlična usluga za svačiji džep.</p>
          </motion.div>

          <motion.div 
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-4"
          >
            {services.map((service) => (
              <motion.div 
                key={service.id}
                variants={fadeInUp}
                className={`relative overflow-hidden group p-6 md:p-8 transition-all duration-300 border ${
                  service.popular 
                    ? 'bg-slate-800/40 border-slate-600' 
                    : 'bg-white/5 border-white/5 hover:bg-white/10'
                } backdrop-blur-md`}
              >
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 relative z-10">
                  <div className="space-y-1 md:max-w-[70%]">
                    <div className="flex items-center gap-3">
                      <h3 className="text-xl font-bold text-white tracking-wide">{service.name}</h3>
                      {service.popular && (
                        <span className="bg-slate-200 text-black text-[10px] font-bold px-2.5 py-1 uppercase tracking-widest">
                          Najtraženije
                        </span>
                      )}
                    </div>
                    <p className="text-sm text-slate-400">{service.desc}</p>
                  </div>
                  <div className="text-left md:text-right">
                    <span className="text-2xl font-bold text-white whitespace-nowrap">{service.price}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* PRE I POSLE SEKCIJA (TRANSFORMACIJE) */}
      <section className="py-24 px-4 md:px-8 max-w-5xl mx-auto">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 uppercase tracking-tight">Transformacije</h2>
          <p className="text-slate-400">Prevucite liniju levo-desno da vidite promenu pre i posle šišanja.</p>
        </motion.div>

        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={imageScale}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {/* Prvi Primer */}
          <BeforeAfterSlider 
            beforeImage="https://images.unsplash.com/photo-1595152772835-219674b2a8a6?auto=format&fit=crop&q=80&w=800&h=800" 
            afterImage="https://images.unsplash.com/photo-1622286342621-4bd786c2447c?auto=format&fit=crop&q=80&w=800&h=800"
          />
          {/* Drugi Primer */}
          <BeforeAfterSlider 
            beforeImage="https://images.unsplash.com/photo-1582230200305-6f387db287e0?auto=format&fit=crop&q=80&w=800&h=800" 
            afterImage="https://images.unsplash.com/photo-1503951914875-452162b09f6f?auto=format&fit=crop&q=80&w=800&h=800"
          />
        </motion.div>
      </section>

      {/* GALERIJA RADOVA */}
      <section className="py-12 px-4 md:px-8 max-w-5xl mx-auto">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 uppercase tracking-tight">Galerija</h2>
          <p className="text-slate-400">Kliknite na sliku za uvećanje.</p>
        </motion.div>

        <motion.div 
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-3 gap-4"
        >
          {galleryImages.map((img, i) => (
            <motion.div 
              key={i} 
              variants={imageScale}
              onClick={() => setSelectedImage(img)}
              className={`rounded-sm overflow-hidden border border-white/10 relative group cursor-pointer ${i === 1 || i === 2 ? 'md:col-span-2' : 'md:col-span-1'}`}
            >
              <img src={img} alt="Frizura" className="w-full h-64 md:h-80 object-cover grayscale-[20%] group-hover:grayscale-0 group-hover:scale-105 transition-all duration-500" />
              <div className="absolute inset-0 bg-black/30 group-hover:bg-transparent transition-all duration-500" />
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* LIGHTBOX MODAL */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-12 bg-black/95 backdrop-blur-md cursor-zoom-out"
          >
            <button 
              onClick={(e) => {
                e.stopPropagation();
                setSelectedImage(null);
              }}
              className="absolute top-8 right-8 text-white/70 hover:text-white transition-colors bg-white/5 hover:bg-white/10 p-2 border border-white/10 z-50 cursor-pointer"
            >
              <X className="w-6 h-6" />
            </button>
            <img 
              src={selectedImage} 
              alt="Uvećana slika" 
              onClick={(e) => e.stopPropagation()} 
              className="max-w-full max-h-[85vh] object-contain rounded-sm shadow-[0_0_40px_rgba(0,0,0,0.5)] border border-white/10 cursor-default" 
            />
          </motion.div>
        )}
      </AnimatePresence>

      {/* RECENZIJE */}
      <section className="py-24 px-4 md:px-8 bg-[#0a0b0e] border-t border-white/5 relative overflow-hidden">
        <div className="max-w-6xl mx-auto relative z-10">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 uppercase tracking-tight">Zašto nas biraju?</h2>
            <p className="text-slate-400">Preko 27 zadovoljnih klijenata na Google-u.</p>
          </motion.div>

          <motion.div 
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6"
          >
            {reviews.map((review) => (
              <motion.div 
                key={review.id}
                variants={fadeInUp}
                className="bg-white/5 p-8 border border-white/5 relative hover:border-white/20 transition-colors"
              >
                <Quote className="absolute top-6 right-6 w-10 h-10 text-slate-700/30" />
                <div className="flex gap-1 mb-6">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-yellow-500 fill-yellow-500" />
                  ))}
                </div>
                <p className="text-slate-300 mb-8 text-sm leading-relaxed font-light">
                  "{review.text}"
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-white/10 flex items-center justify-center border border-white/10">
                    <span className="text-slate-300 font-bold text-sm">{review.author.charAt(0)}</span>
                  </div>
                  <div>
                    <p className="text-sm font-bold text-slate-200 uppercase tracking-wider">{review.author}</p>
                    <p className="text-xs text-slate-500">Google Recenzija</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-[#040404] pt-20 pb-10 px-4 md:px-8 border-t border-white/10">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 mb-16">
          <div className="space-y-6">
            <div>
              <h3 className="text-2xl font-black text-white mb-2 tracking-widest uppercase">Alex <span className="text-slate-600">Barbershop</span></h3>
              <p className="text-slate-400 font-light">Najbolje šišanje u Zemunu.</p>
            </div>
            <div className="flex gap-4 pt-2">
              <a href="#" className="w-10 h-10 bg-white/5 flex items-center justify-center hover:bg-white/10 transition-colors border border-white/10">
                <svg className="w-5 h-5 text-slate-300" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                </svg>
              </a>
            </div>
          </div>
          <div className="space-y-6">
            <h4 className="text-lg font-bold text-white uppercase tracking-widest">Kontakt & Lokacija</h4>
            <div className="space-y-4 text-slate-400">
              <a href="#" className="flex items-start gap-3 hover:text-white transition-colors">
                <MapPin className="w-5 h-5 text-slate-500 shrink-0 mt-0.5" />
                <p className="font-light">Prvomajska 36d<br/>Beograd 11080, Zemun</p>
              </a>
              <a href="tel:0638345007" className="flex items-center gap-3 hover:text-white transition-colors font-bold text-lg text-slate-200">
                <Phone className="w-5 h-5 text-slate-500 shrink-0" />
                <p>063 834 5007</p>
              </a>
            </div>
          </div>
          <div className="bg-white/5 p-8 border border-white/5">
            <h4 className="text-lg font-bold text-white mb-6 flex items-center gap-2 uppercase tracking-widest">
              <Clock className="w-5 h-5 text-slate-500" /> Radno Vreme
            </h4>
            <ul className="space-y-4">
              <li className="flex justify-between items-center text-slate-300 border-b border-white/5 pb-3">
                <span className="font-light">Pon - Petak</span>
                <span className="font-bold text-white">09:00 - 20:00</span>
              </li>
              <li className="flex justify-between items-center text-slate-300 border-b border-white/5 pb-3">
                <span className="font-light">Subota</span>
                <span className="font-bold text-white">09:00 - 16:00</span>
              </li>
              <li className="flex justify-between items-center text-slate-500 pt-1">
                <span className="font-light">Nedelja</span>
                <span className="font-bold uppercase text-xs tracking-widest">Zatvoreno</span>
              </li>
            </ul>
          </div>
        </div>
        <div className="max-w-6xl mx-auto mt-12 pt-8 border-t border-white/5 text-center text-slate-600 text-sm font-light tracking-wide">
          &copy; {new Date().getFullYear()} Muški Frizer Alex. Izrada sajta: Vaša Agencija. Sva prava zadržana.
        </div>
      </footer>
    </div>
  );
}
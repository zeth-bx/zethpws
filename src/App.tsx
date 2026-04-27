import React from "react";
import { motion } from "motion/react";
import { 
  Zap, 
  ShieldCheck, 
  Target, 
  ArrowRight, 
  Dices, 
  Trophy, 
  ArrowUpRight,
  ChevronRight
} from "lucide-react";
import { Logo, LogoText } from "./components/Logo";
import { ProfitCalculator } from "./components/ProfitCalculator";

export default function App() {
  return (
    <div className="min-h-screen bg-[#050505] text-white font-sans selection:bg-yellow-400 selection:text-black">
      {/* Navigation */}
      <header>
        <nav className="fixed top-0 w-full z-50 bg-black/50 backdrop-blur-md border-b border-white/5">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <LogoText />
          <div className="hidden md:flex items-center gap-8">
            <a href="#strategies" className="text-xs uppercase tracking-widest text-white/60 hover:text-white transition-colors">Strategi</a>
            <a href="#calculator" className="text-xs uppercase tracking-widest text-white/60 hover:text-white transition-colors">Analisis</a>
            <a href="#premium" className="text-xs uppercase tracking-widest text-white/60 hover:text-white transition-colors">Premium</a>
          </div>
            <a 
              href="https://tinyurl.com/zethjaya" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-white text-black px-6 py-2.5 rounded-full text-xs font-bold uppercase tracking-widest hover:bg-yellow-400 transition-colors inline-block"
              aria-label="Login ke akun Zeth"
            >
              LOGIN
            </a>
        </div>
        </nav>
      </header>

      <main>
        {/* Hero Section */}
        <section className="relative pt-40 pb-20 px-6 overflow-hidden">
        {/* Ambient Background Elements */}
        <div className="absolute top-1/4 -left-20 w-96 h-96 bg-yellow-500/10 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-green-500/10 rounded-full blur-[120px] pointer-events-none" />

        <div className="max-w-7xl mx-auto grid lg:grid-template-columns-[1fr_400px] gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/5 border border-white/10 rounded-full mb-8">
              <Zap className="w-3 h-3 text-yellow-400 fill-yellow-400" />
              <span className="text-[10px] uppercase font-bold tracking-[0.2em] text-white/70">Zeth Algorithm v4.2 Ready</span>
            </div>
            
            <h1 className="text-6xl md:text-8xl font-black uppercase italic tracking-tighter leading-[0.85] mb-8">
              Prediksi. <br />
              <span className="text-transparent border-t-4 border-b-4 border-yellow-400/50 bg-clip-text bg-gradient-to-r from-yellow-400 to-yellow-600">Cuan.</span> <br />
              Ulangi.
            </h1>

            <p className="max-w-xl text-lg text-white/60 leading-relaxed mb-10">
              Strategi personal dan analisis probabilitas real-time untuk slot online dan lotere. Ubah keberuntungan menjadi disiplin yang terukur bersama Zeth.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <a 
                href="https://tinyurl.com/zethjaya"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-3 bg-yellow-400 text-black px-8 py-4 rounded-xl font-bold uppercase tracking-wider hover:scale-105 transition-transform group"
                aria-label="Login ke dashboard Zeth"
              >
                LOGIN
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" aria-hidden="true" />
              </a>
              <a 
                href="https://tinyurl.com/zethjaya"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-3 bg-white/5 border border-white/10 text-white px-8 py-4 rounded-xl font-bold uppercase tracking-wider hover:bg-white/10 transition-all"
                aria-label="Daftar akun baru Zeth"
              >
                Daftar
              </a>
            </div>

            <div className="mt-16 grid grid-cols-3 gap-8 border-t border-white/5 pt-12">
              <div>
                <div className="text-3xl font-mono font-bold mb-1">92.4%</div>
                <div className="text-[10px] uppercase tracking-widest text-white/40">Tingkat Akurasi</div>
              </div>
              <div>
                <div className="text-3xl font-mono font-bold mb-1">12K+</div>
                <div className="text-[10px] uppercase tracking-widest text-white/40">Pengguna Aktif</div>
              </div>
              <div>
                <div className="text-3xl font-mono font-bold mb-1">#1</div>
                <div className="text-[10px] uppercase tracking-widest text-white/40">Merek Strategi</div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            id="calculator"
          >
            <ProfitCalculator />
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section id="strategies" className="py-32 px-6 bg-[#0a0a0a]">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
            <div className="max-w-2xl">
              <h2 className="text-4xl md:text-5xl font-bold mb-6 uppercase italic">Kuasai Permainan</h2>
              <p className="text-white/50 leading-relaxed">
                Algoritma eksklusif kami menganalisis puluhan ribu titik data untuk mengidentifikasi pola yang terlewatkan oleh orang lain. Baik itu slot dengan volatilitas tinggi atau lotere yang kompleks, Zeth memberi Anda keunggulan.
              </p>
            </div>
            <a href="#" className="flex items-center gap-2 text-white/40 hover:text-white transition-colors uppercase tracking-widest text-xs font-bold border-b border-white/10 pb-2">
              Lihat Semua Metode <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <FeatureCard 
              icon={<Dices className="text-yellow-400" />}
              title="Pengenalan Pola Slot"
              description="Identifikasi siklus RTP saat ini dan pergeseran volatilitas secara real-time."
              tag="LIVE"
            />
            <FeatureCard 
              icon={<Target className="text-green-500" />}
              title="Probabilitas Lotere"
              description="Model matematika berdasarkan frekuensi undian historis dan pengelompokan angka."
              tag="TERUKUR"
            />
            <FeatureCard 
              icon={<ShieldCheck className="text-blue-400" />}
              title="Manajemen Risiko"
              description="Strategi bankroll tingkat lanjut untuk memastikan umur panjang dan pertumbuhan yang berkelanjutan."
              tag="AMAN"
            />
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-32 px-6">
        <div className="max-w-5xl mx-auto bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-[2.5rem] p-12 md:p-24 text-center relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full opacity-10 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] pointer-events-none" />
          
          <h2 className="text-4xl md:text-6xl text-black font-black uppercase italic leading-none mb-8 relative z-10">
            Berhenti Hanya <br /> Mengandalkan Keberuntungan.
          </h2>
          <p className="text-black/70 text-lg mb-12 max-w-xl mx-auto relative z-10">
            Bergabunglah dengan lingkaran elit pemenang. Komunitas strategi premium kami akan segera dibuka.
          </p>
          <div className="relative z-10 flex flex-wrap justify-center gap-4">
            <div className="flex items-center bg-black/10 border border-black/20 rounded-full pl-6 pr-2 py-2">
              <input 
                type="email" 
                placeholder="Masukkan email Anda" 
                className="bg-transparent border-none outline-none text-black placeholder:text-black/40 text-sm w-48"
              />
              <button className="bg-black text-white px-6 py-3 rounded-full text-xs font-bold uppercase tracking-widest hover:bg-neutral-800 transition-all">
                Beri Tahu Saya
              </button>
            </div>
          </div>
        </div>
      </section>
      </main>

      <footer className="py-20 border-t border-white/5 bg-black px-6">
        <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-12">
          <div className="col-span-2">
            <LogoText />
            <p className="mt-6 text-white/40 text-sm max-w-xs leading-relaxed">
              Zeth menyediakan alat analisis dan strategi untuk tujuan informasi. Bermainlah secara bertanggung jawab dan dengan risiko Anda sendiri.
            </p>
          </div>
          <div>
            <h4 className="text-xs uppercase font-bold tracking-[0.2em] mb-6">Produk</h4>
            <ul className="space-y-4 text-sm text-white/40 italic">
              <li><a href="#" className="hover:text-white transition-colors">Alat Analisis</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Aplikasi Prediktor</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Akses API</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-xs uppercase font-bold tracking-[0.2em] mb-6">Komunitas</h4>
            <ul className="space-y-4 text-sm text-white/40 italic">
              <li><a href="#" className="hover:text-white transition-colors">Telegram VIP</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Kisah Sukses</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Dukungan</a></li>
            </ul>
          </div>
        </div>
        <div className="max-w-7xl mx-auto mt-20 pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between gap-6">
          <div className="text-[10px] text-white/30 uppercase tracking-[0.3em]">
            &copy; 2026 Identitas Merek Zeth. Hak Cipta Dilindungi.
          </div>
          <div className="flex gap-8 text-[10px] text-white/30 uppercase tracking-[0.3em]">
            <a href="#" className="hover:text-white transition-colors">Ketentuan</a>
            <a href="#" className="hover:text-white transition-colors">Privasi</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

function FeatureCard({ icon, title, description, tag }: { icon: React.ReactNode, title: string, description: string, tag: string }) {
  return (
    <motion.div 
      whileHover={{ y: -5 }}
      className="group bg-[#151619] border border-white/10 p-8 rounded-3xl hover:border-white/20 transition-all cursor-pointer relative overflow-hidden"
    >
      <div className="absolute top-6 right-6 text-[8px] font-bold text-white/30 uppercase tracking-[0.2em] border border-white/10 px-2 py-0.5 rounded-full">
        {tag}
      </div>
      <div className="w-12 h-12 bg-white/5 rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform">
        {icon}
      </div>
      <h3 className="text-xl font-bold mb-4">{title}</h3>
      <p className="text-white/40 text-sm leading-relaxed mb-6 italic group-hover:text-white/60 transition-colors">
        {description}
      </p>
      <div className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-white/20 group-hover:text-yellow-400 transition-colors">
        Pelajari Strategi <ChevronRight className="w-3 h-3" />
      </div>
    </motion.div>
  );
}


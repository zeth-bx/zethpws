import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { TrendingUp, DollarSign, Calculator } from "lucide-react";

export function ProfitCalculator() {
  const [bet, setBet] = useState<number>(10000);
  const [winRate, setWinRate] = useState<number>(65);

  const estimatedProfit = Math.round(bet * (winRate / 100) * 1.8);

  return (
    <div className="bg-[#151619] border border-white/10 rounded-2xl p-6 shadow-2xl">
      <div className="flex items-center gap-2 mb-6">
        <Calculator className="text-yellow-400 w-5 h-5" />
        <h3 className="text-white font-medium uppercase tracking-wider text-sm">Estimator Keuntungan</h3>
      </div>

      <div className="space-y-6">
        <div>
          <label className="block text-white/50 text-xs uppercase tracking-widest mb-2">Taruhan Awal (IDR)</label>
          <input
            type="range"
            min="5000"
            max="1000000"
            step="5000"
            value={bet}
            onChange={(e) => setBet(Number(e.target.value))}
            className="w-full h-1 bg-white/10 rounded-lg appearance-none cursor-pointer accent-yellow-400"
          />
          <div className="mt-2 text-white font-mono text-xl">
            Rp {bet.toLocaleString()}
          </div>
        </div>

        <div>
          <label className="block text-white/50 text-xs uppercase tracking-widest mb-2">Strategi Win Rate Zeth</label>
          <div className="flex items-center gap-4">
            <span className="text-xs text-white/30">Rendah</span>
            <input
              type="range"
              min="40"
              max="98"
              value={winRate}
              onChange={(e) => setWinRate(Number(e.target.value))}
              className="flex-1 h-1 bg-white/10 rounded-lg appearance-none cursor-pointer accent-green-500"
            />
            <span className="text-xs text-white/30">Tinggi</span>
          </div>
          <div className="mt-2 text-green-400 font-mono text-xl">{winRate}%</div>
        </div>

        <div className="pt-6 border-t border-white/5">
          <label className="block text-white/50 text-xs uppercase tracking-widest mb-1">Potensi Keuntungan Bulanan</label>
          <AnimatePresence mode="wait">
            <motion.div
              key={estimatedProfit}
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              className="text-4xl font-bold text-yellow-400 font-mono"
            >
              Rp {estimatedProfit.toLocaleString()}
            </motion.div>
          </AnimatePresence>
          <div className="flex items-center gap-2 mt-4 text-white/40 text-[10px] uppercase tracking-widest">
            <TrendingUp className="w-3 h-3" />
            Berdasarkan algoritma Zeth saat ini
          </div>
        </div>
      </div>
    </div>
  );
}

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Users, Globe, Target, Quote, Sparkles } from 'lucide-react';
import { greatUnity, virtues, highlightQuote } from '../data/p6Data';

const corePointIcons = [Target, Users, Globe];

export default function ThoughtPage() {
  const [activeVirtue, setActiveVirtue] = useState(virtues[0].key);
  const current = virtues.find((v) => v.key === activeVirtue)!;

  return (
    <div className="min-h-screen bg-parchment">
      {/* Hero header */}
      <section className="relative overflow-hidden bg-gradient-to-br from-primary-red via-[#6f0008] to-[#3d0004] text-white">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_70%_20%,white,transparent_45%)]" />
        <div className="relative max-w-6xl mx-auto px-6 py-20 text-center">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-block px-4 py-1.5 rounded-full bg-white/15 backdrop-blur text-xs font-semibold tracking-widest uppercase mb-5"
          >
            Phần 6 · Giá trị tư tưởng
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="font-display text-4xl md:text-6xl font-bold mb-5 leading-tight"
          >
            Tư Tưởng Hồ Chí Minh
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.25 }}
            className="text-lg md:text-xl text-white/85 max-w-2xl mx-auto"
          >
            Đại đoàn kết dân tộc và tư tưởng về đạo đức, lối sống — những giá trị
            soi đường cho hôm nay và mai sau.
          </motion.p>
        </div>
      </section>

      <div className="max-w-6xl mx-auto px-6 py-16 space-y-20">
        {/* 1. Tư Tưởng Về Đại Đoàn Kết Dân Tộc */}
        <section>
          <div className="flex items-center gap-3 mb-6">
            <div className="w-11 h-11 rounded-xl bg-primary-red/10 flex items-center justify-center text-primary-red">
              <Users className="w-6 h-6" />
            </div>
            <h2 className="font-display text-2xl md:text-3xl font-bold text-ink-black">
              Tư Tưởng Về Đại Đoàn Kết Dân Tộc
            </h2>
          </div>

          {/* Khái niệm */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white rounded-2xl p-7 museum-shadow border border-stone-100 mb-8"
          >
            <span className="text-xs font-bold uppercase tracking-wider text-primary-red">
              Khái niệm
            </span>
            <p className="mt-3 text-gray-700 text-lg leading-relaxed">
              {greatUnity.concept}
            </p>
          </motion.div>

          {/* Nội dung cốt lõi */}
          <h3 className="font-display font-bold text-lg text-ink-black mb-4">
            Nội dung cốt lõi
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-8">
            {greatUnity.corePoints.map((point, i) => {
              const Icon = corePointIcons[i] ?? Target;
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="bg-white rounded-2xl p-6 border border-stone-100 museum-shadow hover:-translate-y-1 transition-all-custom"
                >
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary-red to-[#6f0008] flex items-center justify-center text-white mb-4">
                    <Icon className="w-6 h-6" />
                  </div>
                  <p className="text-gray-700 leading-relaxed">{point}</p>
                </motion.div>
              );
            })}
          </div>

          {/* Ý nghĩa hiện nay */}
          <div className="bg-gradient-to-r from-amber-50 to-rose-50 border-l-4 border-primary-red rounded-r-2xl p-6 flex gap-4">
            <Sparkles className="w-6 h-6 text-primary-red shrink-0 mt-1" />
            <div>
              <span className="font-display font-bold text-ink-black block mb-1">
                Ý nghĩa hiện nay
              </span>
              <p className="text-gray-700 leading-relaxed">{greatUnity.meaning}</p>
            </div>
          </div>
        </section>

        {/* 2. Tư Tưởng Về Đạo Đức Và Lối Sống */}
        <section>
          <div className="flex items-center gap-3 mb-6">
            <div className="w-11 h-11 rounded-xl bg-primary-red/10 flex items-center justify-center text-primary-red">
              <Sparkles className="w-6 h-6" />
            </div>
            <h2 className="font-display text-2xl md:text-3xl font-bold text-ink-black">
              Tư Tưởng Về Đạo Đức Và Lối Sống
            </h2>
          </div>
          <p className="text-gray-500 mb-6">
            Bốn đức tính cốt lõi của người cách mạng — chọn từng đức để xem chi
            tiết.
          </p>

          {/* Tabs CẦN - KIỆM - LIÊM - CHÍNH */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-6">
            {virtues.map((v) => (
              <button
                key={v.key}
                onClick={() => setActiveVirtue(v.key)}
                className={`rounded-2xl p-5 text-center transition-all duration-300 border ${
                  activeVirtue === v.key
                    ? 'bg-primary-red text-white border-primary-red shadow-lg scale-[1.03]'
                    : 'bg-white text-ink-black border-stone-200 hover:border-primary-red/40 hover:-translate-y-0.5'
                }`}
              >
                <div
                  className={`font-display text-2xl font-bold mb-1 ${
                    activeVirtue === v.key ? 'text-white' : 'text-primary-red'
                  }`}
                >
                  {v.letter}
                </div>
                <div
                  className={`text-xs font-medium ${
                    activeVirtue === v.key ? 'text-white/80' : 'text-gray-500'
                  }`}
                >
                  {v.subtitle}
                </div>
              </button>
            ))}
          </div>

          {/* Nội dung đức đang chọn */}
          <AnimatePresence mode="wait">
            <motion.div
              key={current.key}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.25 }}
              className="bg-white rounded-2xl p-8 museum-shadow border border-stone-100"
            >
              <div className="flex items-baseline gap-3 mb-3">
                <h3 className="font-display text-3xl font-bold text-primary-red">
                  {current.title}
                </h3>
                <span className="text-gray-400 font-medium">
                  ({current.subtitle})
                </span>
              </div>
              <p className="text-gray-700 text-lg leading-relaxed">
                {current.content}
              </p>
            </motion.div>
          </AnimatePresence>
        </section>

        {/* Trích dẫn nổi bật */}
        <section className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-primary-red via-[#6f0008] to-[#3d0004] text-white p-10 md:p-14 text-center">
          <Quote className="w-10 h-10 mx-auto mb-5 text-white/40" />
          <blockquote className="font-display text-2xl md:text-3xl font-bold leading-snug max-w-3xl mx-auto">
            “{highlightQuote}”
          </blockquote>
          <p className="mt-5 text-white/70 text-sm font-medium tracking-wide">
            — Chủ tịch Hồ Chí Minh
          </p>
        </section>
      </div>
    </div>
  );
}

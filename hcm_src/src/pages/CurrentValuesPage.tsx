import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Quote,
  BookOpen,
  Hammer,
  HeartHandshake,
  Cpu,
  Stethoscope,
  Leaf,
  Award,
  ChevronDown,
  NotebookPen,
  Trash2,
  CheckCircle2,
  HelpCircle,
} from 'lucide-react';
import {
  youthQuote,
  youthIntro,
  pillars,
  stories,
  roleModels,
  Pillar,
  RoleModel,
} from '../data/p7Data';

const pillarIcons: Record<Pillar['iconKey'], React.ReactNode> = {
  study: <BookOpen className="w-7 h-7" />,
  labor: <Hammer className="w-7 h-7" />,
  devote: <HeartHandshake className="w-7 h-7" />,
};

const modelIcons: Record<RoleModel['iconKey'], React.ReactNode> = {
  tech: <Cpu className="w-8 h-8" />,
  doctor: <Stethoscope className="w-8 h-8" />,
  green: <Leaf className="w-8 h-8" />,
};

interface DiaryEntry {
  id: number;
  text: string;
  date: string;
}

const STORAGE_KEY = 'hcm_diary_entries';

export default function CurrentValuesPage() {
  const [openStory, setOpenStory] = useState<string | null>(null);
  const [entries, setEntries] = useState<DiaryEntry[]>([]);
  const [draft, setDraft] = useState('');

  // Tải nhật ký từ LocalStorage
  useEffect(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (raw) setEntries(JSON.parse(raw));
    } catch {
      /* bỏ qua dữ liệu hỏng */
    }
  }, []);

  const persist = (next: DiaryEntry[]) => {
    setEntries(next);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(next));
  };

  const addEntry = () => {
    const text = draft.trim();
    if (!text) return;
    const now = new Date();
    const entry: DiaryEntry = {
      id: now.getTime(),
      text,
      date: now.toLocaleDateString('vi-VN', {
        day: '2-digit',
        month: '2-digit',
        year: 'numeric',
      }),
    };
    persist([entry, ...entries]);
    setDraft('');
  };

  const removeEntry = (id: number) =>
    persist(entries.filter((e) => e.id !== id));

  return (
    <div className="min-h-screen bg-parchment">
      {/* Hero + quote */}
      <section className="relative overflow-hidden bg-gradient-to-br from-primary-red via-[#6f0008] to-[#3d0004] text-white">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_75%_15%,white,transparent_45%)]" />
        <div className="relative max-w-5xl mx-auto px-6 py-20 text-center">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-block px-4 py-1.5 rounded-full bg-white/15 backdrop-blur text-xs font-semibold tracking-widest uppercase mb-5"
          >
            Phần 7 · Giá trị hiện nay
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="font-display text-4xl md:text-6xl font-bold mb-8 leading-tight"
          >
            Tư Tưởng Hồ Chí Minh Với Thanh Niên
          </motion.h1>
          <motion.blockquote
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.25 }}
            className="relative max-w-3xl mx-auto"
          >
            <Quote className="w-8 h-8 mx-auto mb-3 text-white/40" />
            <p className="font-display text-xl md:text-2xl font-semibold leading-snug">
              “{youthQuote.text}”
            </p>
            <footer className="mt-3 text-white/70 text-sm font-medium">
              — {youthQuote.author} —
            </footer>
          </motion.blockquote>
        </div>
      </section>

      <div className="max-w-6xl mx-auto px-6 py-16 space-y-20">
        {/* 1. Ba trụ cột */}
        <section>
          <p className="text-gray-700 text-lg leading-relaxed max-w-3xl mb-10">
            {youthIntro}
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {pillars.map((p, i) => (
              <motion.div
                key={p.key}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white rounded-2xl p-7 museum-shadow border border-stone-100 flex flex-col"
              >
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary-red to-[#6f0008] flex items-center justify-center text-white mb-5">
                  {pillarIcons[p.iconKey]}
                </div>
                <h3 className="font-display text-xl font-bold text-ink-black">
                  {p.title}
                </h3>
                <p className="text-primary-red font-medium text-sm mb-4">
                  {p.slogan}
                </p>
                <p className="text-sm text-gray-600 leading-relaxed mb-5">
                  <span className="font-semibold text-ink-black">
                    Giá trị hiện nay:{' '}
                  </span>
                  {p.value}
                </p>
                <div className="mt-auto pt-4 border-t border-stone-100">
                  <p className="text-xs font-bold uppercase tracking-wider text-gray-400 mb-3">
                    Hành động của thanh niên
                  </p>
                  <ul className="space-y-2.5">
                    {p.actions.map((a, j) => (
                      <li key={j} className="flex gap-2 text-sm text-gray-700">
                        <CheckCircle2 className="w-4 h-4 text-primary-red shrink-0 mt-0.5" />
                        <span>{a}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* 2.1 Câu chuyện về Bác Hồ với thanh niên */}
        <section>
          <SectionHeading
            icon={<BookOpen className="w-6 h-6" />}
            title="Học tập và làm theo lời Bác"
            subtitle="Những câu chuyện và tấm gương để thấm nhuần lời dạy của Người."
          />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
            {stories.map((s, i) => {
              const isOpen = openStory === s.id;
              return (
                <motion.article
                  key={s.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="bg-white rounded-2xl p-7 museum-shadow border border-stone-100"
                >
                  <h3 className="font-display text-lg font-bold text-ink-black mb-3">
                    {s.title}
                  </h3>
                  <p className="text-sm text-gray-600 leading-relaxed mb-4">
                    {s.summary}
                  </p>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        className="overflow-hidden"
                      >
                        <p className="text-sm text-gray-700 leading-relaxed mb-4 pt-1">
                          {s.full}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>

                  <div className="bg-amber-50/70 border-l-4 border-primary-red rounded-r-lg px-4 py-3 mb-4">
                    <span className="text-xs font-bold text-primary-red">
                      Thông điệp:{' '}
                    </span>
                    <span className="text-sm text-gray-700">{s.message}</span>
                  </div>

                  <button
                    onClick={() => setOpenStory(isOpen ? null : s.id)}
                    className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary-red hover:gap-2.5 transition-all"
                  >
                    {isOpen ? 'Thu gọn' : 'Đọc thêm'}
                    <ChevronDown
                      className={`w-4 h-4 transition-transform ${
                        isOpen ? 'rotate-180' : ''
                      }`}
                    />
                  </button>
                </motion.article>
              );
            })}
          </div>
        </section>

        {/* 2.2 Wall of Fame */}
        <section>
          <SectionHeading
            icon={<Award className="w-6 h-6" />}
            title="Gương “Người tốt – Việc tốt” thời đại mới"
            subtitle="Những tấm gương thanh niên tiêu biểu sống và cống hiến theo lời Bác."
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
            {roleModels.map((m, i) => (
              <motion.div
                key={m.name}
                initial={{ opacity: 0, scale: 0.96 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="relative bg-white rounded-2xl p-7 museum-shadow border border-stone-100 text-center hover:-translate-y-1 transition-all-custom"
              >
                <div className="w-20 h-20 mx-auto rounded-full bg-gradient-to-br from-primary-red to-[#6f0008] flex items-center justify-center text-white mb-4 ring-4 ring-rose-50">
                  {modelIcons[m.iconKey]}
                </div>
                <h3 className="font-display font-bold text-ink-black mb-2">
                  {m.name}
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed mb-4">
                  {m.action}
                </p>
                <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-red-50 text-primary-red text-xs font-semibold">
                  <Award className="w-3.5 h-3.5" />
                  {m.award}
                </span>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Tính năng tương tác: Nhật ký làm theo lời Bác */}
        <section>
          <SectionHeading
            icon={<NotebookPen className="w-6 h-6" />}
            title="Nhật ký làm theo lời Bác"
            subtitle="Ghi lại một việc tốt bạn đã làm hôm nay. Nhật ký được lưu ngay trên trình duyệt của bạn."
          />
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-8">
            {/* Form */}
            <div className="bg-white rounded-2xl p-7 museum-shadow border border-stone-100">
              <label className="block text-sm font-semibold text-ink-black mb-3">
                Hôm nay bạn đã làm được việc tốt gì?
              </label>
              <textarea
                value={draft}
                onChange={(e) => setDraft(e.target.value)}
                rows={4}
                placeholder="Ví dụ: Hôm nay mình đã giúp một bạn cùng lớp ôn bài, tham gia dọn vệ sinh khu phố…"
                className="w-full rounded-xl border border-stone-200 p-4 text-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-primary-red/30 focus:border-primary-red resize-none"
              />
              <button
                onClick={addEntry}
                disabled={!draft.trim()}
                className="mt-4 w-full inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-primary-red text-white text-sm font-semibold hover:bg-[#6f0008] transition-colors disabled:opacity-40 disabled:cursor-not-allowed"
              >
                <CheckCircle2 className="w-4 h-4" />
                Check-in việc tốt
              </button>
            </div>

            {/* Danh sách */}
            <div className="bg-white rounded-2xl p-7 museum-shadow border border-stone-100">
              <div className="flex items-center justify-between mb-4">
                <h4 className="font-display font-bold text-ink-black">
                  Nhật ký của bạn
                </h4>
                <span className="text-xs font-semibold text-gray-400">
                  {entries.length} mục
                </span>
              </div>
              {entries.length === 0 ? (
                <p className="text-sm text-gray-400 py-8 text-center">
                  Chưa có mục nào. Hãy ghi lại việc tốt đầu tiên của bạn!
                </p>
              ) : (
                <ul className="space-y-3 max-h-72 overflow-y-auto pr-1">
                  <AnimatePresence initial={false}>
                    {entries.map((e) => (
                      <motion.li
                        key={e.id}
                        layout
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: 10 }}
                        className="flex items-start gap-3 bg-stone-50 rounded-xl p-3.5 border border-stone-100"
                      >
                        <CheckCircle2 className="w-4 h-4 text-primary-red shrink-0 mt-0.5" />
                        <div className="flex-1 min-w-0">
                          <p className="text-sm text-gray-700 break-words">
                            {e.text}
                          </p>
                          <span className="text-xs text-gray-400">{e.date}</span>
                        </div>
                        <button
                          onClick={() => removeEntry(e.id)}
                          className="text-gray-300 hover:text-primary-red transition-colors shrink-0"
                          aria-label="Xóa"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </motion.li>
                    ))}
                  </AnimatePresence>
                </ul>
              )}
            </div>
          </div>
        </section>

        {/* CTA Quiz */}
        <section className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-primary-red via-[#6f0008] to-[#3d0004] text-white p-10 md:p-12 text-center">
          <HelpCircle className="w-10 h-10 mx-auto mb-4 text-white/40" />
          <h3 className="font-display text-2xl md:text-3xl font-bold mb-3">
            Kiểm tra hiểu biết của bạn
          </h3>
          <p className="text-white/80 max-w-xl mx-auto mb-6">
            Tham gia bộ câu hỏi trắc nghiệm tìm hiểu về cuộc đời, sự nghiệp của Bác
            và tư tưởng thanh niên.
          </p>
          <Link
            to="/quiz"
            className="inline-flex items-center gap-2 px-7 py-3 rounded-full bg-white text-primary-red text-sm font-bold hover:bg-rose-50 transition-colors"
          >
            <HelpCircle className="w-4 h-4" />
            Bắt đầu làm Quiz
          </Link>
        </section>
      </div>
    </div>
  );
}

const SectionHeading: React.FC<{
  icon: React.ReactNode;
  title: string;
  subtitle?: string;
}> = ({ icon, title, subtitle }) => (
  <div className="flex items-start gap-3">
    <div className="w-11 h-11 rounded-xl bg-primary-red/10 flex items-center justify-center text-primary-red shrink-0">
      {icon}
    </div>
    <div>
      <h2 className="font-display text-2xl md:text-3xl font-bold text-ink-black">
        {title}
      </h2>
      {subtitle && <p className="text-sm text-gray-500 mt-1">{subtitle}</p>}
    </div>
  </div>
);

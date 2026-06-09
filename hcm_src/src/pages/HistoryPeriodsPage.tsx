import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  X,
  Play,
  Flag,
  Swords,
  Factory,
  Trophy,
  ScrollText,
  Landmark,
  TrendingUp,
  Globe2,
  ExternalLink,
} from 'lucide-react';
import {
  introLead,
  timelinePeriods,
  event1945,
  resistanceFrance,
  buildNorth,
  achievements,
  achievementsLead,
  MediaVideo,
} from '../data/p4Data';

function getYouTubeId(input?: string): string {
  if (!input) return '';
  const m = input.match(
    /(?:youtu\.be\/|[?&]v=|\/embed\/|\/shorts\/)([A-Za-z0-9_-]{11})/
  );
  if (m) return m[1];
  return /^[A-Za-z0-9_-]{11}$/.test(input.trim()) ? input.trim() : '';
}

const achievementIcons: Record<string, React.ReactNode> = {
  political: <Landmark className="w-6 h-6" />,
  economy: <TrendingUp className="w-6 h-6" />,
  diplomacy: <Globe2 className="w-6 h-6" />,
};

export default function HistoryPeriodsPage() {
  const [playing, setPlaying] = useState<MediaVideo | null>(null);

  return (
    <div className="min-h-screen bg-parchment">
      {/* Hero / Lời tựa */}
      <section className="relative overflow-hidden bg-gradient-to-br from-primary-red via-[#6f0008] to-[#3d0004] text-white">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_25%_15%,white,transparent_42%)]" />
        <div className="relative max-w-5xl mx-auto px-6 py-20 text-center">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-block px-4 py-1.5 rounded-full bg-white/15 backdrop-blur text-xs font-semibold tracking-widest uppercase mb-5"
          >
            Phần 4 · Dòng chảy lịch sử
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="font-display text-4xl md:text-6xl font-bold mb-6 leading-tight"
          >
            Các Giai Đoạn Lịch Sử
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.25 }}
            className="text-lg md:text-xl text-white/85 max-w-3xl mx-auto leading-relaxed"
          >
            {introLead}
          </motion.p>
        </div>
      </section>

      {/* 1. Lộ trình lịch sử (Timeline) */}
      <section className="max-w-6xl mx-auto px-6 py-16">
        <SectionTitle icon={<ScrollText className="w-6 h-6" />} title="Lộ trình lịch sử" />
        <div className="relative grid grid-cols-1 md:grid-cols-4 gap-6 mt-10">
          {timelinePeriods.map((p, i) => (
            <motion.div
              key={p.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="relative bg-white rounded-2xl p-6 museum-shadow border border-stone-100"
            >
              <div className="w-10 h-10 rounded-full bg-primary-red text-white flex items-center justify-center font-display font-bold mb-4">
                {i + 1}
              </div>
              <div className="text-primary-red font-display font-bold text-lg mb-1">
                {p.range}
              </div>
              <h3 className="font-semibold text-ink-black mb-2">{p.title}</h3>
              <p className="text-sm text-gray-600 leading-relaxed">{p.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* 2. Sự kiện 1945 */}
      <ThemeSection
        index="01"
        icon={<Flag className="w-6 h-6" />}
        title="Sự kiện năm 1945 – Bước ngoặt vĩ đại"
      >
        <p className="text-gray-700 leading-relaxed text-lg mb-8">
          {event1945.context}
        </p>

        {/* Diễn biến */}
        <div className="relative border-l-2 border-primary-red/30 pl-6 space-y-5 mb-10">
          {event1945.events.map((e, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -16 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="relative"
            >
              <span className="absolute -left-[31px] top-1.5 w-3.5 h-3.5 rounded-full bg-primary-red ring-4 ring-rose-100" />
              <span className="inline-block font-display font-bold text-primary-red mr-2">
                {e.date}
              </span>
              <span className="text-gray-700">{e.text}</span>
            </motion.div>
          ))}
        </div>

        <MediaBlock
          video={event1945.video}
          images={event1945.images}
          onPlay={setPlaying}
        />
      </ThemeSection>

      {/* 3. Kháng chiến chống Pháp */}
      <ThemeSection
        index="02"
        icon={<Swords className="w-6 h-6" />}
        title="Kháng chiến chống Pháp (1946 – 1954)"
        alt
      >
        <p className="text-gray-700 leading-relaxed text-lg mb-8">
          {resistanceFrance.intro}
        </p>

        {/* Bảng các chiến dịch */}
        <h3 className="font-display font-bold text-lg text-ink-black mb-4">
          Các chiến dịch quyết định
        </h3>
        <div className="overflow-x-auto rounded-2xl border border-stone-200 museum-shadow mb-10">
          <table className="w-full text-left bg-white">
            <thead>
              <tr className="bg-primary-red text-white text-sm">
                <th className="px-5 py-3 font-semibold">Chiến dịch</th>
                <th className="px-5 py-3 font-semibold whitespace-nowrap">Thời gian</th>
                <th className="px-5 py-3 font-semibold">Ý nghĩa lịch sử</th>
              </tr>
            </thead>
            <tbody>
              {resistanceFrance.campaigns.map((c, i) => (
                <tr
                  key={c.name}
                  className={i % 2 ? 'bg-stone-50' : 'bg-white'}
                >
                  <td className="px-5 py-4 font-semibold text-ink-black align-top">
                    {c.name}
                  </td>
                  <td className="px-5 py-4 text-primary-red font-display font-bold align-top">
                    {c.time}
                  </td>
                  <td className="px-5 py-4 text-gray-700 align-top">{c.meaning}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <MediaBlock
          video={resistanceFrance.video}
          images={resistanceFrance.images}
          onPlay={setPlaying}
        />
      </ThemeSection>

      {/* 4. Xây dựng miền Bắc */}
      <ThemeSection
        index="03"
        icon={<Factory className="w-6 h-6" />}
        title="Xây dựng miền Bắc (1954 – 1975)"
      >
        <p className="text-gray-700 leading-relaxed text-lg mb-8">
          {buildNorth.role}
        </p>

        <h3 className="font-display font-bold text-lg text-ink-black mb-4">
          Các phong trào thi đua yêu nước nổi bật
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-10">
          {buildNorth.movements.map((m, i) => (
            <motion.div
              key={m.group}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-white rounded-2xl p-6 border border-stone-100 museum-shadow"
            >
              <h4 className="font-semibold text-primary-red mb-3">{m.group}</h4>
              <ul className="space-y-2">
                {m.items.map((it, j) => (
                  <li key={j} className="flex gap-2 text-sm text-gray-700">
                    <span className="text-primary-red mt-1">•</span>
                    <span>{it}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        <MediaBlock
          video={buildNorth.video}
          images={buildNorth.images}
          onPlay={setPlaying}
        />
      </ThemeSection>

      {/* 5. Thành tựu vẻ vang */}
      <section className="max-w-6xl mx-auto px-6 py-16">
        <SectionTitle icon={<Trophy className="w-6 h-6" />} title="Các thành tựu vẻ vang" />
        <p className="text-gray-600 mt-4 mb-8 max-w-3xl">{achievementsLead}</p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {achievements.map((a, i) => (
            <motion.div
              key={a.key}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-white rounded-2xl p-7 border border-stone-100 museum-shadow hover:-translate-y-1 transition-all-custom"
            >
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary-red to-[#6f0008] flex items-center justify-center text-white mb-4">
                {achievementIcons[a.key]}
              </div>
              <h3 className="font-display font-bold text-lg text-ink-black mb-2">
                {a.title}
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed">{a.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Trình phát video */}
      <AnimatePresence>
        {playing && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setPlaying(null)}
            className="fixed inset-0 z-[80] flex items-center justify-center bg-black/75 backdrop-blur-md p-4"
          >
            <motion.div
              initial={{ scale: 0.94, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.94, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="relative bg-white rounded-3xl overflow-hidden shadow-2xl max-w-3xl w-full"
            >
              <button
                onClick={() => setPlaying(null)}
                className="absolute top-4 right-4 z-10 p-2 rounded-full bg-white/90 text-gray-700 hover:text-primary-red shadow-md border border-stone-200"
                aria-label="Đóng"
              >
                <X className="w-5 h-5" />
              </button>
              <VideoPlayer video={playing} />
              <div className="p-6">
                <h3 className="font-display text-xl font-bold text-ink-black mb-1.5">
                  {playing.title}
                </h3>
                <p className="text-sm text-gray-600">{playing.desc}</p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

// ---- Helpers / sub-components ----

const SectionTitle: React.FC<{ icon: React.ReactNode; title: string }> = ({
  icon,
  title,
}) => (
  <div className="flex items-center gap-3">
    <div className="w-11 h-11 rounded-xl bg-primary-red/10 flex items-center justify-center text-primary-red">
      {icon}
    </div>
    <h2 className="font-display text-2xl md:text-3xl font-bold text-ink-black">
      {title}
    </h2>
  </div>
);

const ThemeSection: React.FC<{
  index: string;
  icon: React.ReactNode;
  title: string;
  alt?: boolean;
  children: React.ReactNode;
}> = ({ index, icon, title, alt, children }) => (
  <section className={alt ? 'bg-surface-taupe/40' : ''}>
    <div className="max-w-6xl mx-auto px-6 py-16">
      <div className="flex items-center gap-4 mb-8">
        <span className="font-display text-5xl font-bold text-primary-red/15 leading-none">
          {index}
        </span>
        <div className="flex items-center gap-3">
          <div className="w-11 h-11 rounded-xl bg-primary-red/10 flex items-center justify-center text-primary-red">
            {icon}
          </div>
          <h2 className="font-display text-2xl md:text-3xl font-bold text-ink-black">
            {title}
          </h2>
        </div>
      </div>
      {children}
    </div>
  </section>
);

const MediaBlock: React.FC<{
  video: MediaVideo;
  images: { caption: string; url: string }[];
  onPlay: (v: MediaVideo) => void;
}> = ({ video, images, onPlay }) => (
  <div>
    <div className="flex items-center gap-2 text-sm font-semibold text-gray-500 uppercase tracking-wider mb-4">
      <Play className="w-4 h-4 text-primary-red" />
      Thư viện đa phương tiện
    </div>
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
      {/* Video */}
      <button
        onClick={() => onPlay(video)}
        className="group text-left bg-white rounded-2xl overflow-hidden museum-shadow border border-stone-100 hover:-translate-y-1 transition-all-custom"
      >
        <div className="relative h-56 overflow-hidden">
          <img
            src={video.thumbnail}
            alt={video.title}
            loading="lazy"
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-black/30 group-hover:bg-black/40 transition-colors flex items-center justify-center">
            <span className="w-16 h-16 rounded-full bg-white/90 flex items-center justify-center text-primary-red shadow-lg group-hover:scale-110 transition-transform">
              <Play className="w-7 h-7 ml-0.5 fill-current" />
            </span>
          </div>
          {video.duration && (
            <span className="absolute bottom-3 right-3 px-2 py-0.5 rounded bg-black/70 text-white text-xs font-medium">
              {video.duration}
            </span>
          )}
          <span className="absolute top-3 left-3 px-3 py-1 rounded-full bg-primary-red text-white text-xs font-bold">
            Video tư liệu
          </span>
        </div>
        <div className="p-5">
          <h4 className="font-display font-bold text-base text-ink-black mb-1 group-hover:text-primary-red transition-colors">
            {video.title}
          </h4>
          <p className="text-sm text-gray-600">{video.desc}</p>
        </div>
      </button>

      {/* Hình ảnh */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {images.map((img, i) => (
          <figure
            key={i}
            className="bg-white rounded-2xl overflow-hidden museum-shadow border border-stone-100 flex flex-col"
          >
            <div className="h-32 overflow-hidden">
              <img
                src={img.url}
                alt={img.caption}
                loading="lazy"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
            <figcaption className="p-3 text-xs text-gray-600 leading-relaxed flex-1">
              {img.caption}
            </figcaption>
          </figure>
        ))}
      </div>
    </div>
  </div>
);

const VideoPlayer: React.FC<{ video: MediaVideo }> = ({ video }) => {
  const id = getYouTubeId(video.youtubeId);

  if (id) {
    return (
      <div className="relative w-full aspect-video bg-black">
        <iframe
          className="absolute inset-0 w-full h-full"
          src={`https://www.youtube.com/embed/${id}?autoplay=1&rel=0`}
          title={video.title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </div>
    );
  }

  return (
    <div className="w-full aspect-video bg-stone-900 flex flex-col items-center justify-center text-white gap-4 p-6 text-center">
      <Play className="w-10 h-10 text-white/50" />
      <p className="text-white/80 text-sm max-w-sm">
        Chưa gắn link video cho mục này. Bạn có thể thêm <code>youtubeId</code>{' '}
        trong file <code>p4Data.ts</code>.
      </p>
      <a
        href={`https://www.youtube.com/results?search_query=${encodeURIComponent(
          video.searchQuery
        )}`}
        target="_blank"
        rel="noreferrer"
        className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-primary-red text-white text-sm font-semibold hover:bg-[#6f0008] transition-colors"
      >
        <ExternalLink className="w-4 h-4" />
        Tìm trên YouTube
      </a>
    </div>
  );
};

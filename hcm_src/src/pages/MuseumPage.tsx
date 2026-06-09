import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  X,
  MapPin,
  Calendar,
  Volume2,
  Download,
  Share2,
  Languages,
  Play,
  Image as ImageIcon,
  Film,
  ExternalLink,
} from 'lucide-react';
import { museumPhotos, MuseumPhoto } from '../data/p5Data';
import { videoData, videoTabs, VideoItem, VideoTabKey } from '../data/videoData';

// Tách YouTube video ID từ bất kỳ định dạng link nào (youtu.be, watch?v=, embed/, shorts/)
// hoặc nhận trực tiếp ID 11 ký tự. Trả về '' nếu không tìm thấy.
function getYouTubeId(input: string): string {
  if (!input) return '';
  const m = input.match(
    /(?:youtu\.be\/|[?&]v=|\/embed\/|\/shorts\/)([A-Za-z0-9_-]{11})/
  );
  if (m) return m[1];
  return /^[A-Za-z0-9_-]{11}$/.test(input.trim()) ? input.trim() : '';
}

export default function MuseumPage() {
  const [selected, setSelected] = useState<MuseumPhoto | null>(null);
  const [activeTab, setActiveTab] = useState<VideoTabKey>('lichsu');
  const [playing, setPlaying] = useState<VideoItem | null>(null);

  const videos = useMemo(
    () => videoData.filter((v) => v.tab === activeTab),
    [activeTab]
  );

  return (
    <div className="min-h-screen bg-parchment">
      {/* Hero header */}
      <section className="relative overflow-hidden bg-gradient-to-br from-primary-red via-[#6f0008] to-[#3d0004] text-white">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_30%_20%,white,transparent_40%)]" />
        <div className="relative max-w-6xl mx-auto px-6 py-20 text-center">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-block px-4 py-1.5 rounded-full bg-white/15 backdrop-blur text-xs font-semibold tracking-widest uppercase mb-5"
          >
            Phần 5 · Trải nghiệm số
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="font-display text-4xl md:text-6xl font-bold mb-5 leading-tight"
          >
            Bảo Tàng Trực Tuyến
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.25 }}
            className="text-lg md:text-xl text-white/85 max-w-2xl mx-auto"
          >
            Thư viện ảnh & video tư liệu về cuộc đời và sự nghiệp của Chủ tịch Hồ
            Chí Minh qua từng chặng đường lịch sử.
          </motion.p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-6 py-16">
        {/* 1. Album Ảnh */}
        <div className="flex items-center gap-3 mb-8">
          <div className="w-11 h-11 rounded-xl bg-primary-red/10 flex items-center justify-center text-primary-red">
            <ImageIcon className="w-6 h-6" />
          </div>
          <div>
            <h2 className="font-display text-2xl md:text-3xl font-bold text-ink-black">
              Album Ảnh
            </h2>
            <p className="text-sm text-gray-500">
              Nhấn vào mỗi tấm ảnh để xem chi tiết tư liệu
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
          {museumPhotos.map((photo, i) => (
            <motion.button
              key={photo.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.06 }}
              onClick={() => setSelected(photo)}
              className="group text-left bg-white rounded-2xl overflow-hidden museum-shadow border border-stone-100 hover:-translate-y-1 transition-all-custom"
            >
              <div className="relative h-52 overflow-hidden">
                <img
                  src={photo.image}
                  alt={photo.title}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
                <span className="absolute top-3 left-3 px-3 py-1 rounded-full bg-white/90 text-primary-red text-xs font-bold">
                  {photo.period}
                </span>
              </div>
              <div className="p-5">
                <h3 className="font-display font-bold text-lg text-ink-black mb-2 group-hover:text-primary-red transition-colors">
                  {photo.title}
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  {photo.shortDesc}
                </p>
              </div>
            </motion.button>
          ))}
        </div>

        {/* 2. Video Tư Liệu */}
        <div className="flex items-center gap-3 mb-6">
          <div className="w-11 h-11 rounded-xl bg-primary-red/10 flex items-center justify-center text-primary-red">
            <Film className="w-6 h-6" />
          </div>
          <div>
            <h2 className="font-display text-2xl md:text-3xl font-bold text-ink-black">
              Video Tư Liệu
            </h2>
            <p className="text-sm text-gray-500">
              Nhấn vào video để phát trực tiếp
            </p>
          </div>
        </div>

        {/* Tabs */}
        <div className="flex flex-wrap gap-2 mb-8">
          {videoTabs.map((tab) => (
            <button
              key={tab.key}
              onClick={() => setActiveTab(tab.key)}
              className={`px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 ${
                activeTab === tab.key
                  ? 'bg-primary-red text-white shadow-md'
                  : 'bg-white text-gray-600 hover:text-primary-red border border-stone-200'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {videos.map((video, i) => (
            <motion.button
              key={video.id}
              layout
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: i * 0.05 }}
              onClick={() => setPlaying(video)}
              className="group text-left bg-white rounded-2xl overflow-hidden museum-shadow border border-stone-100 hover:-translate-y-1 transition-all-custom"
            >
              <div className="relative h-44 overflow-hidden">
                <img
                  src={video.thumbnail}
                  alt={video.title}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/30 group-hover:bg-black/40 transition-colors flex items-center justify-center">
                  <span className="w-14 h-14 rounded-full bg-white/90 flex items-center justify-center text-primary-red shadow-lg group-hover:scale-110 transition-transform">
                    <Play className="w-6 h-6 ml-0.5 fill-current" />
                  </span>
                </div>
                {video.duration && (
                  <span className="absolute bottom-3 right-3 px-2 py-0.5 rounded bg-black/70 text-white text-xs font-medium">
                    {video.duration}
                  </span>
                )}
              </div>
              <div className="p-5">
                <h3 className="font-display font-bold text-base text-ink-black mb-1.5 group-hover:text-primary-red transition-colors">
                  {video.title}
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed line-clamp-3">
                  {video.context}
                </p>
              </div>
            </motion.button>
          ))}
        </div>
      </div>

      {/* 3a. Pop-up xem chi tiết ẢNH */}
      <AnimatePresence>
        {selected && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelected(null)}
            className="fixed inset-0 z-[80] flex items-center justify-center bg-black/60 backdrop-blur-md p-4"
          >
            <motion.div
              initial={{ scale: 0.94, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.94, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="relative bg-white rounded-3xl overflow-hidden shadow-2xl max-w-4xl w-full max-h-[90vh] flex flex-col md:flex-row"
            >
              <button
                onClick={() => setSelected(null)}
                className="absolute top-4 right-4 z-10 p-2 rounded-full bg-white/90 text-gray-700 hover:text-primary-red shadow-md border border-stone-200"
                aria-label="Đóng"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="md:w-3/5 bg-stone-900 flex items-center justify-center">
                <img
                  src={selected.image}
                  alt={selected.title}
                  className="w-full h-64 md:h-full object-cover"
                />
              </div>

              <div className="md:w-2/5 p-7 flex flex-col overflow-y-auto">
                <span className="inline-block self-start px-3 py-1 rounded-full bg-red-50 text-primary-red text-xs font-bold mb-4">
                  {selected.period}
                </span>
                <h3 className="font-display text-2xl font-bold text-ink-black mb-4 leading-snug">
                  {selected.title}
                </h3>

                <div className="space-y-3 mb-5 text-sm">
                  <div className="flex items-start gap-2.5 text-gray-700">
                    <Calendar className="w-4 h-4 mt-0.5 text-primary-red shrink-0" />
                    <span>
                      <span className="font-semibold">Thời gian:</span>{' '}
                      {selected.time}
                    </span>
                  </div>
                  <div className="flex items-start gap-2.5 text-gray-700">
                    <MapPin className="w-4 h-4 mt-0.5 text-primary-red shrink-0" />
                    <span>
                      <span className="font-semibold">Địa điểm:</span>{' '}
                      {selected.location}
                    </span>
                  </div>
                </div>

                <p className="text-gray-600 text-sm leading-relaxed mb-6 flex-1">
                  <span className="font-semibold text-ink-black">Bối cảnh: </span>
                  {selected.context}
                </p>

                <div className="grid grid-cols-2 gap-2 pt-4 border-t border-stone-100">
                  <ActionButton icon={<Volume2 className="w-4 h-4" />} label="Nghe thuyết minh" />
                  <ActionButton icon={<Download className="w-4 h-4" />} label="Tải về" />
                  <ActionButton icon={<Share2 className="w-4 h-4" />} label="Chia sẻ" />
                  <ActionButton icon={<Languages className="w-4 h-4" />} label="VI / EN" />
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* 3b. Pop-up TRÌNH PHÁT VIDEO */}
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
              className="relative bg-white rounded-3xl overflow-hidden shadow-2xl max-w-3xl w-full max-h-[90vh] overflow-y-auto"
            >
              <button
                onClick={() => setPlaying(null)}
                className="absolute top-4 right-4 z-10 p-2 rounded-full bg-white/90 text-gray-700 hover:text-primary-red shadow-md border border-stone-200"
                aria-label="Đóng"
              >
                <X className="w-5 h-5" />
              </button>

              <VideoPlayer video={playing} />

              <div className="p-7">
                <h3 className="font-display text-2xl font-bold text-ink-black mb-4 leading-snug">
                  {playing.title}
                </h3>
                <div className="space-y-2.5 mb-4 text-sm">
                  <div className="flex items-start gap-2.5 text-gray-700">
                    <Calendar className="w-4 h-4 mt-0.5 text-primary-red shrink-0" />
                    <span>
                      <span className="font-semibold">Thời gian:</span>{' '}
                      {playing.time}
                    </span>
                  </div>
                  <div className="flex items-start gap-2.5 text-gray-700">
                    <MapPin className="w-4 h-4 mt-0.5 text-primary-red shrink-0" />
                    <span>
                      <span className="font-semibold">Địa điểm:</span>{' '}
                      {playing.location}
                    </span>
                  </div>
                </div>
                <p className="text-gray-600 text-sm leading-relaxed">
                  <span className="font-semibold text-ink-black">Bối cảnh: </span>
                  {playing.context}
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

// Trình phát: nhúng YouTube nếu tách được ID, nếu không thì hiện nút mở YouTube.
const VideoPlayer: React.FC<{ video: VideoItem }> = ({ video }) => {
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

  // Fallback: chưa có ID hợp lệ
  const searchUrl = video.youtubeId
    ? video.youtubeId
    : `https://www.youtube.com/results?search_query=${encodeURIComponent(
        video.title
      )}`;

  return (
    <div className="w-full aspect-video bg-stone-900 flex flex-col items-center justify-center text-white gap-4 p-6 text-center">
      <Film className="w-10 h-10 text-white/50" />
      <p className="text-white/80 text-sm max-w-sm">
        Chưa có ID video hợp lệ cho mục này. Hãy điền <code>youtubeId</code> trong
        file <code>videoData.ts</code> (hoặc dán nguyên link YouTube).
      </p>
      <a
        href={searchUrl}
        target="_blank"
        rel="noreferrer"
        className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-primary-red text-white text-sm font-semibold hover:bg-[#6f0008] transition-colors"
      >
        <ExternalLink className="w-4 h-4" />
        Mở trên YouTube
      </a>
    </div>
  );
};

const ActionButton: React.FC<{ icon: React.ReactNode; label: string }> = ({
  icon,
  label,
}) => (
  <button className="flex items-center justify-center gap-2 px-3 py-2.5 rounded-xl bg-stone-50 hover:bg-red-50 text-gray-700 hover:text-primary-red text-xs font-semibold transition-colors border border-stone-100">
    {icon}
    {label}
  </button>
);

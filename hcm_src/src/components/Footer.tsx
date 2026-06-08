import React from 'react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-zinc-900 text-white py-12 px-6 md:px-12">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <h3 className="font-display text-lg font-bold mb-4">Hành Trình Hồ Chí Minh</h3>
          <p className="text-sm text-gray-400">
            Không gian trưng bày kỹ thuật số và hành trình lịch sử về cuộc đời, sự nghiệp và tư tưởng Hồ Chí Minh.
          </p>
        </div>
        <div>
          
        </div>
        <div>
          <h4 className="font-semibold text-gray-200 mb-3">HCM 202 - Group 3</h4>
        </div>
      </div>
      <div className="mt-12 border-t border-gray-800 pt-6 text-center text-xs text-gray-500">
        <p>&copy; {new Date().getFullYear()} Dự án Hành Trình Hồ Chí Minh. Bảo lưu mọi quyền.</p>
      </div>
    </footer>
  );
}
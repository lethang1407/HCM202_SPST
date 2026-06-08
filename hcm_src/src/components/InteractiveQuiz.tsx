import React, { useState, useEffect, useMemo } from 'react';
import { quizQuestions } from '../data/museumData';
import { QuizQuestion } from '../types';
import { Trophy, HelpCircle, Check, X, ArrowRight, RotateCcw, Award } from 'lucide-react';

// Helper function to shuffle an array (Fisher-Yates algorithm)
const shuffleArray = <T,>(array: T[]): T[] => {
  const newArray = [...array];
  for (let i = newArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
  }
  return newArray;
};

interface ProcessedQuizQuestion extends Omit<QuizQuestion, 'options' | 'answerIndex'> {
  options: string[];
  answerIndex: number;
}

export default function InteractiveQuiz() {
  const [shuffledQuestions, setShuffledQuestions] = useState<ProcessedQuizQuestion[]>([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedOptionIndex, setSelectedOptionIndex] = useState<number | null>(null);
  const [isAnswered, setIsAnswered] = useState(false);
  const [score, setScore] = useState(0);
  const [showFinishedState, setShowFinishedState] = useState(false);

  const setupQuiz = () => {
    const processedQuestions = shuffleArray(quizQuestions).map(q => {
      const correctAnswer = q.options[q.answerIndex];
      const shuffledOptions = shuffleArray(q.options);
      const newAnswerIndex = shuffledOptions.indexOf(correctAnswer);
      return {
        ...q,
        options: shuffledOptions,
        answerIndex: newAnswerIndex,
      };
    });
    setShuffledQuestions(processedQuestions);
  };

  useEffect(() => {
    setupQuiz();
  }, []);

  const currentQuestion: ProcessedQuizQuestion | undefined = shuffledQuestions[currentQuestionIndex];

  const handleOptionClick = (index: number) => {
    if (isAnswered) return; // Prevent double clicking answers
    
    setSelectedOptionIndex(index);
    setIsAnswered(true);
    
    if (currentQuestion && index === currentQuestion.answerIndex) {
      setScore((prev) => prev + 1);
    }
  };

  const handleNext = () => {
    setSelectedOptionIndex(null);
    setIsAnswered(false);
    
    if (currentQuestionIndex + 1 < shuffledQuestions.length) {
      setCurrentQuestionIndex((prev) => prev + 1);
    } else {
      setShowFinishedState(true);
    }
  };

  const handleRestart = () => {
    setCurrentQuestionIndex(0);
    setSelectedOptionIndex(null);
    setIsAnswered(false);
    setScore(0);
    setShowFinishedState(false);
    setupQuiz(); // Re-shuffle for a new quiz
  };

  const getAwardTitle = (score: number, total: number) => {
    const ratio = score / total;
    if (ratio === 1) return { title: 'Người Truyền Lửa Cách Mạng 🇻🇳', desc: 'Tuyệt vời! Bạn có hiểu biết lịch sử cực kỳ sâu rộng về Bác.' };
    if (ratio >= 0.7) return { title: 'Nhà Nghiên Cứu Lịch Sử 📚', desc: 'Rất tốt! Bạn hiểu rất sâu sắc các cột mốc lịch sử vĩ đại.' };
    return { title: 'Nhà Khám Phá Di Sản 🌱', desc: 'Tuyệt vời vì tinh thần học tập! Hãy khám phá thêm tàng thư nhé.' };
  };

  const award = getAwardTitle(score, shuffledQuestions.length);

  return (
    <section id="interactive-quiz-section" className="py-24 px-6 md:px-12 bg-white relative">
      <div className="absolute inset-0 bg-[radial-gradient(#91000a_0.5px,transparent_0.5px)] [background-size:24px_24px] opacity-15 pointer-events-none"></div>

      <div className="max-w-3xl mx-auto relative z-10 bg-gray-50 border border-gray-100 p-8 md:p-12 rounded-3xl museum-shadow">
        
        {/* Header section of quiz */}
        <div className="text-center mb-10">
          <span className="inline-flex items-center gap-1.5 bg-yellow-400/10 border border-yellow-400/20 text-yellow-800 text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full mb-3">
            <Trophy className="w-3.5 h-3.5 text-primary-red" />
            Học tập số tương tác
          </span>
          <h2 className="font-display text-2xl md:text-4xl font-extrabold text-gray-900 tracking-tight">
            Trắc Nghiệm Kiến Thức Lịch Sử
          </h2>
          <p className="text-gray-550 font-sans text-xs md:text-sm mt-1">
            Đánh giá mức độ am hiểu về cuộc đời hoạt động cách mạng của Chủ tịch Hồ Chí Minh.
          </p>
        </div>

        {/* Finished State Screen */}
        {showFinishedState ? (
          <div className="text-center py-6 animate-fadeIn flex flex-col items-center">
            <div className="w-20 h-20 rounded-full bg-primary-red/10 border-4 border-primary-red/20 text-primary-red flex items-center justify-center mb-6 shadow-inner animate-bounce [animation-duration:3s]">
              <Award className="w-10 h-10" />
            </div>
            
            <h3 className="font-display font-black text-2xl text-gray-900 mb-2">Thử thách hoàn tất!</h3>
            <p className="font-sans text-gray-500 text-sm mb-6">Bạn đã đối chiếu chính xác:</p>
            
            {/* Scoreboard metrics circle bar */}
            <div className="relative w-36 h-36 flex items-center justify-center mb-6">
              <svg className="w-full h-full transform -rotate-90">
                {/* Back circle */}
                <circle cx="72" cy="72" r="60" stroke="#f3f4f6" strokeWidth="10" fill="transparent" />
                {/* Front colored radial */}
                <circle 
                  cx="72" cy="72" r="60" 
                  stroke="#91000a" strokeWidth="10" 
                  fill="transparent" 
                  strokeDasharray={`${2 * Math.PI * 60}`}
                  strokeDashoffset={`${2 * Math.PI * 60 * (1 - score / shuffledQuestions.length)}`}
                  className="transition-all duration-1000 ease-out"
                />
              </svg>
              <div className="absolute text-center">
                <span className="font-display text-4xl font-black text-gray-900">{score}</span>
                <span className="text-gray-400 font-sans text-sm">/{shuffledQuestions.length}</span>
              </div>
            </div>

            {/* Achievement Award details */}
            <div className="p-5 bg-white border border-gray-200/60 rounded-2xl max-w-md shadow-sm mb-8">
              <h4 className="font-display font-extrabold text-primary-red text-base md:text-lg mb-1">
                {award.title}
              </h4>
              <p className="font-sans text-xs md:text-sm text-gray-600 leading-relaxed">
                {award.desc}
              </p>
            </div>

            <button
              onClick={handleRestart}
              className="flex items-center gap-2 bg-primary-red hover:bg-primary-red/90 text-white font-bold text-sm px-6 py-3 rounded-xl transition-all shadow cursor-pointer active:scale-95"
            >
              <RotateCcw className="w-4 h-4" />
              Thực hiện lại khảo sát
            </button>
          </div>
        ) : currentQuestion ? (
          /* Quiz Question/Option Sheet */
          <div className="animate-fadeIn">
            {/* Question Step line */}
            <div className="flex justify-between items-center text-xs text-gray-400 font-sans mb-4 border-b border-gray-100 pb-3">
              <span className="font-bold flex items-center gap-1 text-gray-500">
                <HelpCircle className="w-4 h-4 text-primary-red" />
                Câu hỏi số {currentQuestionIndex + 1} của {shuffledQuestions.length}
              </span>
              <span>Độ chính xác hiện tại: {score}/{shuffledQuestions.length}</span>
            </div>

            {/* Title question */}
            <h3 className="font-display font-bold text-gray-900 text-lg md:text-xl leading-relaxed mb-6">
              {currentQuestion.question}
            </h3>

            {/* Multiple choices options stack */}
            <div className="space-y-3.5 mb-8">
              {currentQuestion.options.map((option, idx) => {
                const isSelected = selectedOptionIndex === idx;
                const isCorrect = idx === currentQuestion.answerIndex;
                let optionStyle = 'bg-white border-gray-200 hover:bg-gray-50/50 hover:border-gray-300';
                
                if (isAnswered) {
                  if (isCorrect) {
                     optionStyle = 'bg-emerald-50 border-emerald-500 text-emerald-950';
                  } else if (isSelected) {
                     optionStyle = 'bg-rose-50 border-rose-450 text-rose-950 border-rose-300';
                  } else {
                     optionStyle = 'bg-white border-gray-100 text-gray-400 opacity-60';
                  }
                }

                return (
                  <button
                    key={idx}
                    onClick={() => handleOptionClick(idx)}
                    disabled={isAnswered}
                    className={`w-full text-left p-4 rounded-xl border font-sans text-xs md:text-sm font-medium transition-all flex items-center justify-between gap-3 ${optionStyle} ${!isAnswered ? 'cursor-pointer hover:translate-x-1' : ''}`}
                  >
                    <span>{idx + 1}. {option}</span>
                    
                    {/* feedback status icons */}
                    {isAnswered && isCorrect && <Check className="w-4 h-4 text-emerald-600 flex-shrink-0" />}
                    {isAnswered && isSelected && !isCorrect && <X className="w-4 h-4 text-rose-500 flex-shrink-0" />}
                  </button>
                );
              })}
            </div>

            {/* Answer Explanation commentary reveal */}
            {isAnswered && (
              <div className="p-5 bg-yellow-400/5 border border-yellow-400/20 rounded-2xl mb-8 animate-slideUp text-xs md:text-sm font-sans leading-relaxed text-gray-700">
                <span className="font-bold text-gray-900 block mb-1">💡 Giải thích tóm lược:</span>
                {currentQuestion.explanation}
              </div>
            )}

            {/* Next buttons frame */}
            {isAnswered && (
              <div className="flex justify-end">
                <button
                  onClick={handleNext}
                  className="flex items-center gap-1.5 bg-primary-red hover:bg-primary-red/90 text-white font-bold text-xs md:text-sm px-6 py-3 rounded-xl transition-all shadow cursor-pointer active:scale-95"
                >
                  {currentQuestionIndex + 1 < shuffledQuestions.length ? 'Câu hỏi tiếp' : 'Xem kết quả'}
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            )}

          </div>
        ) : (
          <div>Đang tải câu hỏi...</div>
        )}

      </div>
    </section>
  );
}

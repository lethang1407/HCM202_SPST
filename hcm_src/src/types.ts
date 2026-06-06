export interface Milestone {
  id: string;
  year: string;
  shortYear: string;
  title: string;
  location: string;
  description: string;
  richDetails: string;
  image: string;
}

export interface ArchiveItem {
  id: string;
  category: 'nienthieu' | 'conduong' | 'doclap' | 'disan' | 'khotulieu';
  title: string;
  description: string;
  year: string;
  image: string;
}

export interface QuizQuestion {
  id: string;
  question: string;
  options: string[];
  answerIndex: number;
  explanation: string;
}

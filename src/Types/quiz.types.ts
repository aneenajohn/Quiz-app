export type DB = {
  quizDB: QuizDB[];
};

export type QuizDB = {
  quizName: string;
  playTime: string;
  questions: Question[];
};

export type Question = {
  question: string;
  points: number;
  options: Option[];
  answer: string;
  negativePoints?: number;
};

export type Option = {
  text: string;
  /*make it true when the option is right
   */
  isRight: boolean;
};

export type UserInfo = {
  userName: string;
  score: Number;
};

export type HeaderProps = {
  userName: string;
  score: number;
};

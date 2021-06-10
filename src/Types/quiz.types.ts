export type DB = {
  data: Quizzes[];
};

export type Quizzes = {
  _id: any;
  quizName: string;
  questions: Question[];
};

export type Question = {
  _id: any;
  question: string;
  points: number;
  options: Option[];
  answer: string;
  negativePoints?: number;
};

export type Option = {
  _id: any;
  text: string;
  /*make it true when the option is right
   */
  isSelected: boolean;
};

export type UserInfo = {
  userName: string;
  score: Number;
};

export type HeaderProps = {
  userName: string;
  score: number;
};

export type currentQuiz = {
  quizChosen: string;
};

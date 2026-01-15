export interface Answer {
  id: string;
  text: string;
}

export interface Question {
  id: string;
  sectionId: string;
  text: string;
  answers: Answer[];
  multiple?: boolean;
}

export interface Section {
  id: string;
  title: string;
  description: string;
  questions: Question[];
}

export interface QuestionAnswer {
  questionId: string;
  selectedAnswers: string[];
  comment: string;
}

export interface TestResults {
  [questionId: string]: QuestionAnswer;
}

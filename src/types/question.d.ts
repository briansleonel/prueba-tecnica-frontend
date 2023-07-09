export interface IQuestionOptions {
    a: string;
    b: string;
    c: string;
    d: string;
}
export interface IQuestion {
    _id: string;
    question: string;
    options: IQuestionOptions;
    correct: string;
}

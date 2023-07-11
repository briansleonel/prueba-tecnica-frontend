import { IQuestion } from "../../types/question";
import ReplyButton from "../buttons/ReplyButton";
import Content from "../layout/Content";
import ShowQuestion from "./ShowQuestion";

interface Props {
    question: IQuestion;
    selectedAnswer: boolean;
    setSelectedAnswer: (state: boolean) => void;
    isCorrectAnswer: (selected: string, questionAnswer: string) => void;
}

export default function QuestionComponent({
    question,
    selectedAnswer,
    setSelectedAnswer,
    isCorrectAnswer,
}: Props) {
    /**
     * Evento producido al seleccionar una respuesta
     * @param selected respuesta seleccionada
     */
    const onSelectAnswer = (selected: string) => {
        if (!selectedAnswer) {
            // indico que el usuario ya ha seleccionado una respuesta
            setSelectedAnswer(true);
            // verifico si la respuesta seleccionada es correcta
            isCorrectAnswer(selected, question.correct);
        }
    };

    return (
        <Content className="gap-4 animate-fadeInLeft">
            <ShowQuestion question={question.question} />
            <ReplyButton
                option={question.options.a}
                onSelectAnswer={onSelectAnswer}
            />
            <ReplyButton
                option={question.options.b}
                onSelectAnswer={onSelectAnswer}
            />
            <ReplyButton
                option={question.options.c}
                onSelectAnswer={onSelectAnswer}
            />
            <ReplyButton
                option={question.options.d}
                onSelectAnswer={onSelectAnswer}
            />
        </Content>
    );
}

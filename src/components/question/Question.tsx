import { IQuestion } from "../../types/question";
import ReplyButton from "../buttons/ReplyButton";
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
            setSelectedAnswer(true);
            console.log(selected);
            isCorrectAnswer(selected, question.correct);
            /*
            if (selected === question.correct) setCorrect(true);
            else setCorrect(false);*/
        }
    };

    return (
        <section>
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
        </section>
    );
}

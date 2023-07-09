import { IQuestion } from "../../types/question";
import ReplyButton from "../buttons/ReplyButton";
import ShowQuestion from "./ShowQuestion";

interface Props {
    question: IQuestion;
    selectedAnswer: boolean;
    setCorrect: (state: boolean) => void;
    setSelectedAnswer: (state: boolean) => void;
}

export default function QuestionComponent({
    question,
    setCorrect,
    selectedAnswer,
    setSelectedAnswer,
}: Props) {
    /**
     * Evento producido al seleccionar una respuesta
     * @param selected respuesta seleccionada
     */
    const onSelectAnswer = (selected: string) => {
        if (!selectedAnswer) {
            setSelectedAnswer(true);
            console.log(selected);
            if (selected === question.correct) setCorrect(true);
            else setCorrect(false);
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

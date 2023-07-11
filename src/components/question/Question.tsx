import { IQuestion, IQuestionOptions } from "../../types/question";
import { getObjectToArray } from "../../utils/convertObjects";
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

    const randomOrderOptions = (options: IQuestionOptions) => {
        // devuelvo las opciones en un array
        const optionsArray = getObjectToArray(options);
        // ordeno de forma aleatorio las opciones
        const ordered = optionsArray.sort(function () {
            return Math.random() - 0.5;
        });

        return ordered;
    };

    return (
        <Content className="gap-4 animate-fadeInLeft">
            <ShowQuestion question={question.question} />

            {randomOrderOptions(question.options).map((e, i) => (
                <ReplyButton
                    key={i}
                    option={e}
                    onSelectAnswer={onSelectAnswer}
                />
            ))}
        </Content>
    );
}

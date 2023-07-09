import { useState, useEffect } from "react";
import data from "./data/data.json";
import { IQuestion } from "./types/question";
import QuestionComponent from "./components/question/Question";
import InformationComponent from "./components/question/Information";
import EndQuestionnaire from "./components/question/EndQuestionnaire";

function App() {
    const [indexQuestion, setIndexQuestion] = useState(0);
    const [question, setQuestion] = useState<IQuestion>(data[indexQuestion]);
    const [selectedAnswer, setSelectedAnswer] = useState(false);
    const [correct, setCorrect] = useState(false);
    const [finish, setFinish] = useState(false);

    // puntajes
    const [totalCorrect, setTotalCorrect] = useState(0);

    /**
     * Cambio a la siguiente pregunta y establezco los valores por default necesarios
     */
    const nextQuestion = () => {
        const newIndex = indexQuestion + 1;
        if (newIndex < data.length) {
            setIndexQuestion(indexQuestion + 1);
            setSelectedAnswer(false);
        } else {
            console.log("Finished");
            setFinish(true);
        }
    };

    /**
     * Permite identificar si la respuesta seleccionada por el usuario es correcta
     * @param selected respuesta seleccionada
     * @param questionAnswer respuesta correcta del objeto
     */
    const isCorrectAnswer = (selected: string, questionAnswer: string) => {
        if (selected === questionAnswer) {
            setCorrect(true);
            setTotalCorrect(totalCorrect + 1);
        } else setCorrect(false);
    };

    /**
     * Verifico el momento en el que se avanza a la siguiente pregunta
     */
    useEffect(() => {
        setQuestion(data[indexQuestion]);
        setSelectedAnswer(false);
    }, [indexQuestion]);

    if (finish)
        return (
            <EndQuestionnaire
                totalCorrect={totalCorrect}
                totalQuestions={data.length}
            />
        );

    if (selectedAnswer)
        return (
            <InformationComponent
                correct={correct}
                nextQuestion={nextQuestion}
            />
        );

    return (
        <QuestionComponent
            question={question}
            selectedAnswer={selectedAnswer}
            setSelectedAnswer={setSelectedAnswer}
            isCorrectAnswer={isCorrectAnswer}
        />
    );
}

export default App;

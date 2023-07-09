import { useState, useEffect } from "react";
import data from "./data/data.json";
import { IQuestion } from "./types/question";
import QuestionComponent from "./components/question/Question";
import InformationComponent from "./components/question/Information";

function App() {
    const [indexQuestion, setIndexQuestion] = useState(0);
    const [question, setQuestion] = useState<IQuestion>(data[indexQuestion]);
    const [selectedAnswer, setSelectedAnswer] = useState(false);
    const [correct, setCorrect] = useState(false);

    /**
     * Cambio a la siguiente pregunta y establezco los valores por default necesarios
     */
    const nextQuestion = () => {
        const newIndex = indexQuestion + 1;
        if (newIndex < data.length) {
            setIndexQuestion(indexQuestion + 1);
            setSelectedAnswer(false);
        } else console.log("Finished");
    };

    /**
     * Verifico el momento en el que se avanza a la siguiente pregunta
     */
    useEffect(() => {
        setQuestion(data[indexQuestion]);
        setSelectedAnswer(false);
    }, [indexQuestion]);

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
            setCorrect={setCorrect}
            selectedAnswer={selectedAnswer}
            setSelectedAnswer={setSelectedAnswer}
        />
    );
}

export default App;

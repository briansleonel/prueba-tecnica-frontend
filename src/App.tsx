import { useState, useEffect } from "react";
import data from "./data/data.json";
import { IQuestion } from "./types/question";
import QuestionComponent from "./components/question/Question";
import InformationComponent from "./components/question/Information";
import EndQuestionnaire from "./components/question/EndQuestionnaire";
import StartQuestionnaire from "./components/question/StartQuestionnaire";

function App() {
    const [indexQuestion, setIndexQuestion] = useState(-1); // indice de la pregunta a mostra
    const [question, setQuestion] = useState<IQuestion>(data[0]); // pregunta actual a mostrar
    const [selectedAnswer, setSelectedAnswer] = useState(false); // controlar si el usuario seleccionó una opción
    const [correct, setCorrect] = useState(false); // controlar si una respuesta es correcta o no
    const [finish, setFinish] = useState(false); // para controlar si se finalizó el cuestionario

    // puntajes
    const [totalCorrect, setTotalCorrect] = useState(0);

    /**
     * Cambio a la siguiente pregunta y establezco los valores por default necesarios
     */
    const nextQuestion = () => {
        const newIndex = indexQuestion + 1;
        // si el nuevo indice es menor al tamaño del array, aún hay preguntas disponibles
        if (newIndex < data.length) {
            setIndexQuestion(indexQuestion + 1);
            setSelectedAnswer(false);
        } else {
            // en caso contrario se finaliza el cuestionario
            setFinish(true);
        }
    };

    /**
     * Función que permite reestablecer el cuestionario
     */
    const restartHandle = () => {
        setIndexQuestion(-1);
        setFinish(false);
        setSelectedAnswer(false);
        setTotalCorrect(0);
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
        if (indexQuestion >= 0) {
            setQuestion(data[indexQuestion]);
            setSelectedAnswer(false);
        }
    }, [indexQuestion]);

    if (indexQuestion < 0)
        return <StartQuestionnaire setIndexQuestion={setIndexQuestion} />;

    if (finish)
        return (
            <EndQuestionnaire
                totalCorrect={totalCorrect}
                totalQuestions={data.length}
                restartHandle={restartHandle}
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

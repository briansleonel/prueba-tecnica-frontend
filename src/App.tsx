import QuestionComponent from "./components/question/Question";
import InformationComponent from "./components/question/Information";
import EndQuestionnaire from "./components/question/EndQuestionnaire";
import StartQuestionnaire from "./components/question/StartQuestionnaire";
import useData from "./hooks/useData";
import useQuestion from "./hooks/useQuestion";

function App() {
    const {
        correct,
        finish,
        setFinish,
        isCorrectAnswer,
        restartState,
        totalCorrect,
    } = useQuestion();

    const {
        indexQuestion,
        setIndexQuestion,
        question,
        totalQuestions,
        selectedAnswer,
        setSelectedAnswer,
        nextQuestion,
        restartData,
    } = useData(setFinish);

    const restartHandle = () => {
        restartData();
        restartState();
    };

    // cuestionario no iniciado
    if (indexQuestion < 0)
        return <StartQuestionnaire setIndexQuestion={setIndexQuestion} />;

    // cuestionario finalizado
    if (finish)
        return (
            <EndQuestionnaire
                totalCorrect={totalCorrect}
                totalQuestions={totalQuestions}
                restartHandle={restartHandle}
            />
        );

    // se selecciona una opción de una pregunta
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

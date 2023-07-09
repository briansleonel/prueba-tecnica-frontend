import { useState, useEffect } from "react";
import data from "./data/data.json";
import { IQuestion } from "./types/question";

function App() {
    const [indexQuestion, setIndexQuestion] = useState(0);
    const [question, setQuestion] = useState<IQuestion>(data[indexQuestion]);
    const [selectedAnswer, setSelectedAnswer] = useState(false);

    const onSelectAnswer = (selected: string) => {
        if (!selectedAnswer) {
            setSelectedAnswer(true);
            console.log(selected);
            nextQuestion();
        }
    };

    const nextQuestion = () => {
        const newIndex = indexQuestion + 1;
        if (newIndex < data.length) setIndexQuestion(indexQuestion + 1);
        else console.log("Finished");
    };

    useEffect(() => {
        setQuestion(data[indexQuestion]);
        setSelectedAnswer(false);
    }, [indexQuestion]);

    return (
        <section>
            <div>{question.question}</div>
            <button
                type="button"
                onClick={() => onSelectAnswer(question.options.a)}
            >
                {question.options.a}
            </button>
            <button
                type="button"
                onClick={() => onSelectAnswer(question.options.b)}
            >
                {question.options.b}
            </button>
            <button
                type="button"
                onClick={() => onSelectAnswer(question.options.c)}
            >
                {question.options.c}
            </button>
            <button
                type="button"
                onClick={() => onSelectAnswer(question.options.d)}
            >
                {question.options.d}
            </button>
        </section>
    );
}

export default App;

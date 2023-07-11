import { useState } from "react";

export default function useQuestion() {
    const [correct, setCorrect] = useState(false); // controlar si una respuesta es correcta o no
    const [finish, setFinish] = useState(false); // para controlar si se finalizó el cuestionario
    const [totalCorrect, setTotalCorrect] = useState(0); // puntajes

    /**
     * Reiniciar el estado
     */
    const restartState = () => {
        setFinish(false);
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

    return {
        correct,
        setCorrect,
        finish,
        setFinish,
        totalCorrect,
        setTotalCorrect,
        restartState,
        isCorrectAnswer,
    };
}

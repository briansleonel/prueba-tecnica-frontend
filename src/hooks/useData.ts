import { useEffect, useState } from "react";
import { IQuestion } from "../types/question";

import data from "../data/data.json";

export default function useData(setFinish: (state: boolean) => void) {
    const [indexQuestion, setIndexQuestion] = useState(-1); // indice de la pregunta a mostra
    const [question, setQuestion] = useState<IQuestion>(data[0]); // pregunta actual a mostrar
    const [selectedAnswer, setSelectedAnswer] = useState(false); // controlar si el usuario seleccionó una opción
    const totalQuestions = data.length;

    /**
     * Cambio a la siguiente pregunta y establezco los valores por default necesarios
     */
    const nextQuestion = () => {
        const newIndex = indexQuestion + 1;
        // si el nuevo indice es menor al tamaño del array, aún hay preguntas disponibles
        if (newIndex < totalQuestions) {
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
    const restartData = () => {
        setIndexQuestion(-1);
        setSelectedAnswer(false);
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

    return {
        indexQuestion,
        setIndexQuestion,
        question,
        setQuestion,
        selectedAnswer,
        setSelectedAnswer,
        totalQuestions,
        nextQuestion,
        restartData,
    };
}

interface Props {
    totalQuestions: number;
    totalCorrect: number;
    restartHandle: () => void;
}

export default function EndQuestionnaire({
    totalCorrect,
    totalQuestions,
    restartHandle,
}: Props) {
    return (
        <>
            <h3>Cuestionario finalizado</h3>
            <p>
                Respuestas acertadas:{" "}
                <span>{`${totalCorrect}/${totalQuestions}`}</span>
            </p>
            <p>
                Puntaje total: <span>{totalCorrect * 10}</span>
            </p>
            <button onClick={() => restartHandle()}>Reiniciar</button>
        </>
    );
}

export default function StartQuestionnaire({
    setIndexQuestion,
}: {
    setIndexQuestion: (state: number) => void;
}) {
    return (
        <>
            <h3>Cuestionario</h3>
            <button onClick={() => setIndexQuestion(0)}>Iniciar</button>
        </>
    );
}

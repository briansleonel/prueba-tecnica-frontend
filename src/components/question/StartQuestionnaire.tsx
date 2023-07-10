import Content from "../layout/Content";

export default function StartQuestionnaire({
    setIndexQuestion,
}: {
    setIndexQuestion: (state: number) => void;
}) {
    return (
        <Content>
            <h3>Cuestionario</h3>
            <button onClick={() => setIndexQuestion(0)}>Iniciar</button>
        </Content>
    );
}

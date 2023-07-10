import Content from "../layout/Content";

interface Props {
    correct: boolean;
    nextQuestion: () => void;
}

export default function InformationComponent({ correct, nextQuestion }: Props) {
    return (
        <Content>
            <p>Respuesta {correct ? "correcta" : "incorrecta"}</p>
            <button type="button" onClick={() => nextQuestion()}>
                Sigiente
            </button>
        </Content>
    );
}

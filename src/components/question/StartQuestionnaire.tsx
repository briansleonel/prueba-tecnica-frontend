import ButtonIcon from "../buttons/Button";
import Content from "../layout/Content";
import Title from "../layout/Title";
import Information from "../layout/Information";

export default function StartQuestionnaire({
    setIndexQuestion,
}: {
    setIndexQuestion: (state: number) => void;
}) {
    return (
        <Content className="justify-between gap-12">
            <div>
                <Title className="border-b pb-2">cuestionario</Title>
                <Information className="mt-8">
                    Lea atentamente cada pregunta.
                </Information>
                <Information className="mt-2">
                    Solo podrá seleccionar una respuesta.
                </Information>
                <Information className="mt-2">
                    Debe seleccionar una respuesta para avanzar.
                </Information>
            </div>
            <ButtonIcon onClickFn={() => setIndexQuestion(0)} title="Iniciar">
                iniciar
            </ButtonIcon>
        </Content>
    );
}

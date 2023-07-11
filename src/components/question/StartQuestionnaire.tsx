import ButtonIcon from "../buttons/Button";
import Content from "../layout/Content";
import Title from "../layout/Title";
import InformationItems from "../layout/InformationItems";

export default function StartQuestionnaire({
    setIndexQuestion,
}: {
    setIndexQuestion: (state: number) => void;
}) {
    return (
        <Content className="justify-between gap-12 animate-backInLeft">
            <div>
                <Title className="border-b pb-2">cuestionario</Title>
                <InformationItems className="mt-8">
                    Lea atentamente cada pregunta.
                </InformationItems>
                <InformationItems className="mt-2">
                    Solo podrá seleccionar una respuesta.
                </InformationItems>
                <InformationItems className="mt-2">
                    Debe seleccionar una respuesta para avanzar.
                </InformationItems>
            </div>
            <ButtonIcon onClickFn={() => setIndexQuestion(0)} title="Iniciar">
                iniciar
            </ButtonIcon>
        </Content>
    );
}

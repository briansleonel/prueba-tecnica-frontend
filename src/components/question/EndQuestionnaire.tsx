import { TrophyIcon } from "@heroicons/react/20/solid";
import ButtonIcon from "../buttons/Button";
import Content from "../layout/Content";
import Paragraph, { TextBold } from "../layout/Paragraph";
import Title from "../layout/Title";

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
        <Content className="justify-between">
            <div className="w-full flex flex-col gap-6">
                <Title className="border-b pb-2">finalizado</Title>

                <div>
                    <Paragraph className="text-lg">
                        Total de preguntas:{" "}
                        <TextBold>{totalQuestions}</TextBold>
                    </Paragraph>
                    <Paragraph className="text-lg mt-1">
                        Respuestas correctas:{" "}
                        <TextBold>{totalCorrect}</TextBold>
                    </Paragraph>
                </div>

                <div className="flex items-center justify-center gap-4 mx-auto text-4xl my-12">
                    <TrophyIcon className="w-16 text-yellow-300 drop-shadow-[0px_0px_5px_rgba(254,240,138,.6)] animate-tada animate-infinite animate-slower" />
                    <Paragraph className="!text-4xl font-light italic">
                        {totalCorrect * 10} pts.
                    </Paragraph>
                </div>
            </div>

            <ButtonIcon onClickFn={() => restartHandle()} title="Reiniciar">
                reiniciar
            </ButtonIcon>
        </Content>
    );
}

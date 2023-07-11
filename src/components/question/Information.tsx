import ButtonIcon from "../buttons/Button";
import Content from "../layout/Content";
import Title from "../layout/Title";
import { CheckCircleIcon, XCircleIcon } from "@heroicons/react/24/outline";

interface Props {
    correct: boolean;
    nextQuestion: () => void;
}

export default function InformationComponent({ correct, nextQuestion }: Props) {
    return (
        <Content className="justify-between gap-6">
                <Title className="border-y py-3">
                    Respuesta {correct ? "correcta" : "incorrecta"}
                </Title>
                {correct ? (
                    <CheckCircleIcon className="w-1/2 md:w-1/3 text-green-500 mx-auto" />
                ) : (
                    <XCircleIcon className="w-1/2 md:w-1/3 text-red-500 mx-auto" />
                )}
            <ButtonIcon onClickFn={() => nextQuestion()} title="Continuar">
                Continuar
            </ButtonIcon>
        </Content>
    );
}

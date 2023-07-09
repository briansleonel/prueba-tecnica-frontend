interface Props {
    option: string;
    onSelectAnswer: (selected: string) => void;
}

export default function ReplyButton({ option, onSelectAnswer }: Props) {
    return (
        <button type="button" onClick={() => onSelectAnswer(option)}>
            {option}
        </button>
    );
}

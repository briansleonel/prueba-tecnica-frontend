interface Props {
    option: string;
    onSelectAnswer: (selected: string) => void;
}

export default function ReplyButton({ option, onSelectAnswer }: Props) {
    return (
        <button
            type="button"
            onClick={() => onSelectAnswer(option)}
            className="bg-white text-black w-full p-3 font-normal uppercase text-base md:text-lg tracking-wider rounded hover:bg-blue-600 active:bg-blue-700 active:text-white hover:text-white transition-all duration-500"
        >
            {option}
        </button>
    );
}

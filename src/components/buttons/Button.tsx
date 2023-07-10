export default function ButtonIcon({
    onClickFn,
    children,
    title,
}: {
    onClickFn: () => void;
    children: React.ReactNode;
    title: string;
}) {
    return (
        <button
            className="relative text-purple-800 hover:text-purple-700 transition-all duration-500 scale-110 md:hover:scale-125 w-24 h-24 mx-auto p-0 animate-pulse animate-infinite animate-slow "
            onClick={onClickFn}
            title={title}
        >
            {children}
        </button>
    );
}

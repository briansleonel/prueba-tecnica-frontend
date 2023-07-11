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
            className="rounded backdrop-blur-sm backdrop-filter bg-zinc-950/5 text-purple-500 hover:text-purple-600 border border-purple-500 transition-all duration-500 mx-auto px-12 py-4 animate-pulse animate-infinite animate-slow font-bold text-xl tracking-widest uppercase"
            onClick={onClickFn}
            title={title}
        >
            {children}
        </button>
    );
}

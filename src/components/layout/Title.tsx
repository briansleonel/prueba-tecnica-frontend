export default function Title({
    className,
    children,
}: {
    className?: string;
    children: React.ReactNode;
}) {
    return (
        <h6
            className={`text-3xl font-normal w-full text-center uppercase ${
                className ? className : ""
            }`}
        >
            {children}
        </h6>
    );
}

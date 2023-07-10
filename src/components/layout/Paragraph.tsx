export default function Paragraph({
    children,
    className,
}: {
    children: React.ReactNode;
    className?: string;
}) {
    return (
        <p className={`text-base md:text-lg font-light ${className ? className : ""}`}>{children}</p>
    );
}

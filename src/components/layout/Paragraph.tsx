export default function Paragraph({
    children,
    className,
}: {
    children: React.ReactNode;
    className?: string;
}) {
    return (
        <p
            className={`text-base md:text-lg font-light ${
                className ? className : ""
            }`}
        >
            {children}
        </p>
    );
}

export function TextBold({ children }: { children: React.ReactNode }) {
    return <span className="font-semibold italic">{children}</span>;
}

/*
export function ParagraphWithTextBold({
    text,
    textBold,
}: {
    text: string;
    textBold: string;
}) {
    return (
        <Paragraph className="text-lg">
            {text} <TextBold>{textBold}</TextBold>
        </Paragraph>
    );
}
*/

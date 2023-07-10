export default function Title({ text, className }: { text: string, className?: string }) {
    return (
        <h6 className={`text-3xl font-normal w-full text-center uppercase ${className? className: ""}`}>
            {text}
        </h6>
    );
}

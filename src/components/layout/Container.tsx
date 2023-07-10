export default function Container({ children }: { children: React.ReactNode }) {
    return (
        <div className="w-full min-h-screen flex justify-center items-center bg-back bg-no-repeat bg-cover">
            {children}
        </div>
    );
}

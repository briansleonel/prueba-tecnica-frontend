export default function Content({ children }: { children: React.ReactNode }) {
    return (
        <section className="flex flex-col bg-neutral-950 text-white p-8 rounded w-full sm:w-2/3 md:w-2/4 lg:w-2/5 min-h-[26rem] md:min-h-[22rem]">
            {children}
        </section>
    );
}

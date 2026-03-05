interface SectionWrapperProps {
    children: React.ReactNode;
    className?: string;
    id?: string;
    bg?: "white" | "neutral" | "primary";
}

export default function SectionWrapper({
    children,
    className = "",
    id,
    bg = "white",
}: SectionWrapperProps) {
    const bgClasses = {
        white: "bg-white",
        neutral: "bg-neutral-50",
        primary: "bg-primary text-white",
    };

    return (
        <section id={id} className={`py-16 sm:py-24 ${bgClasses[bg]} ${className}`}>
            <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
                <div className={`rounded-[2.5rem] border border-neutral-100 shadow-sm px-6 py-12 sm:p-16 ${bgClasses[bg] === 'bg-white' ? 'bg-neutral-50' : 'bg-white'}`}>
                    {children}
                </div>
            </div>
        </section>
    );
}

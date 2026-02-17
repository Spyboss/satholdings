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
        <section id={id} className={`py-16 sm:py-20 ${bgClasses[bg]} ${className}`}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">{children}</div>
        </section>
    );
}

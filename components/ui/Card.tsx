import Link from "next/link";

interface CardProps {
    title: string;
    description: string;
    icon?: string;
    href?: string;
    className?: string;
}

export default function Card({
    title,
    description,
    icon,
    href,
    className = "",
}: CardProps) {
    const content = (
        <div
            className={`card-hover p-8 rounded-2xl border border-neutral-100 bg-white relative overflow-hidden group ${className}`}
        >
            <div className="absolute inset-x-0 top-0 h-1.5 w-full bg-secondary opacity-0 transform origin-left transition-all duration-300 scale-x-0 group-hover:opacity-100 group-hover:scale-x-100"></div>
            {icon && <span className="text-3xl mb-5 block">{icon}</span>}
            <h3 className="text-lg font-bold text-primary mb-3 font-heading group-hover:text-secondary transition-colors">
                {title}
            </h3>
            <p className="text-[13px] text-neutral-500 leading-relaxed">{description}</p>
        </div>
    );

    if (href) {
        return <Link href={href}>{content}</Link>;
    }

    return content;
}

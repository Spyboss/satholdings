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
            className={`p-6 rounded-xl border border-neutral-200 bg-white hover:border-secondary/30 hover:shadow-md transition-all ${className}`}
        >
            {icon && <span className="text-3xl mb-4 block">{icon}</span>}
            <h3 className="text-lg font-bold text-primary mb-2 font-heading">
                {title}
            </h3>
            <p className="text-sm text-neutral-600 leading-relaxed">{description}</p>
        </div>
    );

    if (href) {
        return <Link href={href}>{content}</Link>;
    }

    return content;
}

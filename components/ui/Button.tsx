import Link from "next/link";

interface ButtonProps {
    href: string;
    children: React.ReactNode;
    variant?: "primary" | "secondary" | "outline";
    className?: string;
}

export default function Button({
    href,
    children,
    variant = "primary",
    className = "",
}: ButtonProps) {
    const variants = {
        primary:
            "bg-primary text-white hover:bg-primary-light",
        secondary:
            "bg-secondary text-white hover:bg-secondary-light",
        outline:
            "border-2 border-primary text-primary hover:bg-primary hover:text-white",
    };

    return (
        <Link
            href={href}
            className={`inline-block px-6 py-3 font-medium rounded-lg transition-colors text-sm ${variants[variant]} ${className}`}
        >
            {children}
        </Link>
    );
}

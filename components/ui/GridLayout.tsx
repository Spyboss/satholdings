interface GridLayoutProps {
    children: React.ReactNode;
    columns?: 2 | 3 | 4;
    className?: string;
}

export default function GridLayout({
    children,
    columns = 3,
    className = "",
}: GridLayoutProps) {
    const colClasses = {
        2: "grid-cols-1 md:grid-cols-2",
        3: "grid-cols-1 md:grid-cols-2 lg:grid-cols-3",
        4: "grid-cols-1 sm:grid-cols-2 lg:grid-cols-4",
    };

    return (
        <div className={`grid ${colClasses[columns]} gap-6 ${className}`}>
            {children}
        </div>
    );
}

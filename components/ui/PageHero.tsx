interface PageHeroProps {
    title: string;
    subtitle?: string;
}

export default function PageHero({ title, subtitle }: PageHeroProps) {
    return (
        <section className="bg-primary py-16 sm:py-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white font-heading">
                    {title}
                </h1>
                {subtitle && (
                    <p className="mt-4 text-lg text-neutral-300 max-w-2xl mx-auto">
                        {subtitle}
                    </p>
                )}
            </div>
        </section>
    );
}

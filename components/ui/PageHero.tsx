interface PageHeroProps {
    title: string;
    subtitle?: string;
}

export default function PageHero({ title, subtitle }: PageHeroProps) {
    return (
        <section className="relative overflow-hidden bg-primary-dark py-20 sm:py-28">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(42,123,136,0.15)_0%,transparent_50%)]" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(212,168,67,0.1)_0%,transparent_50%)]" />

            <div className="relative mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8 text-center">
                <div className="glass-dark mx-auto inline-block rounded-3xl p-8 sm:p-12 shadow-2xl border border-white/10">
                    <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white font-heading tracking-tight drop-shadow-lg">
                        {title}
                    </h1>
                    {subtitle && (
                        <p className="mt-6 text-[13px] sm:text-sm text-neutral-300 max-w-2xl mx-auto leading-relaxed drop-shadow-md">
                            {subtitle}
                        </p>
                    )}
                </div>
            </div>
        </section>
    );
}

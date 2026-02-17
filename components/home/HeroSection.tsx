import Button from "@/components/ui/Button";

export default function HeroSection() {
    return (
        <section className="relative bg-primary overflow-hidden">
            {/* Background pattern — subtle geometric overlay */}
            <div className="absolute inset-0 opacity-5">
                <div
                    className="absolute inset-0"
                    style={{
                        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
                    }}
                />
            </div>

            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 sm:py-32 lg:py-40">
                <div className="max-w-3xl">
                    {/* Badge */}
                    <span className="inline-block px-3 py-1 text-xs font-semibold tracking-wider uppercase bg-accent/20 text-accent rounded-full mb-6">
                        Since Establishment
                    </span>

                    {/* Headline */}
                    <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-white leading-tight font-heading">
                        Sri Lanka&apos;s First
                        <br />
                        <span className="text-accent">Rice Cooker Manufacturing</span>
                        <br />
                        Facility
                    </h1>

                    {/* Sub-headline */}
                    <p className="mt-6 text-lg sm:text-xl text-neutral-300 max-w-2xl leading-relaxed">
                        From constructing national infrastructure to manufacturing
                        consumer electronics — SAT Holdings delivers excellence across
                        engineering, manufacturing, and trading.
                    </p>

                    {/* CTAs */}
                    <div className="mt-8 flex flex-wrap gap-4">
                        <Button href="/manufacturing" variant="secondary">
                            Our Manufacturing
                        </Button>
                        <Button href="/engineering" variant="outline">
                            Engineering &amp; Construction
                        </Button>
                    </div>
                </div>
            </div>
        </section>
    );
}

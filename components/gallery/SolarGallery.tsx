"use client";

import { useState } from "react";
import Image from "next/image";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import Reveal from "@/components/ui/Reveal";

interface SolarGalleryProps {
    images: readonly string[];
}

export default function SolarGallery({ images }: SolarGalleryProps) {
    const [index, setIndex] = useState(-1);

    return (
        <>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {images.map((image, i) => (
                    <Reveal
                        key={image}
                        delay={0.15 * i}
                        className="overflow-hidden rounded-xl shadow-[0_4px_20px_rgb(0,0,0,0.3)] group relative border border-white/10 cursor-pointer"
                    >
                        <div onClick={() => setIndex(i)}>
                            <Image
                                src={image}
                                alt={`Tangalle solar installation photo ${i + 1}`}
                                width={500}
                                height={350}
                                className="h-40 w-full object-cover transition-transform duration-700 group-hover:scale-105"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-neutral-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                                <span className="text-white text-[10px] font-extrabold tracking-widest uppercase border border-white/30 rounded-full px-4 py-2 bg-black/20 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-4 group-hover:translate-y-0">
                                    Enlarge
                                </span>
                            </div>
                        </div>
                    </Reveal>
                ))}
            </div>

            <Lightbox
                index={index}
                open={index >= 0}
                close={() => setIndex(-1)}
                slides={images.map(src => ({ src }))}
            />
        </>
    );
}

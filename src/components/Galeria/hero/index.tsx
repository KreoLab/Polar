import React from "react";
import Image from 'next/image';

import GaleriaUno from "@/assets/Galeria-1.png";
import GaleriaDos from "@/assets/Galeria-2.png";
import GaleriaTres from "@/assets/Galeria-3.png";
import GaleriaCuatro from "@/assets/Galeria-4.png";
import GaleriaCinco from "@/assets/Galeria-5.png";
import GaleriaSeis from "@/assets/Galeria-6.png";
import GaleriaSiete from "@/assets/Galeria-7.png";
import GeleriaOcho from "@/assets/Galeria-8.png";
import GeleriaNueve from "@/assets/Galeria-9.png";
import GeleriaDiez from "@/assets/Galeria-10.png";
import GeleriaOnce from "@/assets/Galeria-11.png";
import GeleriaDoce from "@/assets/Galeria-12.png";
import GeleriaTrece from "@/assets/Galeria-13.png";
import GeleriaCatorse from "@/assets/Galeria-14.png";
import GeleriaQuince from "@/assets/Galeria-15.png";
import GeleriaDiezsies from "@/assets/Galeria-16.png";
import GeleriaDiezsiete from "@/assets/Galeria-17.png";
import GeleriaDiezocho from "@/assets/Galeria-18.png";

function GaleriaHero() {
    const imagenes = [
        { src: GaleriaUno, alt: "Diseño Polar 1", class: "lg:col-span-2 lg:row-span-2" }, // Principal grande
        { src: GaleriaDos, alt: "Diseño Polar 2", class: "lg:col-span-1 lg:row-span-1" },
        { src: GaleriaTres, alt: "Diseño Polar 3", class: "lg:col-span-1 lg:row-span-2" }, // Vertical
        { src: GaleriaCuatro, alt: "Diseño Polar 4", class: "lg:col-span-1 lg:row-span-1" },
        { src: GaleriaCinco, alt: "Diseño Polar 5", class: "lg:col-span-1 lg:row-span-1" },
        { src: GaleriaSeis, alt: "Diseño Polar 6", class: "lg:col-span-1 lg:row-span-1" },
        { src: GaleriaSiete, alt: "Diseño Polar 7", class: "lg:col-span-1 lg:row-span-1" },
        { src: GeleriaOcho, alt: "Diseño Polar 8", class: "lg:col-span-1 lg:row-span-1" },
        { src: GeleriaNueve, alt: "Diseño Polar 9", class: "lg:col-span-1 lg:row-span-1" },
        { src: GeleriaDiez, alt: "Diseño Polar 10", class: "lg:col-span-1 lg:row-span-1" },
        { src: GeleriaOnce, alt: "Diseño Polar 11", class: "lg:col-span-1 lg:row-span-1" },
        { src: GeleriaDoce, alt: "Diseño Polar 12", class: "lg:col-span-1 lg:row-span-1" },
        { src: GeleriaTrece, alt: "Diseño Polar 13", class: "lg:col-span-1 lg:row-span-1" },
        { src: GeleriaCatorse, alt: "Diseño Polar 14", class: "lg:col-span-1 lg:row-span-1" },
        { src: GeleriaQuince, alt: "Diseño Polar 15", class: "lg:col-span-1 lg:row-span-1" },
        { src: GeleriaDiezsies, alt: "Diseño Polar 16", class: "lg:col-span-1 lg:row-span-1" },
        { src: GeleriaDiezsiete, alt: "Diseño Polar 17", class: "lg:col-span-1 lg:row-span-1" },
        { src: GeleriaDiezocho, alt: "Diseño Polar 18", class: "lg:col-span-1 lg:row-span-1" },
    ];

    return (
        <section className="bg-[#FDFBF7] py-16 md:py-24 px-6 lg:px-12">
            <div className="max-w-7xl mx-auto">

                {/* CABECERA EDITORIAL */}
                <div className="mb-12 md:mb-16 space-y-4">
                    <span className="text-[10px] uppercase tracking-[0.5em] text-stone-400 font-medium">
                        Portafolio
                    </span>
                    <h2 className="text-4xl md:text-5xl font-serif text-stone-800 tracking-tight">
                        Historias que florecen
                    </h2>
                    <div className="w-12 h-[1px] bg-[#D9BDB2]"></div>
                </div>

                {/* GRID DE GALERÍA TIPO MOSAICO */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 auto-rows-[200px] md:auto-rows-[250px] gap-4 lg:gap-6">
                    {imagenes.map((img, index) => (
                        <div
                            key={index}
                            className={`relative group overflow-hidden rounded-xl shadow-sm ${img.class} animate-in fade-in duration-700`}
                            style={{ animationDelay: `${index * 100}ms` }}
                        >
                            <Image
                                src={img.src}
                                alt={img.alt}
                                fill
                                className="object-cover transition-transform duration-1000 group-hover:scale-110"
                                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                            />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default GaleriaHero;
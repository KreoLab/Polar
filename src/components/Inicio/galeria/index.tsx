import React from "react";
import Image from 'next/image';
import ImgUno from "@/assets/Galeria-Inicio-PT1.png";
import ImgDos from "@/assets/Galeria-Inicio-PT2.png";
import ImgTres from "@/assets/Galeria-Inicio-PT3.png";
import ImgCuatro from "@/assets/Galeria-Inicio-PT4.png";
import ImgCinco from "@/assets/Galeria-Inicio-PT5.png";
import ImgSeis from "@/assets/Galeria-Inicio-PT6.png";

function InicioGaleria() {
    // Definimos el array para iterar más fácilmente
    const imagenes = [
        { src: ImgUno, alt: "Galería 1" },
        { src: ImgCuatro, alt: "Galería 4" }, // Nota: El orden importa para CSS Columns
        { src: ImgDos, alt: "Galería 2" },
        { src: ImgCinco, alt: "Galería 5" },
        { src: ImgTres, alt: "Galería 3" },
        { src: ImgSeis, alt: "Galería 6" },
    ];

    return (
        <section className="bg-[#faf5f1] py-16 md:py-24 px-6 lg:px-12">
            <div className="max-w-7xl mx-auto">

                {/* CABECERA (Intacta) */}
                <div className="mb-12 md:mb-20 space-y-3">
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif text-stone-800 tracking-tight">
                        Historias que florecen
                    </h2>
                    <p className="text-sm md:text-base text-stone-500 font-light max-w-md leading-relaxed">
                        Esta galería es un reflejo de historias reales donde los detalles hicieron la diferencia.
                    </p>
                </div>

                {/* CONTENEDOR MASONRY (Uso de CSS Columns) */}
                {/* - gap-6/8: Espacio entre columnas
                   - columns-1: 1 columna en móvil (apilado)
                   - sm:columns-2: 2 columnas en tablet
                   - lg:columns-3: 3 columnas en PC (como la referencia)
                */}
                <div className="gap-6 lg:gap-8 columns-1 sm:columns-2 lg:columns-3 space-y-6 lg:space-y-8">

                    {imagenes.map((imagen, index) => (
                        <div
                            key={index}
                            // break-inside-avoid: Evita que la imagen se corte entre columnas
                            className="relative break-inside-avoid group overflow-hidden rounded-sm shadow-sm hover:shadow-xl transition-shadow duration-300"
                        >
                            <Image
                                src={imagen.src}
                                alt={imagen.alt}
                                // Importante: No usamos 'fill' aquí para Columns.
                                // Usamos layout='responsive' (o simplemente width/height)
                                // para que mantengan su aspect-ratio original.
                                width={500} // Valor de referencia, Next.js lo ajustará
                                height={700} // Valor de referencia, Next.js lo ajustará
                                className="object-cover w-full h-auto transition-transform duration-700 group-hover:scale-105"
                            />
                        </div>
                    ))}

                </div>
            </div>
        </section>
    );
}

export default InicioGaleria;
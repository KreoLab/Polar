import React from "react";
import Image from 'next/image';
import Arreglo from "@/assets/Historia-Nosotros.png";

function HistoriaNosotros() {
    return (
        <section className="bg-[#FDFBF7] py-16 md:py-24 lg:py-32 px-6 lg:px-12 overflow-hidden">
            <div className="max-w-7xl mx-auto">
                {/* GRID PRINCIPAL RESPONSIVO */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20 items-center">

                    {/* COLUMNA 1: IMAGEN (Con diseño flotante) */}
                    <div className="relative order-2 md:order-1 flex justify-center md:justify-start pt-10 md:pt-0">
                        {/* Contenedor principal de la imagen */}
                        <div className="relative aspect-[4/5] w-[90%] sm:w-[80%] md:w-full max-w-sm md:max-w-md rounded-sm overflow-hidden shadow-2xl z-10 transform -rotate-2 hover:rotate-0 transition-transform duration-500">
                            <Image
                                src={Arreglo}
                                alt="Arreglo Floral Artístico de Polar Atelier"
                                fill
                                className="object-cover"
                                placeholder="blur" // Opcional: si tienes blurDataURL
                            />
                        </div>

                        {/* Detalle decorativo (Card flotante atrás - Opcional, para dar el efecto 'lleno') */}
                        <div className="absolute top-0 right-0 md:-right-8 w-40 h-40 bg-[#F2EBE3] rounded-full opacity-60 z-0"></div>
                        <div className="absolute -bottom-8 -left-4 w-32 h-32 bg-[#D9BDB2]/10 rounded-full z-0"></div>
                    </div>

                    {/* COLUMNA 2: TEXTO EDITORIAL */}
                    <div className="space-y-10 md:space-y-12 order-1 md:order-2 text-center md:text-left">
                        {/* Título de Sección */}
                        <div className="space-y-4">
                            <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif text-stone-800 leading-tight tracking-tighter">
                                Nuestra Historia
                            </h2>
                            <div className="w-16 h-[1px] bg-stone-300 mx-auto md:mx-0 mt-6"></div>
                        </div>

                        {/* Texto Descriptivo (Con tipografía fluida) */}
                        <div className="space-y-6 text-stone-600 font-light leading-relaxed text-base md:text-lg max-w-xl mx-auto md:mx-0">
                            <p>
                                Polar nace de la búsqueda de belleza en lo simple.
                                De la idea de que un arreglo floral no solo decora, sino que transmite emociones, momentos y esencia.
                                Creemos en la elegancia natural, en los tonos suaves, en las composiciones limpias y en los detalles que hablan sin necesidad de exceso.

                            </p>
                            <p>
                                Cada ramo es diseñado con intención, cuidando la armonía entre flores, texturas y colores.
                                Aquí, las flores se transforman en piezas únicas.
                                No seguimos tendencias, creamos experiencias.
                                Polar es más que flores, es una forma de sentir, de regalar y de expresar.

                            </p>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}

export default HistoriaNosotros;
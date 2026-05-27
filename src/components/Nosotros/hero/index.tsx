import React from "react";
import Image from 'next/image';
import FondoFlores from "@/assets/Hero-Nosotros.png";

function HeroNosotros() {
    return (
        <section className="relative w-full h-[60vh] md:h-[70vh] lg:h-[85vh] flex items-center justify-center overflow-hidden bg-stone-900">

            {/* IMAGEN DE FONDO */}
            <div className="absolute inset-0 z-0">
                <Image
                    src={FondoFlores}
                    alt="Fondo Polar"
                    fill
                    priority
                    className="object-cover object-center"
                />
                <div className="absolute inset-0 bg-black/40 z-10"></div>
            </div>

            {/* CONTENIDO TEXTUAL */}
            <div className="relative z-20 max-w-7xl mx-auto px-6 text-center">

                {/* Texto Superior (Pequeño y elegante) */}
                <p className="text-xs md:text-sm lg:text-base uppercase tracking-[0.4em] text-white/80 font-light mb-4 md:mb-6 animate-in fade-in slide-in-from-bottom-4 duration-1000">
                    Nuestra esencia.
                </p>

                {/* Título Principal (Grande como en la imagen) */}
                <h1 className="text-4xl md:text-7xl lg:text-[100px] font-serif text-white leading-[1.1] tracking-tight mb-6 md:mb-8 animate-in fade-in slide-in-from-bottom-6 duration-1000 delay-75">
                    Flores que cuentan historias
                </h1>

                {/* Subtítulo Inferior */}
                <p className="text-base md:text-xl lg:text-2xl text-stone-200 font-light tracking-wide max-w-2xl mx-auto opacity-90 animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-150">
                    Donde la intención se transforma en emoción.
                </p>

                {/* Línea Decorativa */}
                <div className="mt-10 md:mt-14 flex justify-center animate-in fade-in duration-1000 delay-300">
                    <div className="w-12 md:w-20 h-[1px] bg-white/30"></div>
                </div>
            </div>

        </section>
    );
}

export default HeroNosotros;
import React from "react";
import Image from 'next/image';
// Asegúrate de tener una imagen representativa para esta categoría
import ImagenRamos from "@/assets/Hero-Flores.png";

function HeroRamos() {
    return (
        <section className="bg-[#FDFBF7] min-h-[60vh] md:min-h-[70vh] flex flex-col md:flex-row items-center overflow-hidden">

            {/* COLUMNA DE TEXTO: Izquierda en PC, Abajo en Móvil */}
            <div className="w-full md:w-1/2 px-8 py-16 md:p-20 lg:p-32 flex flex-col justify-center space-y-6 order-2 md:order-1">
                <div className="space-y-2 animate-in fade-in slide-in-from-left-8 duration-1000">
                    <span className="text-[10px] md:text-xs uppercase tracking-[0.5em] text-stone-400 font-medium">
                        Nuestra.
                    </span>
                    <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif text-stone-800 leading-tight tracking-tighter">
                        Colección <br /> <span className="italic text-[#D9BDB2]">Floral</span>
                    </h1>
                </div>

                <div className="w-12 h-[1px] bg-stone-300 animate-in fade-in duration-1000 delay-300"></div>

                <p className="text-stone-500 font-light text-base md:text-lg lg:text-xl max-w-md leading-relaxed animate-in fade-in slide-in-from-left-10 duration-1000 delay-200">
                    Te mostramos una selección de ramos diseñados para acompañar tus momentos más importantes; cada pieza está pensada para transmitir emoción a través de la forma, color y textura.
                </p>

                {/* Detalle decorativo sutil */}
                <div className="pt-4 flex items-center gap-4 text-stone-400 animate-in fade-in duration-1000 delay-500">
                    <span className="text-[10px] uppercase tracking-widest italic">Curaduría Polar.</span>
                    <div className="flex-1 h-[1px] bg-stone-100"></div>
                </div>
            </div>

            {/* COLUMNA DE IMAGEN: Derecha en PC, Arriba en Móvil */}
            <div className="w-full md:w-1/2 h-[400px] md:h-screen relative order-1 md:order-2">
                <Image
                    src={ImagenRamos}
                    alt="Colección de Ramos Polar"
                    fill
                    priority
                    className="object-cover object-center"
                />
                {/* Overlay sutil para integrar la imagen con el fondo crema */}
                <div className="absolute inset-0 bg-stone-900/5 md:hidden"></div>
            </div>

        </section>
    );
}

export default HeroRamos;
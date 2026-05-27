import React from "react";
import Image from 'next/image';
import Experiencia from "@/assets/Experiencia-Nosotros.png";

function ExperienciaNosotros() {
    return (
        <section className="bg-[#FDFBF7] py-16 md:py-24 lg:py-32 px-6 lg:px-12 overflow-hidden">
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

                    {/* COLUMNA IZQUIERDA: TEXTO */}
                    <div className="space-y-6 md:space-y-8 order-2 lg:order-1">
                        <div className="space-y-4">
                            <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif text-stone-800 leading-tight tracking-tight">
                                Más que flores, una experiencia
                            </h2>
                            <div className="w-16 h-[1px] bg-[#D9BDB2]"></div>
                        </div>

                        <p className="text-stone-600 font-light text-base md:text-lg lg:text-xl leading-relaxed max-w-xl">
                            Cuidamos cada detalle para que cada ramo se convierta en una experiencia única, desde la selección hasta el resultado final.
                        </p>
                    </div>

                    {/* COLUMNA DERECHA: IMAGEN (Como en la captura) */}
                    <div className="order-1 lg:order-2">
                        <div className="relative aspect-[4/5] md:aspect-square lg:aspect-[4/3] w-full rounded-2xl overflow-hidden shadow-sm">
                            <Image
                                src={Experiencia}
                                alt="Experiencia Polar"
                                fill
                                className="object-cover"
                            />
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}

export default ExperienciaNosotros;
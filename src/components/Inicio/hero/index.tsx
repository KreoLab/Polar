import React from "react";
import Image from 'next/image';
import LogoPc from "@/assets/inicio-Polar-Pc.png";
import LogoCelular from "@/assets/inicio-Polar-Celular.png";

function Hero() {
    return (
        <section className="relative w-full h-[80vh] md:h-[90vh] overflow-hidden bg-[#FDFBF7]">
            {/* CONTENEDOR DE IMAGEN PARA PC */}
            <div className="hidden md:block relative w-full h-full">
                <Image
                    src={LogoPc}
                    alt="Polar Atelier Presentación"
                    fill
                    className="object-cover object-center"
                    priority
                />
            </div>

            {/* CONTENEDOR DE IMAGEN PARA CELULAR */}
            <div className="block md:hidden relative w-full h-full">
                <Image
                    src={LogoCelular}
                    alt="Polar Atelier Presentación Móvil"
                    fill
                    className="object-cover object-center"
                    priority
                />
            </div>

            {/* OVERLAY DE TEXTO (OPCIONAL) */}
            {/* Si quieres que el texto sea editable y no parte de la imagen,
                puedes descomentar este bloque */}
            {/* <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
                <h1 className="text-4xl md:text-6xl font-serif text-stone-800 tracking-tighter">
                    Arte Floral & Diseño
                </h1>
                <p className="mt-4 text-stone-600 font-light tracking-widest uppercase text-xs md:text-sm">
                    Elegancia en cada detalle
                </p>
            </div>
            */}
        </section>
    );
}

export default Hero;
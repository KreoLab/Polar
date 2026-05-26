import React from "react";
import { Sparkles, Flower2, Leaf } from "lucide-react";

function FilosofiaNosotros() {
    const pilares = [
        {
            titulo: "Detalle",
            descripcion: "Creemos que lo mas pequeño es lo mas importante, colocando cada elemento con precision para aportar equilibrio y sofisticacion",
            icono: <Sparkles size={32} strokeWidth={1} className="text-[#D9BDB2]" />
        },
        {
            titulo: "Expresion",
            descripcion: "Nuestros arreglos comunican sin palabras conectando con quien las recibe",
            icono: <Flower2 size={32} strokeWidth={1} className="text-[#D9BDB2]" />
        },
        {
            titulo: "Frescura",
            descripcion: "Trabajamos con flores seleccionadas para prolongar la vida y esencia de cada diseño.",
            icono: <Leaf size={32} strokeWidth={1} className="text-[#D9BDB2]" />
        }
    ];

    return (
        <section className="bg-[#FDFBF7] py-20 md:py-32 px-6 lg:px-12">
            <div className="max-w-7xl mx-auto">

                {/* CABECERA DE SECCIÓN */}
                <div className="text-center mb-16 md:mb-24 space-y-4">
                    <p className="text-xs uppercase tracking-[0.5em] text-stone-400 font-light">Nuestra Filosofía</p>
                    <h2 className="text-4xl md:text-6xl font-serif text-stone-800 tracking-tight italic">
                        Intencion
                    </h2>
                    <div className="w-12 h-[1px] bg-stone-300 mx-auto mt-6"></div>
                </div>

                {/* GRID DE PILARES */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 lg:gap-16">
                    {pilares.map((pilar, index) => (
                        <div
                            key={index}
                            className="group flex flex-col items-center text-center space-y-6 p-8 rounded-sm hover:bg-[#EAE2CE] hover:shadow-xl hover:shadow-stone-200/50 transition-all duration-500"
                        >
                            {/* Icono envuelto en un círculo sutil */}
                            <div className="w-20 h-20 flex items-center justify-center bg-[#F2EBE3] rounded-full group-hover:bg-[#D9BDB2]/10 transition-colors duration-500">
                                {pilar.icono}
                            </div>

                            {/* Título e Información */}
                            <div className="space-y-3">
                                <h3 className="text-2xl font-serif text-stone-800">
                                    {pilar.titulo}
                                </h3>
                                <p className="text-stone-500 font-light leading-relaxed text-sm md:text-base max-w-xs mx-auto">
                                    {pilar.descripcion}
                                </p>
                            </div>

                            {/* Detalle decorativo inferior */}
                            <div className="w-0 h-[1px] bg-[#D9BDB2] group-hover:w-8 transition-all duration-500"></div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default FilosofiaNosotros;
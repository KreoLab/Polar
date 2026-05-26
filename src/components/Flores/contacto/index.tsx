import React from "react";
import { CalendarDays } from "lucide-react";


function Contacto() {
    return (
        <section className="bg-white py-20 md:py-32 px-6">
            <div className="max-w-4xl mx-auto text-center space-y-8 md:space-y-10">

                {/* TÍTULO */}
                <div className="space-y-4">
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif text-stone-800 leading-tight tracking-tight">
                        Da vida a tus ideas
                    </h2>

                    {/* SUBTÍTULO */}
                    <p className="text-stone-500 font-light text-base md:text-lg lg:text-xl tracking-wide max-w-2xl mx-auto">
                        Cuentanos tu idea y le damos vida Nombre del boton: contactanos
                    </p>
                </div>

                {/* BOTÓN CTA */}
                <div className="flex justify-center pt-4">
                    <button className="group relative flex items-center gap-3 bg-[#D9BDB2] hover:bg-[#CCADA1] text-stone-700 px-8 py-4 md:px-10 md:py-5 rounded-sm transition-all duration-300 shadow-sm hover:shadow-md">
                        <span className="uppercase tracking-[0.2em] text-xs md:text-sm font-bold">
                            Agendar Cotización
                        </span>
                        <CalendarDays size={18} className="text-stone-600 transition-transform group-hover:scale-110" />
                    </button>
                </div>

            </div>
        </section>
    );
}

export default Contacto;
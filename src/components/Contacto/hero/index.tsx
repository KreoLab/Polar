import React from "react";

function HeroContacto() {
    return (
        <section className="bg-[#FDFBF7] pt-32 pb-20 md:pt-44 md:pb-28 px-6 text-center">
            <div className="max-w-4xl mx-auto space-y-6">

                {/* Etiqueta superior sutil */}
                <span className="text-[10px] md:text-xs uppercase tracking-[0.5em] text-stone-400 font-medium animate-in fade-in duration-1000">
                    Contacto
                </span>

                {/* Título Principal - Grande y elegante */}
                <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif text-stone-800 leading-tight tracking-tighter animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-75">
                    POLAR
                </h1>

                {/* Línea decorativa minimalista */}
                <div className="flex justify-center py-4 animate-in fade-in duration-1000 delay-300">
                    <div className="w-12 h-[1px] bg-[#D9BDB2]"></div>
                </div>

                {/* Descripción corta para "llenar" el espacio */}
                <p className="text-stone-500 font-light text-base md:text-lg lg:text-xl max-w-xl mx-auto leading-relaxed animate-in fade-in slide-in-from-bottom-10 duration-1000 delay-200">
                    Creamos experiencias que acompañan momentos importantes y los vuelven inolvidables.
                </p>

            </div>
        </section>
    );
}

export default HeroContacto;
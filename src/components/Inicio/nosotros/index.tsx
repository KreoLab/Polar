import React from "react";
import Image from 'next/image';
import ImgFlores from "@/assets/Hero-Inicio.png";

function InicioNosotros() {
    return (
        <section className="bg-[#faf5f1] py-16 md:py-24 lg:py-32 overflow-hidden">
            <div className="max-w-7xl mx-auto px-6 lg:px-12">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

                    {/* COLUMNA IZQUIERDA: TEXTO */}
                    <div className="order-2 lg:order-1 space-y-8">
                        <div className="space-y-4">
                            <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif text-stone-800 leading-tight">
                                La magia del detalle
                            </h2>
                            <div className="w-12 h-[1px] bg-stone-400"></div>
                        </div>

                        <div className="space-y-6 text-stone-600 font-light leading-relaxed text-base md:text-lg max-w-xl">
                            <p>
                                Creamos arreglos florales que transforman momentos en emociones. Cada diseño nace de la intención de conectar, de decir lo que a veces las palabras no alcanzan: amor, gratitud, admiración o cariño.
                                Seleccionamos cuidadosamente cada flor, cada textura y cada color para lograr composiciones que transmiten armonía, elegancia y sensibilidad.
                            </p>
                            <p>
                                No solo elaboramos ramos, creamos experiencias que acompañan momentos importantes y los vuelven inolvidables.
                                Porque creemos que en los pequeños detalles vive la magia, y en cada uno de ellos hay una historia lista para ser compartida.
                            </p>
                        </div>

                        <button className="group flex items-center gap-4 text-stone-400 hover:text-stone-800 transition-colors duration-300">
                            <span className="w-8 h-[1px] bg-stone-300 group-hover:w-12 group-hover:bg-stone-800 transition-all"></span>
                            <span className="uppercase tracking-[0.2em] text-xs font-bold">Crea con nosotros.</span>
                        </button>
                    </div>

                    {/* COLUMNA DERECHA: IMAGEN CON CARD FLOTANTE */}
                    <div className="order-1 lg:order-2 relative">
                        {/* Contenedor de Imagen Principal */}
                        <div className="relative aspect-[4/5] md:aspect-square lg:aspect-[4/5] w-full rounded-sm overflow-hidden shadow-2xl">
                            <Image
                                src={ImgFlores}
                                alt="Composición floral artística"
                                fill
                                className="object-cover"
                            />
                        </div>

                        {/* Card Flotante (Curaduría Orgánica) */}
                        <div className="absolute -bottom-6 -left-4 md:-bottom-10 md:left-10 bg-[#FDFBF7] p-6 md:p-8 shadow-xl max-w-[240px] md:max-w-[300px] border border-stone-100 animate-in fade-in slide-in-from-bottom-4 duration-1000">
                            <h3 className="font-serif text-xl md:text-2xl text-stone-800 mb-3 italic">
                                Curaduría Orgánica
                            </h3>
                            <p className="text-[10px] md:text-xs leading-relaxed text-stone-500 uppercase tracking-widest font-medium">
                                Flores de temporada recolectadas al alba para garantizar la máxima frescura y vitalidad.
                            </p>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}

export default InicioNosotros;
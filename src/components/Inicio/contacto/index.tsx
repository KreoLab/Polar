'use client'
import React, { useState } from "react";
import { MapPin, Mail } from "lucide-react";
import { FaPhone } from "react-icons/fa6";


function InicioContacto() {
    const [servicioSeleccionado, setServicioSeleccionado] = useState("");

    const opcionesServicio = [
        "Flores",
        "Arreglos",
        "Orquídeas",
        "Eventos"
    ];

    return (
        <section className="bg-[#FDFBF7] py-16 md:py-24 px-6">
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">

                    {/* INFORMACIÓN DE CONTACTO */}
                    <div className="space-y-8 self-center">
                        <div className="space-y-4">
                            <h2 className="text-4xl md:text-5xl font-serif text-stone-800 tracking-tight">
                                Hablemos de tu proxima historia
                            </h2>
                            <p className="text-stone-500 font-light text-base md:text-lg max-w-md leading-relaxed">
                                Completa el formulario y daremos vida a tu idea.
                            </p>
                        </div>

                        <div className="space-y-5 pt-6 border-t border-stone-100">
                            <div className="flex items-center gap-4">
                                <FaPhone size={20} className="text-[#D9BDB2]" />
                                <p className="text-stone-500 text-sm font-light">55 4901 2124</p>
                            </div>
                            <div className="flex items-center gap-4">
                                <Mail size={20} className="text-[#D9BDB2]" />
                                <p className="text-stone-500 text-sm font-light">polarflowershop@gmail.com</p>
                            </div>
                        </div>
                    </div>

                    {/* FORMULARIO */}
                    <div className="bg-white p-6 md:p-10 rounded-xl shadow-sm border border-stone-100">
                        <form action="https://formsubmit.co/polarflowershop@gmail.com" method="POST" className="space-y-6">

                            <input type="text" name="_honey" className="hidden" />

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="space-y-1">
                                    <label className="text-[10px] uppercase tracking-widest text-stone-400 font-bold">Nombre</label>
                                    <input type="text" name="name" required className="w-full bg-transparent border-b border-stone-200 py-2 focus:border-stone-800 outline-none transition-colors text-stone-700 font-light" />
                                </div>
                                <div className="space-y-1">
                                    <label className="text-[10px] uppercase tracking-widest text-stone-400 font-bold">Email</label>
                                    <input type="email" name="email" required className="w-full bg-transparent border-b border-stone-200 py-2 focus:border-stone-800 outline-none transition-colors text-stone-700 font-light" />
                                </div>
                            </div>

                            {/* SECCIÓN DE BOTONES MÁS PEQUEÑOS Y JUNTOS */}
                            <div className="space-y-4">
                                <label className="text-[10px] uppercase tracking-widest text-stone-400 font-bold">¿En qué servicio está interesado?</label>

                                <div className="flex flex-wrap gap-2 md:gap-3">
                                    {opcionesServicio.map((opcion) => (
                                        <label
                                            key={opcion}
                                            className={`
                                                cursor-pointer flex items-center gap-2 px-4 py-2 border rounded-full transition-all duration-200 select-none
                                                ${servicioSeleccionado === opcion
                                                ? "bg-stone-900 border-stone-900 text-white shadow-sm"
                                                : "bg-white border-stone-200 text-stone-500 hover:border-stone-400 hover:text-stone-800"
                                            }
                                            `}
                                        >
                                            <input
                                                type="radio"
                                                name="interes"
                                                value={opcion}
                                                checked={servicioSeleccionado === opcion}
                                                onChange={() => setServicioSeleccionado(opcion)}
                                                className="sr-only"
                                            />
                                            {/* Círculo más pequeño */}
                                            <div className={`w-3 h-3 rounded-full border transition-colors ${
                                                servicioSeleccionado === opcion ? "border-white bg-white" : "border-stone-300"
                                            }`}></div>

                                            <span className="text-[13px] font-medium tracking-wide">
                                                {opcion}
                                            </span>
                                        </label>
                                    ))}
                                </div>
                            </div>

                            <div className="space-y-1">
                                <label className="text-[10px] uppercase tracking-widest text-stone-400 font-bold">Mensaje</label>
                                <textarea name="message" rows={3} className="w-full bg-stone-50 border border-stone-100 p-3 focus:border-stone-300 focus:bg-white outline-none transition-all text-stone-700 font-light resize-none rounded-md text-sm"></textarea>
                            </div>

                            <button type="submit" className="w-full bg-stone-900 text-white py-4 uppercase tracking-[0.2em] text-[11px] font-bold hover:bg-stone-800 transition-all rounded-lg shadow-md active:scale-[0.98]">
                                Enviar Cotización
                            </button>
                        </form>
                    </div>

                </div>
            </div>
        </section>
    );
}

export default InicioContacto;
"use client";

import React, { useState } from "react";
import { MapPin, Phone, Mail, Instagram, Facebook, MessageCircle } from "lucide-react";

function FormularioContacto() {
    const [servicioSeleccionado, setServicioSeleccionado] = useState("");
    const opciones = ["Flores", "Arreglos", "Orquideas", "Eventos"];

    return (
        <section className="bg-[#FDFBF7] py-16 md:py-24 lg:py-32 px-6 lg:px-12">
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">

                    {/* COLUMNA IZQUIERDA: INFORMACIÓN DE CONTACTO */}
                    <div className="space-y-12 md:pt-10">
                        <div className="space-y-4 text-center md:text-left">
                            <h2 className="text-4xl md:text-5xl font-serif text-stone-800 tracking-tight">
                                Contáctanos
                            </h2>
                            <p className="text-stone-500 font-light text-base md:text-lg max-w-md mx-auto md:mx-0">
                                ¿Tienes una idea específica o un evento especial? Estamos listos para escucharte.
                            </p>
                        </div>

                        {/* BLOQUES DE DATOS */}
                        <div className="space-y-8">
                            <div className="flex flex-col md:flex-row items-center md:items-start gap-4 text-center md:text-left">
                                <div className="p-3 bg-white rounded-full shadow-sm">
                                    <Phone size={22} className="text-[#D9BDB2]" />
                                </div>
                                <div>
                                    <h4 className="font-serif text-xl text-stone-800">Teléfono</h4>
                                    <p className="text-stone-500 font-light">+52 55 4901 2124</p>
                                </div>
                            </div>

                            <div className="flex flex-col md:flex-row items-center md:items-start gap-4 text-center md:text-left">
                                <div className="p-3 bg-white rounded-full shadow-sm">
                                    <Mail size={22} className="text-[#D9BDB2]" />
                                </div>
                                <div>
                                    <h4 className="font-serif text-xl text-stone-800">Email</h4>
                                    <p className="text-stone-500 font-light">polarflowershop@gmail.com</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* COLUMNA DERECHA: FORMULARIO */}
                    <div className="bg-white p-8 md:p-12 rounded-3xl shadow-[0_20px_50px_rgba(0,0,0,0.04)] border border-stone-100">
                        <form action="https://formsubmit.co/polarflowershop@gmail.com" method="POST" className="space-y-8">

                            {/* FormSubmit Config */}
                            <input type="text" name="_honey" className="hidden" />
                            <input type="hidden" name="_captcha" value="false" />
                            <input type="hidden" name="_subject" value={`Polar: Nueva consulta de ${servicioSeleccionado}`} />

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                <div className="flex flex-col gap-2">
                                    <label className="text-[10px] uppercase tracking-[0.2em] text-stone-400 font-bold ml-1">Nombre</label>
                                    <input type="text" name="Nombre" required className="bg-transparent border-b border-stone-200 py-2 focus:border-stone-800 outline-none transition-colors text-stone-700 font-light" />
                                </div>
                                <div className="flex flex-col gap-2">
                                    <label className="text-[10px] uppercase tracking-[0.2em] text-stone-400 font-bold ml-1">Email</label>
                                    <input type="email" name="Email" required className="bg-transparent border-b border-stone-200 py-2 focus:border-stone-800 outline-none transition-colors text-stone-700 font-light" />
                                </div>
                            </div>

                            <div className="space-y-4">
                                <label className="text-[10px] uppercase tracking-[0.2em] text-stone-400 font-bold ml-1">¿Qué necesitas?</label>
                                <div className="flex flex-wrap gap-2 md:gap-3">
                                    {opciones.map((opcion) => (
                                        <label key={opcion} className={`cursor-pointer flex items-center gap-2 px-4 py-2 border rounded-full transition-all duration-300 ${servicioSeleccionado === opcion ? "bg-stone-900 border-stone-900 text-white" : "bg-white border-stone-200 text-stone-500 hover:border-stone-400"}`}>
                                            <input type="radio" name="Servicio" value={opcion} required checked={servicioSeleccionado === opcion} onChange={() => setServicioSeleccionado(opcion)} className="sr-only" />
                                            <div className={`w-2.5 h-2.5 rounded-full border transition-colors ${servicioSeleccionado === opcion ? "border-white bg-white" : "border-stone-300"}`}></div>
                                            <span className="text-[13px] font-medium tracking-wide">{opcion}</span>
                                        </label>
                                    ))}
                                </div>
                            </div>

                            <div className="flex flex-col gap-2">
                                <label className="text-[10px] uppercase tracking-[0.2em] text-stone-400 font-bold ml-1">Mensaje</label>
                                <textarea name="Mensaje" rows={4} className="bg-stone-50 border border-stone-100 rounded-xl p-4 focus:border-stone-300 focus:bg-white outline-none transition-all text-stone-700 font-light text-sm resize-none"></textarea>
                            </div>

                            <button type="submit" className="w-full bg-stone-950 text-white py-5 uppercase tracking-[0.3em] text-[11px] font-bold hover:bg-stone-800 transition-all rounded-full shadow-lg active:scale-95">
                                Enviar Mensaje
                            </button>
                        </form>
                    </div>

                </div>
            </div>
        </section>
    );
}

export default FormularioContacto;
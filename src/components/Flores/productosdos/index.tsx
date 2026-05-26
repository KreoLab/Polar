"use client";

import React, { useState } from "react";
import Image from 'next/image';
import { MessageCircle } from "lucide-react";

function ProductosRamosDos() {
    const telefono = "525512345678"; // Reemplaza con tu número real

    const productos = [
        {
            id: 1,
            nombre: "Ramo Aurora",
            precio: "$1,200",
            categoria: "Colección Primavera",
            imagen: "https://images.unsplash.com/photo-1526047932273-341f2a7631f9?q=80&w=800&auto=format&fit=crop",
        },
        {
            id: 2,
            nombre: "Elegancia Blanca",
            precio: "$950",
            categoria: "Clásicos",
            imagen: "https://images.unsplash.com/photo-1582794543139-8ac9cb0f7b11?q=80&w=800&auto=format&fit=crop",
        },
        {
            id: 3,
            nombre: "Silvestre Intenso",
            precio: "$1,450",
            categoria: "Edición Limitada",
            imagen: "https://images.unsplash.com/photo-1561181286-d3fea73e413f?q=80&w=800&auto=format&fit=crop",
        },
    ];

    const [servicioSeleccionado, setServicioSeleccionado] = useState("");

    return (
        <section className="bg-white py-16 md:py-24 px-6 lg:px-12">
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-20">
                    {productos.map((producto) => {
                        const mensaje = encodeURIComponent(`Hola Polar Atelier, me interesa el ${producto.nombre} con precio de ${producto.precio}.`);
                        const linkWhats = `https://wa.me/${telefono}?text=${mensaje}`;

                        return (
                            <div key={producto.id} className="group flex flex-col">
                                {/* CONTENEDOR DE IMAGEN */}
                                <div className="relative aspect-[3/4] overflow-hidden rounded-2xl bg-stone-100 mb-6 shadow-sm group-hover:shadow-2xl transition-all duration-700">
                                    <Image
                                        src={producto.imagen}
                                        alt={producto.nombre}
                                        fill
                                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                        className="object-cover transition-transform duration-1000 group-hover:scale-105"
                                    />
                                </div>

                                {/* INFORMACIÓN */}
                                <div className="space-y-4 flex-1 flex flex-col">
                                    <div className="space-y-1">
                                        <p className="text-[10px] uppercase tracking-[0.2em] text-stone-400 font-bold">{producto.categoria}</p>
                                        <div className="flex justify-between items-baseline">
                                            <h3 className="text-2xl font-serif text-stone-800">{producto.nombre}</h3>
                                            <span className="text-stone-600 font-light italic">{producto.precio}</span>
                                        </div>
                                    </div>

                                    {/* BOTÓN DE WHATSAPP */}
                                    <a
                                        href={linkWhats}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="mt-auto flex items-center justify-center gap-3 w-full bg-[#FDFBF7] border border-stone-200 py-4 rounded-full text-stone-700 hover:bg-stone-900 hover:text-white hover:border-stone-900 transition-all duration-300 shadow-sm"
                                    >
                                        <MessageCircle size={18} strokeWidth={1.5} />
                                        <span className="text-xs uppercase tracking-[0.2em] font-bold">Cotizar por WhatsApp</span>
                                    </a>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}

export default ProductosRamosDos;
"use client";
import React, { useState } from "react";
import Image from 'next/image';
import Flores1 from "@/assets/productos/Arreglo-Mixto-ceramica.png";
import Flores2 from "@/assets/productos/Caja-floral.png";
import Flores3 from "@/assets/productos/I-Hortensias.png";
import Flores4 from "@/assets/productos/I-Lirios.png";
import Flores5 from "@/assets/productos/I-Peonias.png";
import Flores6 from "@/assets/productos/I-Ranunculos.png";
import Flores7 from "@/assets/productos/I-Rosas.png";
import Flores8 from "@/assets/productos/II-Hortensias.png";
import Flores9 from "@/assets/productos/II-Lirios.png";
import Flores10 from "@/assets/productos/II-Ranunculos.png";
import Flores11 from "@/assets/productos/II-Rosas.png";
import Flores12 from "@/assets/productos/IV-Rosas.png";
import Flores13 from "@/assets/productos/Mixed-bouquets.png";
import Flores14 from "@/assets/productos/Orquideas.png";
import { MessageCircle } from "lucide-react";

function ProductosRamosUno() {
    const telefono = "525549012124"; // Reemplaza con tu número real de WhatsApp

    const productos = [
        {
            id: 1,
            nombre: "I Rosas",
            descripcion: "Un ramo de 50 rosas frescas, diseñado para transmitir elegancia y sencillez en cada detalle. Ideal para un gesto sutil pero significativo.",
            precio: "$720",
            categoria: "Rosas",
            whats: "Hola, me interesa el arreglo I — Rosas.",
            imagen: Flores7,
        },
        {
            id: 2,
            nombre: "II Rosas",
            descripcion: "Un diseño con mayor presencia, combinando rosa y lirio pensado para momentos especiales donde quieres que el detalle destaque con elegancia.",
            precio: "$820",
            categoria: "Rosas",
            whats: "Hola, me interesa el arreglo III — Rosas.",
            imagen: Flores11,
        },
        {
            id: 3,
            nombre: "IV Rosas",
            descripcion: "Nuestra versión más especial con 100 rosas, un diseño más elaborado y un acabado premium que eleva cualquier ocasión.",
            precio: "$1,750",
            categoria: "Rosas",
            whats: "Hola, me interesa el arreglo IV — Rosas.",
            imagen: Flores12,
        },
        {
            id: 4,
            nombre: "I Ranunculos",
            descripcion: "Una de las flores más especiales",
            precio: "$650",
            categoria: "Ranúnculos",
            whats: "Hola, me interesa el arreglo I — Ranúnculos.",
            imagen: Flores6,
        },
        {
            id: 5,
            nombre: "II Ranunculos",
            descripcion: "Ranúnculos y gerberas en una combinación fresca y armoniosa.",
            precio: "$950",
            categoria: "Ranúnculos",
            whats: "Hola, me interesa el arreglo II — Ranúnculos.",
            imagen: Flores10,
        },
        {
            id: 6,
            nombre: "I Lirios",
            descripcion: "Lirios en composición fresca.",
            precio: "$550",
            categoria: "Lirios",
            whats: "Hola, me interesa el arreglo I — Lirios.",
            imagen: Flores4,
        },
        {
            id: 7,
            nombre: "II Lirios",
            descripcion: "Un clasico de rosas y lirios en jarron",
            precio: "Desde $950",
            categoria: "Lirios",
            whats: "Hola, me interesa el arreglo II — Lirios.",
            imagen: Flores9,
        },
        {
            id: 8,
            nombre: "I Hortensias",
            descripcion: "Hortensias premium.",
            precio: "$850",
            categoria: "Hortensias",
            whats: "Hola, me interesa el arreglo I — Hortensias.",
            imagen: Flores3,
        },
        {
            id: 9,
            nombre: "II Hortensias",
            descripcion: "Versión más completa y especial.",
            precio: "$1,700",
            categoria: "Hortensias",
            whats: "Hola, me interesa el arreglo II — Hortensias.",
            imagen: Flores8,
        },
        {
            id: 10,
            nombre: "I Peonias",
            descripcion: "La reina de las flores.",
            precio: "$750 por pieza",
            categoria: "Peonías",
            whats: "Hola, me interesan las peonias.",
            imagen: Flores5,
        },
        {
            id: 11,
            nombre: "Mixed bouquets",
            descripcion: "Con flores frescas seleccionadas especialmente para ti",
            precio: "Desde $450",
            categoria: "Mixed",
            whats: "Hola, me interesa un Mixed Bouquet",
            imagen: Flores13,
        },
        {
            id: 12,
            nombre: "Orquideas",
            descripcion: "Hermosas y clasicas en maceta de ceramica",
            precio: "Desde $650",
            categoria: "Orquídeas",
            whats: "Hola, me interesa una orquidea en ceramica",
            imagen: Flores14,
        },
        {
            id: 13,
            nombre: "Arreglo mixto en ceramica",
            descripcion: "Composicion floral mixta en una base de ceramica",
            precio: "Desde $950",
            categoria: "Cerámica",
            whats: "Hola, me interesa un arreglo en ceramica",
            imagen: Flores1,
        },
        {
            id: 14,
            nombre: "Caja floral",
            descripcion: "Cajas florales con distintas formas y composiciones diseñadas como el detalle perfecto.",
            precio: "Desde $750",
            categoria: "Cajas",
            whats: "Hola, me interesa una caja floral",
            imagen: Flores2,
        },
    ];

    const [servicioSeleccionado, setServicioSeleccionado] = useState("");

    return (
        <section className="bg-white py-16 md:py-24 px-6 lg:px-12">
            <div className="max-w-7xl mx-auto">
                <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
                    <div className="space-y-2">
                        <h2 className="text-4xl md:text-5xl font-serif text-stone-800 italic">Nuestra Colección</h2>
                        <p className="text-stone-500 font-light text-sm uppercase tracking-[0.3em]">Piezas únicas para momentos inolvidables</p>
                    </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-20">
                    {productos.map((producto) => {
                        // Se codifica de forma segura el mensaje exclusivo de cada arreglo floral
                        const mensaje = encodeURIComponent(producto.whats);
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
                                        priority={producto.id <= 3} // Optimización de carga para las primeras imágenes
                                    />
                                </div>

                                {/* INFORMACIÓN DE LA CARD */}
                                <div className="space-y-4 flex-1 flex flex-col">
                                    <div className="space-y-2">
                                        <p className="text-[10px] uppercase tracking-[0.2em] text-stone-400 font-bold">{producto.categoria}</p>
                                        <div className="flex justify-between items-baseline gap-2">
                                            <h3 className="text-2xl font-serif text-stone-800">{producto.nombre}</h3>
                                            <span className="text-stone-600 font-light italic whitespace-nowrap">{producto.precio}</span>
                                        </div>
                                        {/* Descripción agregada con un límite de líneas limpio en CSS */}
                                        <p className="text-stone-500 text-sm font-light line-clamp-3 leading-relaxed">
                                            {producto.descripcion}
                                        </p>
                                    </div>

                                    {/* BOTÓN DE DIRECTO A WHATSAPP */}
                                    <a
                                        href={linkWhats}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="mt-auto flex items-center justify-center gap-3 w-full bg-[#FDFBF7] border border-stone-200 py-4 rounded-full text-stone-700 hover:bg-stone-900 hover:text-white hover:border-stone-900 transition-all duration-300 shadow-sm"
                                    >
                                        <MessageCircle size={18} strokeWidth={1.5} />
                                        <span className="text-xs uppercase tracking-[0.2em] font-bold">Consultar</span>
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

export default ProductosRamosUno;
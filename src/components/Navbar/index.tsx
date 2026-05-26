"use client";

import React, { useState } from "react";
import Image from 'next/image';
import Link from 'next/link';
import { Menu, X } from "lucide-react"; // Quitamos iconos que ya no se usan
import Logo from '@/assets/Logo-Polar.png';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    // Arreglo simplificado: "Servicios" se reemplaza por el enlace directo a "Flores"
    const navLinks = [
        { name: "Inicio", href: "/" },
        { name: "Nosotros", href: "/nosotros" },
        { name: "Flores", href: "/flores" },
        { name: "Galería", href: "/galeria" },
        { name: "Contacto", href: "/contacto" },
    ];

    return (
        <nav className="w-full bg-[#FDFBF7]/90 backdrop-blur-md border-b border-stone-200 sticky top-0 z-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
                <div className="grid grid-cols-2 md:grid-cols-3 items-center h-28 lg:h-32">

                    {/* LOGO */}
                    <div className="flex justify-start">
                        <Link href="/" className="group transition-transform duration-300 hover:scale-105">
                            <Image
                                src={Logo}
                                alt="Polar Logo"
                                width={120}
                                height={120}
                                className="object-contain w-auto h-20 lg:h-24"
                                priority
                            />
                        </Link>
                    </div>

                    {/* DESKTOP MENU (Simplificado y directo) */}
                    <div className="hidden md:flex justify-center items-center space-x-10 lg:space-x-14">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                href={link.href}
                                className="text-stone-700 hover:text-stone-950 font-serif text-base lg:text-lg tracking-wide transition-colors py-2"
                            >
                                {link.name}
                            </Link>
                        ))}
                    </div>

                    {/* BOTÓN HAMBURGUESA (Móvil) */}
                    <div className="flex justify-end md:hidden">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="text-stone-800 p-2 focus:outline-none transition-transform active:scale-90"
                        >
                            {isOpen ? <X size={32} strokeWidth={1.5} /> : <Menu size={32} strokeWidth={1.5} />}
                        </button>
                    </div>

                </div>
            </div>

            {/* MENÚ MÓVIL (Limpio y sin acordeones) */}
            <div className={`md:hidden overflow-hidden transition-all duration-500 ease-in-out ${isOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0"}`}>
                <div className="px-8 py-12 space-y-10 bg-[#FDFBF7] h-screen overflow-y-auto">
                    {navLinks.map((link) => (
                        <div key={link.name} className="animate-in fade-in slide-in-from-left-4 duration-500">
                            <Link
                                href={link.href}
                                className="block text-3xl font-serif tracking-tight text-stone-800"
                                onClick={() => setIsOpen(false)}
                            >
                                {link.name}
                            </Link>
                        </div>
                    ))}

                    {/* Detalle visual inferior */}
                    <div className="pt-10 flex flex-col items-center gap-4 border-t border-stone-100 opacity-60">
                        <p className="text-xl uppercase tracking-[0.3em] text-stone-400">Polar</p>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
import React from "react";
import Link from 'next/link';
import { Instagram, Facebook, Mail, MapPin, Phone, MessageCircle } from "lucide-react";

function Footer() {
    return (
        <footer className="bg-[#dcd4c1] pt-20 pb-10 px-6 lg:px-12 border-t border-stone-200">
            <div className="max-w-7xl mx-auto">

                {/* GRID PRINCIPAL RESPONSIVO */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-20">

                    {/* 1. BRANDING (Texto en vez de Imagen) & FILOSOFÍA */}
                    <div className="space-y-6 flex flex-col items-center md:items-start text-center md:text-left">
                        <Link href="/">
                            {/* Reemplazo de imagen por texto estilizado */}
                            <span className="font-serif text-4xl text-stone-900 tracking-tight italic">
                                Polar
                            </span>
                        </Link>
                        <p className="text-stone-500 text-sm leading-relaxed font-light max-w-xs">
                            Elevando el arte floral a una experiencia sensorial única. En Polar Atelier, cada tallo cuenta una historia de elegancia y diseño.
                        </p>
                    </div>

                    {/* 2. SERVICIOS (Basado en tus imágenes) */}
                    <div className="flex flex-col items-center md:items-start text-center md:text-left">
                        <h4 className="text-[11px] uppercase tracking-[0.3em] text-stone-900 font-bold mb-8">Servicios</h4>
                        <ul className="space-y-4 text-stone-600 text-sm font-light">
                            <li className="hover:text-stone-900 cursor-pointer transition-colors flex items-center gap-2 justify-center md:justify-start">
                                <span className="w-1 h-1 bg-[#D9BDB2] rounded-full"></span> Ramos
                            </li>
                            <li className="hover:text-stone-900 cursor-pointer transition-colors flex items-center gap-2 justify-center md:justify-start">
                                <span className="w-1 h-1 bg-[#D9BDB2] rounded-full"></span> Arreglos
                            </li>
                            <li className="hover:text-stone-900 cursor-pointer transition-colors flex items-center gap-2 justify-center md:justify-start">
                                <span className="w-1 h-1 bg-[#D9BDB2] rounded-full"></span> Orquídeas
                            </li>
                            <li className="hover:text-stone-900 cursor-pointer transition-colors flex items-center gap-2 justify-center md:justify-start">
                                <span className="w-1 h-1 bg-[#D9BDB2] rounded-full"></span> Eventos
                            </li>
                        </ul>
                    </div>

                    {/* 3. EXPLORAR (Incluye Inicio) */}
                    <div className="flex flex-col items-center md:items-start text-center md:text-left">
                        <h4 className="text-[11px] uppercase tracking-[0.3em] text-stone-900 font-bold mb-8">Explorar</h4>
                        <ul className="space-y-4 text-stone-600 text-sm font-light">
                            {/* 'Inicio' añadido aquí como pediste */}
                            <li className="hover:text-stone-900 cursor-pointer transition-colors">Inicio</li>
                            <li className="hover:text-stone-900 cursor-pointer transition-colors">Nosotros</li>
                            <li className="hover:text-stone-900 cursor-pointer transition-colors">Galería</li>
                            <li className="hover:text-stone-900 cursor-pointer transition-colors">Contacto</li>
                        </ul>
                    </div>

                    {/* 4. ATELIER & CONTACTO */}
                    <div className="flex flex-col items-center md:items-start text-center md:text-left">
                        <h4 className="text-[11px] uppercase tracking-[0.3em] text-stone-900 font-bold mb-8">Contacto</h4>
                        <div className="space-y-5 text-stone-600 text-sm font-light">
                            <div className="flex items-center justify-center md:justify-start gap-3">
                                <Phone size={18} className="text-stone-900 shrink-0" />
                                <span>+52 55 4901 2124</span>
                            </div>
                            <div className="flex items-center justify-center md:justify-start gap-3">
                                <Mail size={18} className="text-stone-900 shrink-0" />
                                <span>polarflowershop@gmail.com</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* SECCIÓN INFERIOR: LEGAL */}
                <div className="pt-10 border-t border-stone-200 flex flex-col md:flex-row justify-between items-center gap-6 text-[10px] uppercase tracking-[0.2em] text-stone-400 font-medium">
                    <p>© 2026 POLAR ATELIER. Todos los derechos reservados.</p>
                    <div className="flex gap-8">
                        <a href="#" className="hover:text-stone-800 transition-colors">Privacidad</a>
                        <a href="#" className="hover:text-stone-800 transition-colors">Términos</a>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
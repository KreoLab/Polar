import React from "react";
import { Instagram, Facebook, MessageCircle, Music2 } from "lucide-react";

function ContactoRedesSociales() {
    const redes = [
        {
            nombre: "Instagram",
            usuario: "@polar_fs",
            icono: <Instagram size={40} strokeWidth={1} />,
            link: "https://www.instagram.com/polar_fs?igsh=MWNvZ2FxM25pMDc2bw%3D%3D&utm_source=qr",
            colorHover: "group-hover:text-[#E1306C]"
        },
        {
            nombre: "TikTok",
            usuario: "@polarfsp",
            icono: <Music2 size={40} strokeWidth={1} />, // Representa el contenido musical/creativo de TikTok
            link: "https://www.tiktok.com/@polarfsp?_r=1&_t=ZS-96XIWBuPijd",
            colorHover: "group-hover:text-[#000000]" // Negro elegante para TikTok
        },
        {
            nombre: "Facebook",
            usuario: "Polarfs",
            icono: <Facebook size={40} strokeWidth={1} />,
            link: "https://www.facebook.com/profile.php?id=61572338021551&mibextid=wwXIfr&rdid=CISFKlkj90KkA729&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F19ogZV8hhU%2F%3Fmibextid%3DwwXIfr#",
            colorHover: "group-hover:text-[#1877F2]"
        },
        {
            nombre: "WhatsApp",
            usuario: "+52 55 4901 2124",
            icono: <MessageCircle size={40} strokeWidth={1} />,
            link: "https://wa.link/23kxyx",
            colorHover: "group-hover:text-[#25D366]"
        }
    ];

    return (
        <section className="bg-[#FDFBF7] py-24 md:py-32 lg:py-40 px-6 lg:px-12 border-t border-stone-100">
            <div className="max-w-7xl mx-auto text-center">

                {/* CABECERA */}
                <div className="mb-16 md:mb-20 space-y-4">
                    <span className="text-[10px] md:text-xs uppercase tracking-[0.5em] text-stone-400 font-medium">
                        Conecta con Nosotros
                    </span>
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif text-stone-800 leading-tight tracking-tighter max-w-2xl mx-auto">
                        Acompáñanos en <span className="italic">nuestro universo</span> botánico
                    </h2>
                    <div className="w-16 h-[1px] bg-[#D9BDB2] mx-auto mt-8"></div>
                </div>

                {/* GRID DE REDES SOCIALES - Ajustado a 4 columnas en pantallas grandes */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
                    {redes.map((red, index) => (
                        <a
                            href={red.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            key={index}
                            className="group bg-white p-8 rounded-3xl border border-stone-100 shadow-sm hover:shadow-xl hover:shadow-stone-200/40 hover:-translate-y-2 transition-all duration-500"
                        >
                            <div className="flex flex-col items-center gap-6">
                                {/* Icono */}
                                <div className={`text-stone-400 ${red.colorHover} transition-colors duration-500`}>
                                    {red.icono}
                                </div>

                                {/* Información */}
                                <div className="space-y-2">
                                    <h4 className="text-[11px] uppercase tracking-[0.3em] text-stone-400 font-bold">
                                        {red.nombre}
                                    </h4>
                                    <p className="font-serif text-xl lg:text-xl text-stone-800 tracking-tight leading-tight">
                                        {red.usuario}
                                    </p>
                                </div>

                                {/* Botón de acción */}
                                <div className="pt-2">
                                    <span className="text-[10px] uppercase tracking-[0.2em] text-stone-500 border border-stone-200 px-6 py-2 rounded-full group-hover:border-stone-800 group-hover:text-stone-800 transition-all">
                                        {red.nombre === "WhatsApp" ? "Escribir" : "Seguir"}
                                    </span>
                                </div>
                            </div>
                        </a>
                    ))}
                </div>

            </div>
        </section>
    );
}

export default ContactoRedesSociales;
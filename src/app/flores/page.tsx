import React from "react";
import Navbar from "@/components/Navbar";
import HeroFlores from "@/components/Flores/hero";
import ProductosFloresUno from "@/components/Flores/productos";
import ProductosFloresDos from "@/components/Flores/productosdos";
import Habilidades from "@/components/Flores/habilidades";
import Contacto from "@/components/Flores/contacto";
import Footer from "@/components/Footer";

export default function Home() {
    return (

        <div>
            <Navbar />
                <HeroFlores />
                <ProductosFloresUno />
                <Habilidades />
                <Contacto />
            <Footer />
        </div>
    );
}

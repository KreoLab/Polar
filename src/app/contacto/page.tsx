import React from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Contacto/hero";
import FormularioContacto from "@/components/Contacto/formulario";
import Sociiales from "@/components/Contacto/sociales";
import Footer from "@/components/Footer";

export default function Home() {
    return (

        <div>
            <Navbar />
                <Hero />
                <FormularioContacto />
                <Sociiales />
            <Footer />
        </div>
    );
}

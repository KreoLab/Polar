import React from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Nosotros/hero";
import Historia from "@/components/Nosotros/historia";
import Filosofia from "@/components/Nosotros/filosofia";
import Experiencia from "@/components/Nosotros/experiencia";
import Cita from "@/components/Nosotros/cita";
import Footer from "@/components/Footer";

export default function Home() {
    return (

        <div>
            <Navbar />
                <Hero />
                <Historia />
                <Filosofia />
                <Experiencia />
                <Cita />
            <Footer />
        </div>
    );
}

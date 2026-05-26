import React from "react";
import Navbar from "@/components/Navbar";
import Galerias from "@/components/Galeria/hero";
import Footer from "@/components/Footer";

export default function Home() {
    return (

        <div>
            <Navbar />
                <Galerias />
            <Footer />
        </div>
    );
}

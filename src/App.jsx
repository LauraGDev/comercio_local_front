import Navbar from "./components/Navbar";
import PopularSections from "./components/PopularSections";
import { useRef } from "react";
import HeroSection from "./components/heroSection/HeroSection";
import Footer from "./components/Footer";
import FormSection from "./components/formSection/FormSection";

function App() {
    const sectionsRef = useRef({
        popular: null,
        form: null,
    });

    const handleScroll = (key) => {
        if (sectionsRef.current[key]) {
            sectionsRef.current[key].scrollIntoView({ behavior: "smooth" });
        }
    };

    return (
        <>
            <Navbar handleScroll={handleScroll} />
            <main className="bg-mediumBlue text-white font-sora">
                <HeroSection />
                <PopularSections
                    ref={(el) => (sectionsRef.current.popular = el)}
                />
                <FormSection ref={(el) => (sectionsRef.current.form = el)} />
            </main>
            <Footer />
        </>
    );
}

export default App;

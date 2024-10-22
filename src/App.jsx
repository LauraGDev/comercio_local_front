import Navbar from "./components/Navbar";
import PopularSections from "./components/PopularSections";
import { useRef } from "react";
import HeroSection from "./components/heroSection/HeroSection";
import Footer from "./components/Footer";
import ScrollButton from "./components/heroSection/ScrollButton";

function App() {
  const sectionsRef = useRef({
    popular: null,
    form: null,
    scrollButton: null,
  });

  const handleScroll = (key) => {

    if (sectionsRef.current[key]) {
      sectionsRef.current[key].scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <Navbar handleScroll={handleScroll} />
      <HeroSection />
        <ScrollButton 
        handleScroll={handleScroll} 
        target="popular"
        ref={(el) => (sectionsRef.current.popular = el)}></ScrollButton>
      <PopularSections ref={(el) => (sectionsRef.current.popular = el)} />
      <Footer />
    </>
  );
}

export default App;

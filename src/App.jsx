import Navbar from "./components/Navbar";
import PopularSections from "./components/PopularSections";
import { useRef } from "react";
import HeroSection from "./components/heroSection/HeroSection";
import Footer from "./components/Footer";

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
      <HeroSection />
      <PopularSections ref={(el) => (sectionsRef.current.popular = el)} />
      <Footer />
    </>
  );
}

export default App;

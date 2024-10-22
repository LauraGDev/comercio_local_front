
import Navbar from "./components/Navbar";
import PopularSections from "./components/PopularSections";
import { useRef } from "react";
import FormSection from "./components/formSection/FormSection";

function App() {
  // Define un objeto con las referencias
  const sectionsRef = useRef({
    android: null, // Asegúrate de que la clave coincida con la referencia.
    apple: null,
  });

  // Maneja el scroll hacia la sección correcta
  const handleScroll = (key) => {

    if (sectionsRef.current[key]) {
      sectionsRef.current[key].scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <Navbar  handleScroll={handleScroll} />
      <PopularSections />
      {/* Asegúrate de que la referencia se asigne correctamente */}
      <FormSection ref={(el) => (sectionsRef.current.android = el)} />

    </>
  );
}

export default App;

import PacienteForm from "./components/PacienteForm";
import PacientesList from "./components/PacientesList";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css"; // son los estilos de las animacioens de carga


function App() {
  return (
    <>
    <div className="container mx-auto mt-20">
      <h1 className="text-5xl font-bold underline text-center md:w-2/3 md:mx-auto">
        Seguimiento de Pacientes {""} <span className="text-indigo-700"> Veterinaria</span>
      </h1>
      <div className="mt-12 md:flex">
        <PacienteForm/>
        <PacientesList/>
      </div>
    </div>

    <ToastContainer/>
    
    </>
  );
}

export default App;

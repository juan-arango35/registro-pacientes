import PacienteForm from "./components/PacienteForm";
import PacientesList from "./components/PacientesList";


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
    
    </>
  );
}

export default App;

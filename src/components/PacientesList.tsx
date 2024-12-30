import { usePacienteStore } from "../store/store";
import DetallePaciente from "./DetallePaciente";


const PacientesList = () => {
  const pacientes = usePacienteStore((state) => state.pacientes);

  return (
    <div className="md:w-1/2 lg:w-3/5 md:h-screen overflow-y-scroll">
      {pacientes.length === 0 ? (
        <>
          <h2 className="font-black text-3xl text-center">
            "No hay pacientes"
          </h2>
          <p className="text-xl mt-5 text-center">
            "Comienza agregando <span className="text-indigo-600 font-bold"> pacientes"</span>
          </p>
        </>
      ) : (
        <>
          <h2 className="font-black text-3xl text-center">
            Listado de Pacientes
          </h2>
          <p className="text-xl mt-5 text-center">
            Administra tus{" "}
            <span className="text-indigo-600 font-bold">pacientes y citas</span>
          </p>
          {pacientes.map((paciente)=>(
            <DetallePaciente paciente={paciente} key={paciente.id}/>
          ))}
        </>
      )}
    </div>
  );
};

export default PacientesList;

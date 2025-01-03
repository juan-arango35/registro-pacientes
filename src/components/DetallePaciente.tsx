import { toast } from "react-toastify"
import { usePacienteStore } from "../store/store"
import { Paciente } from "../types"
import DetallePacienteItem from "./DetallePacienteItem"

type DetallePacienteProps = {
    paciente: Paciente
}
const DetallePaciente = ({paciente}: DetallePacienteProps) => {
    const eliminarPaciente = usePacienteStore(state => state.eliminarPaciente)
    const traerPacientePorID = usePacienteStore(state => state.traerPacientePorID)

    //tambien se puede hacer asi
    // const { eliminarPaciente, traerPacientePorID } = usePacienteStore()

    //agregamos la animacion de carga

    const handleCLickDelete=()=>{
      eliminarPaciente(paciente.id)
      toast.error("Paciente Eliminado Correctamente")
    }
  return (
    <div className="mx-5 my-10 px-5 py-10 bg:white shadow-md rounded-xl">
      <DetallePacienteItem  label="ID"  data={paciente.id}/>
      <DetallePacienteItem  label="Nombre"  data={paciente.name}/>
      <DetallePacienteItem  label="Propietario"  data={paciente.propietario}/>
      <DetallePacienteItem  label="Email"  data={paciente.email}/>
      <DetallePacienteItem  label="Fecha Alta"  data={paciente.date.toString()}/>
      <DetallePacienteItem  label="Sintomas"  data={paciente.symptoms}/>
      <div className="flex flex-col lg:flex-row gap-3  justify-between   mt-10">
        <button className="py-2 px-3 text-white bg-indigo-600 hover:bg-indigo-800 font-bold uppercase rounded-lg" onClick={()=> traerPacientePorID(paciente.id)}>Editar</button>
        <button className="py-2 px-3 text-white bg-red-600 hover:bg-red-800 font-bold uppercase rounded-lg" onClick={handleCLickDelete }>Eliminar</button>

      </div>
    </div>
  )
}

export default DetallePaciente
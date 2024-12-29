import { usePacienteStore } from "../store/store"

const PacientesList = () => {
  const pacientes = usePacienteStore((state) => state.pacientes)
  console.log(pacientes)
  return (
    <div>
        Lista del paciente
    </div>
  )
}

export default PacientesList
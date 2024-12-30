type DetallePacienteItemProps = {
    label: string;
    data: string;
}

const DetallePacienteItem = ({label, data}: DetallePacienteItemProps ) => {
  return (
    <p className="font-bold mb-3 text-gray-700 uppercase">{label}: {""} <span className="font-normal normal-case">{data}</span></p>
  )
}

export default DetallePacienteItem
import { create } from "zustand";
import { DraftPatient, Paciente } from "../types";
import { v4 as uuidv4 } from 'uuid';


//este es el tipado de los elementos que estaran en el store
type PatienteState = {
    //la funciones que voy a utlizar en los componentes siempre deben estar en el tipado
    pacientes : Paciente[]
    agregaPaciente: (data:DraftPatient) => void
    eliminarPaciente: (id:Paciente['id']) => void 
}

const createPaciente= (paciente:DraftPatient):Paciente => {
    return  {...paciente, id: uuidv4()}
}

//estas son las funciones que se obtendran del store, para usarlas en los componentes
export const usePacienteStore = create<PatienteState>((set)=>({
    pacientes: [],
    agregaPaciente: (data) => {
        const nuevoPaciente = createPaciente(data)
        set((state)=>({
            pacientes: [...state.pacientes, nuevoPaciente]
        }))
    },
    eliminarPaciente:(id)=> {
        set((state)=>({
            pacientes: state.pacientes.filter(paciente => paciente.id !== id)
        }))
    }

}))
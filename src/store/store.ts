import { create } from "zustand";
import { DraftPatient, Paciente } from "../types";


//este es el tipado de los elementos que estaran en el store
type PatienteState = {
    paciente : Paciente[]
    agregaPaciente: (data:DraftPatient) => void
}


//estas son las funciones que se obtendran del store, para usarlas en los componentes
export const usePacienteStore = create<PatienteState>(()=>({
    paciente: [],
    agregaPaciente: (data:DraftPatient) => {
        console.log(data)
    }
}))
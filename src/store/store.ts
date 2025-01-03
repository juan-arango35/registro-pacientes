import { create } from "zustand";
import { createJSONStorage, devtools, persist } from "zustand/middleware"; // esto es para ver los estados de zustand y persist es para guardar en localstorage
import { DraftPatient, Paciente } from "../types";
import { v4 as uuidv4 } from "uuid";

//este es el tipado de los elementos que estaran en el store
type PatienteState = {
  //la funciones que voy a utlizar en los componentes siempre deben estar en el tipado
  pacientes: Paciente[];
  idActivo: Paciente["id"]; // => para generar la edicion del paciente
  agregaPaciente: (data: DraftPatient) => void;
  eliminarPaciente: (id: Paciente["id"]) => void;
  traerPacientePorID: (id: Paciente["id"]) => void;
  actualizarPaciente: (data: DraftPatient) => void;
};

const createPaciente = (paciente: DraftPatient): Paciente => {
  return { ...paciente, id: uuidv4() };
};

//estas son las funciones que se obtendran del store, para usarlas en los componentes
export const usePacienteStore = create<PatienteState>()(
  devtools(
    persist(
      (set) => ({
        pacientes: [],
        idActivo: "", // => para generar la edicion del paciente
        agregaPaciente: (data) => {
          const nuevoPaciente = createPaciente(data);
          set((state) => ({
            pacientes: [...state.pacientes, nuevoPaciente],
          }));
        },
        eliminarPaciente: (id) => {
          set((state) => ({
            pacientes: state.pacientes.filter((paciente) => paciente.id !== id),
          }));
        },
        traerPacientePorID: (id) => {
          set(() => ({
            idActivo: id,
          }));
        },

        actualizarPaciente: (data) => {
          set((state) => ({
            pacientes: state.pacientes.map((paciente) =>
              paciente.id === state.idActivo
                ? { id: state.idActivo, ...data }
                : paciente
            ),
            idActivo: "",
          }));
        },
      }),
      {
        name: "pacientes-storage",
        storage: createJSONStorage(() => localStorage), // tambien se puede usar sessionStorage
      }
    )
  )
);

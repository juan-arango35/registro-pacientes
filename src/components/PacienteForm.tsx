import { useForm } from "react-hook-form";
import Error from "./Error";
import type { DraftPatient } from "../types";
import { usePacienteStore } from "../store/store";
import { useEffect } from "react";
import { toast } from "react-toastify"; // para agregar animaciones de carga

export default function PacientForm() {
  const { agregaPaciente, idActivo, pacientes, actualizarPaciente } =
    usePacienteStore();
  const {
    register,
    handleSubmit,
    setValue, // regresar un valor al formulario
    formState: { errors },
    reset, //esta funcion limpia el formulario
  } = useForm<DraftPatient>();

  //agregamos el idActivo para poder llenar el formulario cuando editamos
  useEffect(() => {
    if (idActivo) {
      const pacienteActivo = pacientes.filter(
        (paciente) => paciente.id === idActivo
      )[0];
      setValue("name", pacienteActivo.name);
      setValue("propietario", pacienteActivo.propietario);
      setValue("email", pacienteActivo.email);
      setValue("date", pacienteActivo.date);
      setValue("symptoms", pacienteActivo.symptoms);
    }
  }, [idActivo]);
  function registroPaciente(data: DraftPatient) {
    if (idActivo) {
      actualizarPaciente(data);
      toast.success("Paciente Actualizado Correctamente") // animaciones de carga
    } else {
      agregaPaciente(data);
      toast.success("Paciente Registrado Correctamente") // animaciones de caraga
    }

    reset();
  }

  return (
    <div className="md:w-1/2 lg:w-2/5 mx-5">
      <h2 className="font-black text-3xl text-center">
        Seguimiento Pacientes{" "}
      </h2>

      <p className="text-lg mt-5 text-center mb-10">
        Añade Pacientes y {""}
        <span className="text-indigo-600 font-bold">Administralos</span>
      </p>

      <form
        className="bg-white shadow-md rounded-lg py-10 px-5 mb-10"
        noValidate
        onSubmit={handleSubmit(registroPaciente)}
      >
        <div className="mb-5">
          <label htmlFor="name" className="text-sm uppercase font-bold">
            Paciente
          </label>
          <input
            id="name"
            className="w-full p-3  border border-gray-100"
            type="text"
            placeholder="Nombre del Paciente"
            {...register("name", {
              required: "El nombre del paciente es obligatorio",
              maxLength: {
                value: 10,
                message:
                  "El nombre del paciente no puede ser mayor a 10 caracteres",
              },
            })}
          />
          {errors.name && <Error>{errors.name?.message}</Error>}
        </div>

        <div className="mb-5">
          <label htmlFor="propietario" className="text-sm uppercase font-bold">
            Propietario
          </label>
          <input
            id="propietario"
            className="w-full p-3  border border-gray-100"
            type="text"
            placeholder="Nombre del Propietario"
            {...register("propietario", {
              required: "El nombre del propietario  es obligatorio",
            })}
          />
          {errors.propietario && <Error>{errors.propietario?.message}</Error>}
        </div>

        <div className="mb-5">
          <label htmlFor="email" className="text-sm uppercase font-bold">
            Email
          </label>
          <input
            id="email"
            className="w-full p-3  border border-gray-100"
            type="email"
            placeholder="Email de Registro"
            {...register("email", {
              required: "El Email es Obligatorio",
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: "Email No Válido",
              },
            })}
          />
          {errors.email && <Error>{errors.email?.message}</Error>}
        </div>

        <div className="mb-5">
          <label htmlFor="date" className="text-sm uppercase font-bold">
            Fecha Alta
          </label>
          <input
            id="date"
            className="w-full p-3  border border-gray-100"
            type="date"
            {...register("date", {
              required: "La fecha de alta es obligatoria",
            })}
          />
          {errors.date && <Error>{errors.date?.message}</Error>}
        </div>

        <div className="mb-5">
          <label htmlFor="symptoms" className="text-sm uppercase font-bold">
            Síntomas
          </label>
          <textarea
            id="symptoms"
            className="w-full p-3  border border-gray-100"
            placeholder="Síntomas del paciente"
            {...register("symptoms", {
              required: "Los sintomas son obligatorios",
            })}
          ></textarea>
          {errors.symptoms && <Error>{errors.symptoms?.message}</Error>}
        </div>

        <input
          type="submit"
          className="bg-indigo-600 w-full p-3 text-white uppercase font-bold hover:bg-indigo-700 cursor-pointer transition-colors"
          value="Guardar Paciente"
        />
      </form>
    </div>
  );
}

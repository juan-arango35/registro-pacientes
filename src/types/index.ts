export type Paciente = {
    id: string,
    name: string,
    propietario: string
    email: string,
    date:Date,
    symptoms: string

}

export type DraftPatient = Omit<Paciente, 'id'> // toma los datos del paciente omitiendo el id
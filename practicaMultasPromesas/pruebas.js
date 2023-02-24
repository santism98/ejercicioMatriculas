const arrayAlumnos = [
    { id: 1, alumno: 'Pepe' },
    { id: 2, alumno: 'Ana' },
    { id: 3, alumno: 'Juan' },
    { id: 4, alumno: 'Pepi' },
    { id: 5, alumno: 'bea' }
];

const arrayNotas = [
    { id: 1, nota: 8 },
    { id: 2, nota: 7 },
    { id: 5, nota: 9 },
];

const arrayBecas = [
    { id: 2, beca: true },
    { id: 5, beca: false },
];

const id = 1;

const getAlumno = async (id) => {
    const alumno = arrayAlumnos.find((item) => item.id == id);
    if (!alumno) throw (`El alumno con id ${id} no existe`);
    return alumno;
};

const getNota = async (id, alumno) => {
    const nota = arrayNotas.find((item) => item.id == id);
    if (!nota) {
        throw (`${alumno} no tiene nota`);
    } else {
        return {nota};
    }
};

const getBeca = async (id) => {
   
    const beca = arrayBecas.find((item) => item.id == id);
    if (!beca) {
        throw (`${alumno} no tiene beca`);
    } else {
        return beca;
    }
};

const getDatos = async (id) => {
    try {
        const {alumno}= await getAlumno(id)
        const {nota}= await getNota(id,alumno)
        const {beca}= await getBeca(id,alumno,nota)
        let mensajeBeca = '';
        if (beca) {
            mensajeBeca = 'tiene beca';
        } else {
            mensajeBeca = 'no tiene beca';
        }
        const resultado = `${alumno} tiene una nota de ${nota} y ${mensajeBeca}`;
        console.log(resultado);
       
    } catch (error) {
        console.log(error);
    }
};

getDatos(id);
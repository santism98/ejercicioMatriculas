const arrayCoches = [
    { id: 1,
      matricula : '7777HHH' ,
      modelo: 'OPEL CORSA',
      baja : 'SI',
    },
    {   id: 2,
        matricula : '7777HHH',
        modelo: 'FORD FIESTA',
        baja : 'SI',
      },
      { id: 3,
        matricula: '7777HHH',
        modelo: 'RENAULT CLIO',
        baja : 'SI',
      },
      { id: 4,
        matricula : '7777HHH',
        modelo: 'PEUGEOT 206',
        baja : 'SI',
      },
      { id: 5,
        matricula : '7777HHH',
        modelo: 'MASSERATI',
        baja : 'SI',
      },
      { id: 6,
        matricula : '7777HHH',
        modelo: 'RANGE ROVER',
        baja : 'SI',
      }
]

const arrayDatosProp= [
    {
        id: 1,
        nombre: 'JOSE',
        telefono: 66666666,
        direccion:'CALLE FALSA 123' ,
        multas: 0,
    },
    {
        id: 2,
        nombre: 'LUCIA',
        telefono: 66666666,
        direccion:'CALLE FALSA 123' ,
        multas: 7,
    },
    {
        id: 3,
        nombre: 'FEDERICO',
        telefono: 66666666,
        direccion: 'CALLE FALSA 123',
        multas: 8,
    },
    {
        id: 4,
        nombre: 'GUSTAVO',
        telefono: 66666666,
        direccion: 'CALLE FALSA 123',
        multas: 3,
    },
    {
        id: 5,
        nombre: 'JOSEFINA',
        telefono: 66666666,
        direccion:'CALLE FALSA 123' ,
        multas: 10,
    },
    {
        id: 6,
        nombre: 'ENRIQUE',
        telefono: 66666666,
        direccion:'CALLE FALSA 123' ,
        multas: 55,
    },
]

//BUSCAR MATRICULA
let numMatricula = prompt('Inserte matricula con formato 0000ZZZ');

const getMatricula = async (matr) => {
    const matricula2 = arrayCoches.find((item) => item.matricula == matr);
    if (!matricula2) throw (`El coche con matricula ${matr} no existe`);
    else{
        console.log(matricula2) ;
        return matricula2;  
    }
    
};

const getBaja = async(baj) =>{
    const baja2 = arrayCoches.find((item)=> item.baja == baj);
    if (baja2 == 'NO') throw (`El coche NO esta dado de alta `);
    else{
        console.log(baja2) ;
        return baja2;  
    }
}

const getMulta = async(mul) =>{
    const multa2 = arrayDatosProp.find((item)=>item.multas == mul);
    if (multa2 == 0) throw (`El coche con matricula ${matr} no tiene multas`);
    else{
        console.log(multa2) ;
        return multa2;  

}}



//FUNCION PINTAR LOCAL STORAGE


//FUNCION PINTAR DOM
const rellenarTabla = async(datos1, datos2) => {
    const fila = document.createElement("tr");
    const matriculaTabla = document.createElement("td");
    const modeloTabla = document.createElement("td");
    const nomPropTabla = document.createElement("td");
    const telefonoTabla = document.createElement("td");
    const direccionTabla = document.createElement("td");
    const multasTabla = document.createElement("td");
  
    matriculaTabla.textContent = datos1.matricula;
    modeloTabla.textContent = datos1.modelo;
    nomPropTabla.textContent = datos2.nombre;
    telefonoTabla.textContent = datos2.telefono;
    direccionTabla.textContent = datos2.direccion;
    multasTabla.textContent = datos2.multas;
  
    fila.append(matriculaTabla);
    fila.append(modeloTabla);
    fila.append(nomPropTabla);
    fila.append(telefonoTabla);
    fila.append(direccionTabla);
    fila.append(multasTabla);
   // tablaCuerpo.append(fila);
  }

  const getDatos = async (id) => {
    try {
        const {matricula}= await getmatricula(id)
        const {baja}= await getNota(id,matricula)
        const {beca}= await getBeca(id,matricula,baja)
        let mensajeBeca = '';
        if (beca) {
            mensajeBeca = 'tiene beca';
        } else {
            mensajeBeca = 'no tiene beca';
        }
        const resultado = `${matricula} tiene una nota de ${nota} y ${mensajeBeca}`;
        console.log(resultado);
       
    } catch (error) {
        console.log(error);
    }
};




//
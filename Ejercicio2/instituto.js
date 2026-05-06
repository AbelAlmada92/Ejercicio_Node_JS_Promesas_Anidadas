const colors = require ("colors");
const { ejecutarCuenta } = require("../Ejercicio1/cuentaBancaria");

const alumno = {
    nombre : "Carlos",
    edad : 24,
    materias : ["Logica", "Matematica", "Tec. de Programacion"],
    debeMaterias : false
}

const validarCorrelativa = (alumno) => {
    return new Promise ((resolve, reject) =>{
        console.log("Validando correlativas...");
        setTimeout(() =>{
            if(!alumno.debeMaterias){
                resolve ("No debe ninguna materia".green)
            }else{
                reject("Error: El alumno adeuda materias.".red);
            }
        }, 2000)
    })
}

const inscripcionMaterias = (alumno, materia) => {
    return new Promise ((resolve) =>{
    setTimeout(() => {
        alumno.materias.push(materia);
        resolve(`Inscripcion correcta a la materia ${materia}`.green);
     }, 5000);
    });
};

validarCorrelativa(alumno)
    .then((mensajeValidacion)=>{
        console.log(mensajeValidacion);
        return inscripcionMaterias(alumno);
    })
    .then((mensajeInscripcion)=>{
        console.log(mensajeInscripcion);
    })
    .catch((error)=>{
        console.error(error);
    })
    .finally(() =>{
        console.log("La operación a finalizado.".yellow);
        console.log("Estado final del alumno", alumno)
    });

module.exports = {ejecutarInstituto}

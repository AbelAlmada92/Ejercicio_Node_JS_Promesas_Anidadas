
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
                resolve ("No debe ninguna materia")
            }else{
                reject("Error: El alumno adeuda materias.");
            }
        }, 2000)
    })
}

const inscripcionMaterias = (alumno, materia) => {
    return new Promise ((resolve) =>{
    setTimeout(() => {
        alumno.materias.push(materia);
        resolve(`Inscripcion correcta a la materia ${materia}`);
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
        console.log("La operación a finalizado.");
        console.log("Estado final del alumno", alumno)
    });

// ejecución

inscripcionMaterias(alumno, "Bases de datos")
console.log(alumno.inscripcionMaterias)
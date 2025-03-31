// Calificaciones
let estudiantes = []
 while (true){
 console.log("Materias")
 let nombre = prompt("Ingrese su nombre: ")
 if (nombre == "Salir")
    {break}
 let estudianteExistente = estudiantes.find(est => est[0].toLowerCase() === nombre.toLowerCase())
 let materias = estudianteExistente ? estudianteExistente[1] : []; // Si existe, obtener sus materias

 if (estudianteExistente) {
     console.log(`El estudiante ${nombre} ya está registrado.`);
 }
 while(true){
    let nombreMateria = prompt("Ingrese la materia:")     
     if( nombreMateria == "Salir"){    
            break;
         }
     let nota = prompt("Ingrese su nota")  
     nota = parseFloat(nota);  
     let calificaciones = {}  
     calificaciones[nombreMateria] = nota;
     for (let [materia, calificacion] of Object.entries(calificaciones)) {
         console.log(materia, ":", calificacion);
     }
     if (estudianteExistente) {
      estudianteExistente[1] = materias;
  } else {
      
      estudiantes.push([nombre, materias]);
  }
     materias.push(calificaciones);  
  }

  estudiantes.push([nombre, materias]);  
  console.log(`Estudiante ${nombre} registrado con éxito.\n`);
 }


console.log(estudiantes);

 
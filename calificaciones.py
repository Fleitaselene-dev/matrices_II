##Calificaciones.

estudiantes = []  
while True:   
    print("Materia")   
    nombre = input("Escribe tu nombre: ")   
    if nombre == "Salir":    
        break   
    estudianteExistente = next((est for est in estudiantes if est[0].lower() == nombre.lower()), None)
    
    if estudianteExistente:
        materias = estudianteExistente[1]
        print(f"El estudiante {nombre} ya está registrado.")
    else:
        materias = []
        estudiantes.append([nombre, materias]) 
    while True:    
        nombre_materia = input("Ingrese la materia: ")     
        if nombre_materia == "Salir":      
            break  
        nota = input("Ingrese su nota: ")     
        calificaciones = {nombre_materia:nota}    
        for idx, value in calificaciones.items():      
            print(idx,":", value)    
        
        materias.append(calificaciones)    
    print(f"Estudiante {nombre} registrado con éxito.\n")  
print(estudiantes)
    

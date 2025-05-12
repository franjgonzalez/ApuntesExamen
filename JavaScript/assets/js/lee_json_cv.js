const miCV = {
    "nombre": "Fran Juan",
    "edad": 28,
    "profesion": "Militar",
    "email": "fran@gmail.com",
    "experiencias": [
        {
            "empresa": "EA",
            "puesto": "Soldado",
            "años": 5,
            "periodo": "2018 - 2020"
        },
        {
            "empresa": "Mercadona",
            "puesto": "Reponedor",
            "años": 2
        },
        {
            "empresa": "Bankia",
            "puesto": "Analista",
            "años": 4
        }
    ],
    "titulaciones": [
        {
            "titulo": "DAM",
            "centro": "UNIR FP",
            "año_finalización": 2026
        }
    ]
}


// fetch('assets/doc/mi_cv.json').then(response =>
//     {
//         if
//     })


// Empezamos a mostrar la Información General.
const infoDiv = document.querySelector("#info");
infoDiv.innerHTML = `<p>Nombre: ${miCV.nombre}</p>
                    <p>Edad: ${miCV.edad}</p>
                    <p>Profesión: ${miCV.profesion}</p>
                    <p>E-mail: ${miCV.email}</p>`; // comilla al lado de la p`

// Mostramos experiencia laboral.
const experienciasUL = document.querySelector("#experiencia");
miCV.experiencias.forEach(exp => {
    // creamos un nuevo elemento dentro del documento
    const listItem = document.createElement("li");

    // aplicamos contenido al li
    listItem.textContent = `${exp.puesto} en ${exp.empresa} durante ${exp.años} años`;

    //añadimos el li a experienciaUL
    experienciasUL.appendChild(listItem);
})
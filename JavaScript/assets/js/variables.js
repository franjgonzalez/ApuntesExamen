/*Formas de declarar variables en JavaScript*/

// Variable no recomendable. Porque existe en toda la función
// en la que se crea
var variable_de_ambito_funcion = 5;

// Variable en modo moderno. Recomendable. Porque solo
// existe en el bloque {} en el que se crea.
let variable_de_ambito_bloque = 7;

// Constantes. Cuando no queremos que se cambie el valor
// después de inicializarla.
const variable_constante = 10;


function esto_es_una_funcion(){
    if(true){
        var variable_de_funcion = 57;
        let variable_de_bloque = 89;
    }

    console.log(variable_de_funcion);  // 57
    console.log(variable_de_bloque);   // da error
}

// Llamamos a la función
esto_es_una_funcion()
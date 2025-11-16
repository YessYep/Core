// Predecir JS (Core) - Skillnest / Forge
// Alumna: Yessica Escobar
// Archivo con mis predicciones, resultados y explicaciones simples.

// Ejercicio 1: Desestructuración en objetos anidados

// Predicción:
// edad  -> 30
// salario -> undefined (no existe en el objeto)

// Resultado real:
// 30
// undefined

// Explicación:
// Solo existe "edad" dentro de detalles.
// "salario" no está definido, por eso sale undefined.

const info = {
    personal: {
        nombre: 'Carlos',
        apellido: 'Vega',
        detalles: {
            edad: 30,
            ocupacion: 'Ingeniero'
        }
    }
};

const { personal: { detalles: { edad, salario } } } = info;
console.log(edad);
console.log(salario);


// Ejercicio 2: Uso del operador spread en la fusión de objetos

// Predicción:
// { a: 1, b: 4, c: 5, d: 6 }

// Resultado real:
// { a: 1, b: 4, c: 5, d: 6 }

// Explicación:
// Primero se copia objetoA, luego objetoB.
// Las claves repetidas (b y c) se reemplazan por las de objetoB.

const objetoA = { a: 1, b: 2, c: 3 };
const objetoB = { b: 4, c: 5, d: 6 };
const resultado = { ...objetoA, ...objetoB };
console.log(resultado);


// Ejercicio 3: Ámbito de variables en funciones y bloques

// Predicción:
// console.log(c); -> 4
// console.log(a); -> error (ReferenceError)
// console.log(b); -> ya no se ejecuta por el error anterior

// Resultado real:
// 4
// ReferenceError: a is not defined

// Explicación:
// var c = 4 se puede usar fuera del if porque var tiene alcance de función.
// a y b se declararon con const y let dentro del if, solo viven en ese bloque.
// Al intentar usar "a" fuera del if, da error y se detiene la función.

const verificar = () => {
    if (true) {
        const a = 2;
        let b = 3;
        var c = 4;
    }
    console.log(c);
    console.log(a);
    console.log(b);
};
verificar();


// Ejercicio 4: Propiedades de objetos inmutables

// Predicción:
// 29

// Resultado real:
// 29

// Explicación:
// Object.freeze hace que no se puedan cambiar las propiedades del objeto.
// La línea datos.edad = 30 no cambia nada, por eso sigue siendo 29.

const datos = Object.freeze({ nombre: 'Luis', edad: 29 });
datos.edad = 30;
console.log(datos.edad);


// Ejercicio 5: Manipulación de arreglos sin modificar el original

// Predicción:
// original -> [1, 2, 3]
// nuevo    -> [1, 2, 3, 4]

// Resultado real:
// [1, 2, 3]
// [1, 2, 3, 4]

// Explicación:
// concat crea un nuevo arreglo, no toca el original.

const original = [1, 2, 3];
const nuevo = original.concat(4);
console.log(original);
console.log(nuevo);


// Ejercicio 6: Acceso a elementos de un arreglo con destructuración

// Predicción:
// primera -> "manzana"
// segunda -> "naranja"

// Resultado real:
// manzana
// naranja

// Explicación:
// [primera, segunda] toma el elemento 0 y el 1 del arreglo frutas.

const frutas = ['manzana', 'naranja', 'pera', 'mango'];
const [primera, segunda] = frutas;
console.log(primera);
console.log(segunda);


// Ejercicio 7: Comportamiento del ámbito de let en bucles anidados

// Predicción:
// 0
// 1
// 0
// 1
// 0
// 1

// Resultado real:
// 0
// 1
// 0
// 1
// 0
// 1

// Explicación:
// Cada for tiene su propia "i" porque está declarada con let.
// El for de afuera se repite 3 veces.
// En cada vuelta, el for de adentro imprime 0 y 1.

for (let i = 0; i < 3; i++) {
    for (let i = 0; i < 2; i++) {
        console.log(i);
    }
}


// Ejercicio 8: Uso del operador spread para combinar arreglos

// Predicción:
// [1, 2, 3, 3, 4, 5]

// Resultado real:
// [1, 2, 3, 3, 4, 5]

// Explicación:
// [...numeros1, ...numeros2] crea un nuevo arreglo con los elementos
// de numeros1 y luego los de numeros2. No elimina duplicados.

const numeros1 = [1, 2, 3];
const numeros2 = [3, 4, 5];
const combinados = [...numeros1, ...numeros2];
console.log(combinados);


// Ejercicio 9: Alcance y captura de variables dentro de una función

// Predicción:
// nombre -> "Luis"
// edad   -> 25

// Resultado real:
// Luis
// 25

// Explicación:
// var nombre tiene alcance de función, así que al cambiarlo dentro del if
// el valor final es "Luis".
// let edad es de bloque. Dentro del if hay otra edad (30) distinta.
// Fuera del if sigue la edad original (25).

const demostracion = () => {
    var nombre = 'Ana';
    let edad = 25;
    if (true) {
        var nombre = 'Luis';
        let edad = 30;
    }
    console.log(nombre);
    console.log(edad);
};
demostracion();

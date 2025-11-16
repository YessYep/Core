// Fundamentos / Flechas Condicionales (Core)
// Archivo: flechas_condicionales.js
// Alumna: Yessica Escobar


// Ejercicio 1: Conversor de temperatura

// Función flecha (una sola línea)
const aFahrenheit = celsius => (celsius * 9 / 5) + 32;

// Prueba:
console.log(aFahrenheit(0));     // 32
console.log(aFahrenheit(25));    // 77


// Ejercicio 2: Generador de mensajes personalizados


const mensaje = (nombre, edad) => `Hola ${nombre}, tienes ${edad} años de edad.`;

// Prueba:
console.log(mensaje("Juan", 30));
console.log(mensaje("Yessica", 22)); // ejemplo


// Ejercicio 3: Convertir de millas a kilómetros

const millasAKm = millas => millas * 1.60934;

// Prueba:
console.log(millasAKm(1));   // 1.60934
console.log(millasAKm(10));  // 16.0934


// Ejercicio 4: Consejos según el clima

// Con operador ternario
const consejoClima = clima =>
    clima === "lluvioso"
        ? "Lleva un paraguas"
        : clima === "soleado"
        ? "Lleva un sombrero"
        : "Clima no reconocido";

// Prueba:
console.log(consejoClima("lluvioso")); 
console.log(consejoClima("soleado"));  
console.log(consejoClima("nublado"));  

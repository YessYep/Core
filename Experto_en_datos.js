// Arreglo original (no modificado)
const videojuegos = Object.freeze([
    { "id": 1, "nombre": "The Legend of Zelda: Breath of the Wild", "genero": "aventura", "plataforma": "Nintendo Switch" },
    { "id": 2, "nombre": "Super Mario Odyssey", "genero": "plataformas", "plataforma": "Nintendo Switch" },
    { "id": 3, "nombre": "Red Dead Redemption 2", "genero": "acción-aventura", "plataforma": "PlayStation 4" },
    { "id": 4, "nombre": "The Witcher 3: Wild Hunt", "genero": "RPG", "plataforma": "PC" },
    { "id": 5, "nombre": "Fortnite", "genero": "battle royale", "plataforma": "multiplataforma" },
    { "id": 6, "nombre": "Minecraft", "genero": "sandbox", "plataforma": "multiplataforma" },
    { "id": 7, "nombre": "Overwatch", "genero": "shooter", "plataforma": "multiplataforma" },
    { "id": 8, "nombre": "FIFA 20", "genero": "deportes", "plataforma": "multiplataforma" },
    { "id": 9, "nombre": "Super Smash Bros. Ultimate", "genero": "lucha", "plataforma": "Nintendo Switch" },
    { "id": 10, "nombre": "League of Legends", "genero": "MOBA", "plataforma": "PC" },
    { "id": 11, "nombre": "God of War", "genero": "acción-aventura", "plataforma": "PlayStation 4" },
    { "id": 12, "nombre": "Animal Crossing: New Horizons", "genero": "simulación", "plataforma": "Nintendo Switch" },
    { "id": 13, "nombre": "Call of Duty: Warzone", "genero": "shooter", "plataforma": "multiplataforma" },
    { "id": 14, "nombre": "Cyberpunk 2077", "genero": "acción-RPG", "plataforma": "multiplataforma" },
    { "id": 15, "nombre": "Assassin's Creed Valhalla", "genero": "acción-aventura", "plataforma": "multiplataforma" },
    { "id": 16, "nombre": "Among Us", "genero": "party", "plataforma": "multiplataforma" },
    { "id": 17, "nombre": "Pokémon Sword and Shield", "genero": "RPG", "plataforma": "Nintendo Switch" },
    { "id": 18, "nombre": "Genshin Impact", "genero": "acción-RPG", "plataforma": "multiplataforma" },
    { "id": 19, "nombre": "Valorant", "genero": "shooter táctico", "plataforma": "PC" },
    { "id": 20, "nombre": "Death Stranding", "genero": "acción-aventura", "plataforma": "PlayStation 4" },
    { "id": 21, "nombre": "Spider-Man: Miles Morales", "genero": "acción-aventura", "plataforma": "PlayStation 5" },
    { "id": 22, "nombre": "Hades", "genero": "roguelike", "plataforma": "PC" },
    { "id": 23, "nombre": "Overcooked! 2", "genero": "cooperativo", "plataforma": "multiplataforma" },
    { "id": 24, "nombre": "Sekiro: Shadows Die Twice", "genero": "acción-aventura", "plataforma": "multiplataforma" },
    { "id": 25, "nombre": "Rainbow Six Siege", "genero": "shooter táctico", "plataforma": "multiplataforma" },
    { "id": 26, "nombre": "Grand Theft Auto V", "genero": "acción-aventura", "plataforma": "multiplataforma" }
]);

// Filtrar juegos de aventura o acción-aventura
const juegosAventura = videojuegos.filter(juego => juego.genero === "aventura" || juego.genero === "acción-aventura");

// Obtener los nombres de los juegos
const nombresJuegos = videojuegos.map(juego => juego.nombre);

console.log(juegosAventura);
console.log(nombresJuegos);

// Tarea

// 3️⃣ Un conjunto de videojuegos cuyo número de identificación es divisible uniformemente por 3.

const juegosIdDiv3 = videojuegos.filter(juego => juego.id % 3 === 0);
console.log("Juegos con id divisible entre 3:", juegosIdDiv3);

// ⚔️ Un conjunto de videojuegos que pertenecen al género “acción-RPG”.

const juegosAccionRPG = videojuegos.filter(juego => juego.genero === "acción-RPG");
console.log("Juegos de acción-RPG:", juegosAccionRPG);

// 🎭 Un conjunto de videojuegos que tienen más de un género.

const juegosMasDeUnGenero = videojuegos.filter(juego => juego.genero.includes("-"));
console.log("Juegos con más de un género (según guion '-'): ", juegosMasDeUnGenero);

// 📜 Una lista con los nombres de los videojuegos.

const listaNombres = videojuegos.map(juego => juego.nombre);
console.log("Todos los nombres de los juegos:", listaNombres);

// 🔢 Una lista con los nombres de los videojuegos con un número de identificación superior a 19.

const nombresIdMayor19 = videojuegos
    .filter(juego => juego.id > 19)
    .map(juego => juego.nombre);

console.log("Nombres con id mayor a 19:", nombresIdMayor19);

// 🔫 Una lista con los nombres de los videojuegos cuyo único género es “shooter”.

const nombresSoloShooter = videojuegos
    .filter(juego => juego.genero === "shooter")
    .map(juego => juego.nombre);

console.log("Nombres de juegos solo 'shooter':", nombresSoloShooter);

// 1️⃣ Una lista que contenga solo el primer género de todos los videojuegos cuyo segundo género es “aventura”.

const primerGeneroAventura = videojuegos
    .filter(juego => juego.genero.includes("-"))
    .filter(juego => {
        const partes = juego.genero.split("-");
        return partes[1] === "aventura";
    })
    .map(juego => juego.genero.split("-")[0]);

console.log("Primer género de los juegos cuyo segundo género es 'aventura':", primerGeneroAventura);

// 🎉 Un conteo del número de videojuegos que son del género “party”.

const juegosParty = videojuegos.filter(juego => juego.genero === "party");
const cantidadParty = juegosParty.length;

console.log("Número de juegos del género 'party':", cantidadParty);

// ❌ Una lista con todos los videojuegos excepto aquellos cuyo número de identificación sea múltiplo de 5.

const juegosSinMultiplo5 = videojuegos.filter(juego => juego.id % 5 !== 0);
console.log("Juegos sin ids múltiplos de 5:", juegosSinMultiplo5);

// ✨ Una lista con todos los videojuegos y para el videojuego con el número de identificación 5, se cambia su género por “otro”.

const juegosGeneroCambiado = videojuegos.map(juego => {
    return juego.id === 5
        ? { ...juego, genero: "otro" } // nuevo objeto para el id 5
        : juego; // los demás quedan igual
});

console.log("Lista con el género del id 5 cambiado a 'otro':", juegosGeneroCambiado);

// Solo para verificar que el original sigue igual (inmutable)
console.log("Arreglo original (sigue congelado):", videojuegos);

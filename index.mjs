import { leerSupheroes, agregarSuperHeroe } from "./utlils.mjs";

//leer y mostrar la lista de superhéroes ordenada
const nuevaRuta ='./nuevossuperheroes.txt';
const rutaOriginal = './superheroes.txt';

agregarSuperHeroe(rutaOriginal, nuevaRuta);

const superHeroes = leerSupheroes(rutaOriginal);

console.log(superHeroes);
import fs from 'fs';
//Clase para representar un Superhéroe
class Superheroe{
    constructor (
            id, 
            nombreSuperheroe, 
            nombreReal, 
            nombreSociedad, 
            edad, 
            planetaOrigen, 
            debilidad, 
            poder, 
            habilidadEspecial, 
            aliado, 
            enemigo)
        {
            this.id = id;
            this.nombreSuperheroe = nombreSuperheroe;
            this.nombreReal = nombreReal;
            this.nombreSociedad = nombreSociedad;
            this.edad = edad;
            this.planetaOrigen = planetaOrigen;
            this.debilidad= debilidad;
            this.poder = poder;
            this.habilidadEspecial = habilidadEspecial;
            this.aliado = aliado;
            this.enemigo = enemigo;
    
    }
}

export function leerSupheroes (ruta) {

    const datos = fs.readFileSync(ruta, 'utf8');
    const superheroesArray = JSON.parse(datos);
    // convertir a instancias de Superheroe
    const superheroes = superheroesArray.map(
        hero => new Superheroe(hero.id, hero.nombreSuperheroe, hero.nombreReal, hero.nombreSociedad, hero.edad, hero.planetaOrigen, 
                               hero.debilidad, hero.poder, hero.habilidadEspecial, hero.aliado, hero.enemigo)
                            );
        //Ordenar por nombre de superhéroe 
        superheroes.sort ((a, b) => a.nombreSuperheroe.localeCompare(
                b.nombreSuperheroe));
    
    return superheroes;

}

export function agregarSuperHeroe(rutaOriginal, nuevaRuta){
    
    const datosOriginales = fs.readFileSync(rutaOriginal, 'utf8');
    const arraySuperHeroes = JSON.parse(datosOriginales);
    const nuevosDatos = fs.readFileSync(nuevaRuta, 'utf-8');
    const arrayNuevoSuperHeroes = JSON.parse(nuevosDatos);
    

    const instanciasNuevos = arrayNuevoSuperHeroes.map(
          hero=>new Superheroe(hero.id, hero.nombreSuperheroe,
            hero.nombreReal, hero.nombreSociedad, hero.edad, hero.planetaOrigen,
            hero.debilidad, hero.poder, hero.habilidadEspecial, hero.aliado,
            hero.enemigo)
    );


    const listaActualizada = [...arraySuperHeroes, ...instanciasNuevos];

    //console.log(listaActualizada);

    fs.writeFileSync(rutaOriginal, JSON.stringify(listaActualizada, null, 2), 'utf8');
        console.log('Lista de superhéroes actualizada con éxito.');
}
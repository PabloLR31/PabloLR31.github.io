class Nobleza {
    constructor(icono, titulo, puntaje) {
        this.icono = icono;
        this.titulo = titulo;
        this.puntaje = puntaje;
    }
}

const titulosNobleza = [
    new Nobleza('👨‍🌾', 'Campesino', 0),
    new Nobleza('🛡️', 'Escudero', 3000),
    new Nobleza('🏇', 'Caballero', 6000),
    new Nobleza('🗡️', 'Señor', 9000),
    new Nobleza('🏇', 'Barón', 12000),
    new Nobleza('💂🏻', 'Vizconde', 15000),
    //minimo de aprobacion 500 puntos (32 clases = 16k)
    new Nobleza('🛕', 'Conde Palatino', 18000),
    new Nobleza('🎩', 'Marqués', 21000),
    new Nobleza('👑', 'Duque', 24000),
    new Nobleza('🤴', 'Príncipe', 27000),
    //Aprobacion sobre saliente 2000 puntos (7 tps aprox = 14k)
    // son 9 tps, pero llegamos a 7 generalmente
    new Nobleza('⚔️', 'Rey', 30000),
    new Nobleza('🗿', 'Conquistador', 33000),
    new Nobleza('🦁', 'Gran Maestre de C', 36000),
    new Nobleza('🏆', 'Emperador de C', 40000),
    // Se obtienen sumando 1000 de concepto, participacion
];

export function asignarTitulo(puntaje) {
    let max;
    for( let i = 0; i < titulosNobleza.length; i++ ) {
        if( puntaje >= titulosNobleza[i].puntaje) {
            max = i;
        } else {
            break;
        }
    }
    return `${titulosNobleza[max].icono} ${titulosNobleza[max].titulo}`;
}

export { titulosNobleza }; // Al final del archivo nobleza.js

import { asignarTitulo } from "./nobleza.js";

export const alumnos = [
    ['APELLIDO, NOMBRE', 'TÍTULO DE NOBLEZA', 'PUNTOS'],
    ['M. D', '', 2500],
    ['A. F', '', 500],
    ['B. B', '', 500],
    ['C. F', '', 2500],
    ['C. U', '', 3500],
    ['C. R', '', 3500],
    ['C. M', '', 2500],
    ['D. X', '', 500],
    ['D. M', '', 3500],
    ['E. D', '', 2500],
    ['G. D', '', 2500],
    ['G. L', '', 2500],
    ['J. C', '', 2500],
    ['L. M', '', 2500],
    ['M. T', '', 2500],
    ['P. E', '', 500],
    ['S. J', '', 2500],
    ['S. M', '', 500],
    ['R. JM', '', 3500],
    ['R. SN', '', 2500],
    ['S. F', '', 2500],
    ['T. T', '', 500],
    ['V. T', '', 2500],
    ['V. M', '', 0],
    ['V. R', '', 0],
  ];


export function asignarNobleza() {
    for (let i = 1; i < alumnos.length; i++) {
        let puntaje = alumnos[i][2];
        alumnos[i][1] = asignarTitulo(puntaje);
    }
}
export function ordenarAlumnos() {
    alumnos.slice(1).sort((a, b) => b[2] - a[2]);
    const encabezado = alumnos[0];
    const datosOrdenados = alumnos.slice(1).sort((a, b) => b[2] - a[2]);
    alumnos.length = 0;
    alumnos.push(encabezado, ...datosOrdenados); 
}

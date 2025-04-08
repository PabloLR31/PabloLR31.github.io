import { asignarTitulo } from "./nobleza.js";

export const alumnos = [
    ['APELLIDO, NOMBRE', 'TÍTULO DE NOBLEZA', 'PUNTOS'],
    ['M. D', '', 2000],
    ['A. F', '', 0],
    ['B. B', '', 0],
    ['C. F', '', 2000],
    ['C. U', '', 3000],
    ['C. R', '', 2000],
    ['C. M', '', 2000],
    ['D. X', '', 0],
    ['D. M', '', 0],
    ['E. D', '', 2000],
    ['G. D', '', 2000],
    ['G. L', '', 2000],
    ['J. C', '', 2000],
    ['L. M', '', 2000],
    ['T. M', '', 2000],
    ['P. E', '', 0],
    ['S. J', '', 2000],
    ['S. M', '', 0],
    ['S. F', '', 0],
    ['T. T', '', 0],
    ['V. T', '', 2000],
    ['Z. S', '', 2000],
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
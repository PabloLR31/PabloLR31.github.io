import { asignarTitulo } from "./nobleza.js";

export const alumnos = [
    ['APELLIDO, NOMBRE', 'TÍTULO DE NOBLEZA', 'PUNTOS'],
    ['M. D', '', 3500],
    ['A. F', '', 1500],
    ['B. B', '', 1500],
    ['C. F', '', 3500],
    ['C. U', '', 4500],
    ['C. R', '', 4500],
    ['C. M', '', 4500],
    ['D. X', '', 1500],
    ['D. M', '', 4500],
    ['E. D', '', 3500],
    ['G. D', '', 3500],
    ['G. L', '', 3500],
    ['J. C', '', 3500],
    ['L. M', '', 3500],
    ['M. T', '', 3500],
    ['P. E', '', 1500],
    ['S. M', '', 1500],
    ['R. JM', '', 4500],
    ['R. SN', '', 3500],
    ['S. F', '', 3500],
    ['T. T', '', 1500],
    ['V. T', '', 3500],
    ['V. M', '', 1000],
    ['V. R', '', 1000],
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

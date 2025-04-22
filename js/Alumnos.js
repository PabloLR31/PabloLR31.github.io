import { asignarTitulo } from "./nobleza.js";

export const alumnos = [
    ['APELLIDO, NOMBRE', 'TÍTULO DE NOBLEZA', 'PUNTOS'],
    ['M. D', '', 3000],
    ['A. F', '', 1000],
    ['B. B', '', 1000],
    ['C. F', '', 3000],
    ['C. U', '', 4000],
    ['C. R', '', 4000],
    ['C. M', '', 4000],
    ['D. X', '', 1000],
    ['D. M', '', 4000],
    ['E. D', '', 3000],
    ['G. D', '', 3000],
    ['G. L', '', 3000],
    ['J. C', '', 3000],
    ['L. M', '', 3000],
    ['M. T', '', 3000],
    ['P. E', '', 1000],
    ['S. M', '', 1000],
    ['R. JM', '', 4000],
    ['R. SN', '', 3000],
    ['S. F', '', 3000],
    ['T. T', '', 1000],
    ['V. T', '', 3000],
    ['V. M', '', 500],
    ['V. R', '', 500],
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

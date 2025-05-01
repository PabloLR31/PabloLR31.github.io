import { asignarTitulo } from "./nobleza.js";

export const alumnos = [
    ['APELLIDO, NOMBRE', 'TÍTULO DE NOBLEZA', 'PUNTOS'],
    ['M. D', '', 4000],
    ['A. F', '', 2000],
    ['B. B', '', 3000],
    ['C. F', '', 4000],
    ['C. U', '', 6000],
    ['C. R', '', 5000],
    ['C. M', '', 5000],
    ['D. X', '', 2000],
    ['D. M', '', 6000],
    ['E. D', '', 4000],
    ['G. D', '', 4000],
    ['G. L', '', 4000],
    ['J. C', '', 4000],
    ['L. M', '', 5000],
    ['M. T', '', 4000],
    ['P. E', '', 2000],
    ['S. M', '', 2000],
    ['R. JM', '', 5000],
    ['R. SN', '', 4000],
    ['S. F', '', 4000],
    ['T. T', '', 2000],
    ['V. T', '', 4000],
    ['V. M', '', 1500],
    ['V. R', '', 1500],
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

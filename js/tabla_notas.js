import { alumnos, asignarNobleza, ordenarAlumnos } from './Alumnos.js';

export function tabla_notas() 
{
    ordenarAlumnos();
    asignarNobleza(); // Asignar títulos antes de mostrar la tabla

    const table = document.createElement('table');
    table.classList.add('table-notas');

    const tbody = document.createElement('tbody');
    table.appendChild(tbody);

    const thead = document.createElement('thead');
    const headerRow = document.createElement('tr');

    for (let i = 0; i < alumnos[0].length; i++) {
        const th = document.createElement('th');
        th.textContent = alumnos[0][i];
        headerRow.appendChild(th);
    }
    tbody.appendChild(headerRow);

    for (let i = 1; i < alumnos.length; i++) {
        const row = document.createElement('tr');
        for (let j = 0; j < alumnos[i].length; j++) {
            const cell = document.createElement('td');
            cell.textContent = alumnos[i][j];
            row.appendChild(cell);
        }
        tbody.appendChild(row);
    }

    document.body.appendChild(table);
}

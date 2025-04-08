import { tabla_notas } from './tabla_notas.js';
import { titulosNobleza } from './nobleza.js';

window.addEventListener('DOMContentLoaded', () => {
    tabla_notas();

    // MODAL
    const btnMostrarModal = document.getElementById('btnMostrarModal');
    const modal = document.getElementById('modalNobleza');
    const spanCerrar = document.querySelector('.cerrar-modal');
    const lista = document.getElementById('listaNobleza');

    // Rellenar lista
    titulosNobleza.forEach(titulo => {
        const li = document.createElement('li');
        li.textContent = `${titulo.icono} ${titulo.titulo} - ${titulo.puntaje} puntos`;
        lista.appendChild(li);
    });

    btnMostrarModal.addEventListener('click', () => {
        modal.style.display = "block";
    });

    spanCerrar.addEventListener('click', () => {
        modal.style.display = "none";
    });

    window.addEventListener('click', (e) => {
        if (e.target == modal) modal.style.display = "none";
    });
});


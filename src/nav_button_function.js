import { desayunosDeCortesia } from "./desayunos_de_cortesia";
import { desayunosALaCarta } from "./desayunos_a_la_carta";

function clearContent() {
    const menuItems = document.querySelector('.centered_food_items')
    while (menuItems.hasChildNodes()) {
        menuItems.removeChild(menuItems.firstChild);
    }
}

function addNavListeners() {
    const desayunosCortesia = document.querySelector('.desayunos_de_cortesia')
    const desayunosCarta = document.querySelector('.desayunos_a_la_carta')
    const comidaCarta = document.querySelector('.comida_a_la_carta')
    const bebidas = document.querySelector('.bebidas')
    const extras = document.querySelector('.extras')

    desayunosCortesia.addEventListener('click', function() {
        console.log ('Desayunos de cortesia');
        clearContent();
        desayunosDeCortesia();
    });

    desayunosCarta.addEventListener('click', function() {
        console.log ('Desayunos a la carta');
        clearContent();
        desayunosALaCarta();
    });

    comidaCarta.addEventListener('click', function() {
        console.log ('Comida a la carta');
    });

    bebidas.addEventListener('click', function() {
        console.log ('Bebidas');
    });

    extras.addEventListener('click', function() {
        console.log ('Extras');
    });
}

export default addNavListeners;
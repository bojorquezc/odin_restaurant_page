import { desayunosDeCortesia } from "./desayunos_de_cortesia";
import { desayunosALaCarta } from "./desayunos_a_la_carta";
import { comidaALaCarta } from "./comida_a_la_carta";
import { bebidasAlt } from "./bebidas";
import { extrasAlt } from "./extras";


function clearContent() {
    const menuItems = document.querySelector('.centered_food_items')
    while (menuItems.hasChildNodes()) {
        menuItems.removeChild(menuItems.firstChild);
    }
}

function toggleMobileMenu() {
    const mobileMenu = document.querySelector('.mobile_hamburger_icon');
    const mobileMenuButtons = document.querySelector('.menu_items')

    mobileMenu.addEventListener('click', function() {
        if (mobileMenuButtons.style.display === "block") {
            mobileMenuButtons.style.display = "none";
          } else {
            mobileMenuButtons.style.display = "block";
          }
    })
  }

function addNavListeners() {
    const desayunosCortesia = document.querySelector('.desayunos_de_cortesia')
    const desayunosCarta = document.querySelector('.desayunos_a_la_carta')
    const comidaCarta = document.querySelector('.comida_a_la_carta')
    const bebidas = document.querySelector('.bebidas')
    const extras = document.querySelector('.extras')

    desayunosCortesia.addEventListener('click', function() {
        clearContent();
        desayunosDeCortesia();
    });

    desayunosCarta.addEventListener('click', function() {
        clearContent();
        desayunosALaCarta();
    });

    comidaCarta.addEventListener('click', function() {
        clearContent();
        comidaALaCarta();
    });

    bebidas.addEventListener('click', function() {
        clearContent();
        bebidasAlt();
    });

    extras.addEventListener('click', function() {
        clearContent();
        extrasAlt();
    });
}

function initializeNav() {
    addNavListeners();
    toggleMobileMenu();
}

export {
    initializeNav
}
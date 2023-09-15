import { menuPageTitle, menuEntryShort, menuEntryLong } from "./menu_creation";

function bebidasAlt() {
    menuPageTitle('Bebidas');

    menuEntryShort('Agua Fresca - $30');
    menuEntryShort('Jugo de Naranja - $30');
    menuEntryShort('Café - $30');
    menuEntryShort('Vaso de Leche - $30');
    menuEntryShort('Leche con Chocolate - $30');
    menuEntryShort('Refresco de Lata - $30');
    menuEntryLong('Licuado - $40', 'Opciones a elegir:', 'Plátano', 'Fresa', 'Papaya');
}

export {
    bebidasAlt
};
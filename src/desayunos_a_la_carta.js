import { menuPageTitle, menuEntryShort, menuEntryLong } from "./menu_creation";

function desayunosALaCarta() {
    menuPageTitle('Desayunos a la Carta');

    menuEntryShort('Hot Cakes - $190', 'Tres esponjosos hot cakes acompañados de tu elección de fruta fresca.');
    menuEntryLong('Huevos Al Gusto - $190','Incluye arroz y frijoles. Opción a elegir:', 'Huevo con jamón','Huevo con salchicha', 'Huevos rancheros', 'Huevos con tocino', 'Huevos a la mexicana' )
    menuEntryShort('Fruta de Temporada - $190', '2 frutas de temporada a elegir, incluye miel, granola y yogurt');
    menuEntryShort('Chilaquiles - $190', 'Trozos de tortilla fritos, cubiertos de salsa roja o verde, acompañados de crema, queso, cebolla y aguacate. Un clásico mexicano. Incluye arroz y frijoles.');
    menuEntryShort('Sincronizada - $190', 'Dos tortillas rellenas de jamón y queso, cocinadas a la perfección. Incluye arroz y frijoles.');
    menuEntryShort('Quesadillas - $190', 'Tres piezas (solo queso) incluye arroz y frijoles. Un clásico de la cocina mexicana.');
    menuEntryShort('Machaca A La Mexicana - $190', 'Carne de res desmenuzada, cocinada con cebolla, tomate y chiles, llena de sabor y servida con tortillas calientes.');
    menuEntryShort('Machaca Con Huevo - $190', 'Deliciosa carne de res desmenuzada y huevos revueltos, sazonados con especias, servidos con tortillas calientes.');
}

export {
    desayunosALaCarta
};
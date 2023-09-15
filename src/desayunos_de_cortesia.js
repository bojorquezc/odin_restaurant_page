import { menuPageTitle, menuEntryShort, menuEntryLong } from "./menu_creation";

function desayunosDeCortesia() {
    menuPageTitle('Desayunos de Cortesia');

    menuEntryShort('Hot Cakes', 'Tres esponjosos hot cakes acompañados de tu elección de fruta fresca.');
    menuEntryLong('Huevos Al Gusto','Incluye arroz y frijoles. Opción a elegir:', 'Huevo con jamón','Huevo con salchicha', 'Huevos rancheros' )
    menuEntryLong('Burritos', 'Dos burritos deliciosos, incluye arroz y frijoles. Opción a elegir:', 'Huevo','Huevo con chorizo', 'Salchichas a la mexicana')
    menuEntryShort('Pan Francés', 'Servido con tu elección de complementos, como fruta, miel o azúcar en polvo.');
    menuEntryShort('Fruta de Temporada', 'Dos frutas de temporada a elegir, incluye miel, granola y yogurt.');
    menuEntryShort('Chilaquiles', 'Trozos de tortilla fritos, cubiertos de salsa roja o verde, acompañados de crema, queso, cebolla y aguacate. Un clásico mexicano. Incluye arroz y frijoles.');
    menuEntryShort('Sincronizada', 'Dos tortillas rellenas de jamón y queso, cocinadas a la perfección. Incluye arroz y frijoles.');
    menuEntryShort('Cereal', 'Una mezcla de cereales crujientes servida con leche y plátano fresco. Un desayuno equilibrado y lleno de sabor para comenzar tu día.');
    menuEntryShort('Avena', 'Avena cremosa cocinada a fuego lento y endulzada con trozos de plátano fresco.');
    menuEntryShort('Molletes Con Queso', 'Dos piezas con frijoles refritos, queso derretido. Incluye salsa bandera y arroz.');
    menuEntryShort('Quesadillas', 'Tres piezas (solo queso) incluye arroz y frijoles. Un clásico de la cocina mexicana.');
}

export {
    desayunosDeCortesia
};
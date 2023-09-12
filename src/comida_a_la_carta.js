function comidaALaCarta() {
    const main = document.querySelector('.centered_food_items')

    const menuTitle = document.createElement('h1');
    menuTitle.textContent = 'Comida a la Carta';
    main.appendChild(menuTitle);

    const foodItemGrid = document.createElement('div');
    foodItemGrid.classList.add('food_items_grid');
    main.appendChild(foodItemGrid);

    function menuEntryShort(name, desc) {
        const div = document.createElement('div');
        div.classList.add('food_item')
        const h2 = document.createElement('h2')
        h2.textContent = name;
        div.appendChild(h2);
        const p = document.createElement('p');
        p.textContent = desc;
        div.appendChild(p);
        const hr = document.createElement('hr');
        div.appendChild(hr);
        foodItemGrid.appendChild(div);
    }

    function menuEntryLong(name, desc, ...list) {
        const div = document.createElement('div');
        div.classList.add('food_item')
        const h2 = document.createElement('h2')
        h2.textContent = name;
        div.appendChild(h2);
        const p = document.createElement('p');
        p.textContent = desc;
        div.appendChild(p);
        const ul = document.createElement('ul');
        div.appendChild(ul);

        for (const listItem of list) {
            const li = document.createElement('li');
            li.textContent = listItem;
            ul.appendChild(li);
        }

        const hr = document.createElement('hr');
        div.appendChild(hr);
        foodItemGrid.appendChild(div);
    }

    menuEntryShort('Comida del Día - $190','Deléitese con su elección de dos guisados únicos, cada uno servido con una sopa casera y calientita.');
    menuEntryShort('Menudo - $190','Solo Sábados y Domingos - Sopa tradicional con tripa de res, chiles y especias, servida con cebolla, cilantro y limón.');
    menuEntryShort('Pozole - $190','Solo Sábados y Domingos - Sopa espesa de maíz con cerdo, acompañada de rábanos, lechuga y limón.');
    menuEntryShort('Club Sandwich - $190', 'Tres capas de pavo, jamón y tocino en pan tostado con aderezos frescos, servido con papas.');
    menuEntryShort('Caldo de Pollo - $190', 'Caldo casero con pollo tierno, vegetales y fideos.');
    menuEntryShort('Hot Dogs (2 Piezas) - $190', 'Dos hot dogs clásicos con tus aderezos favoritos.');
    menuEntryShort('Hamburguesa - $190', 'Hamburguesa jugosa con queso, lechuga y tomate, acompañado de papas fritas.');
    menuEntryShort('Pollo Estilo Sinaloa - $250', 'Pollo sazonado y a la parrilla con sabores únicos de Sinaloa.');
    menuEntryShort('Fajitas de Pollo - $250', 'Tiras de pollo a la parrilla con verduras y especias, servidas con tortillas.');
    menuEntryShort('Pechuga a la Plancha - $250', 'Pechuga de pollo a la plancha, simple y deliciosa.');
    menuEntryShort('Milanesa de Pollo - $250', 'Pechuga empanizada y frita, acompañada de guarniciones.');
    menuEntryLong('Machaca de Pollo con Verdura - $250', 'Pollo desmenuzado con vegetales, acompañado de guarniciones.');
    menuEntryShort('Enchiladas de Pollo o Carne - $250', 'Tortillas rellenas de pollo o carne, bañadas en salsa y queso, acompañadas de arroz y frijoles. A elegir:', 'Rojas', 'Suizas', 'Verdes');
    menuEntryShort('Antojitos Mexicanos - $250', 'A elegir entre Tostadas, Flautas o Sopes. Crujientes y deliciosos, acompañados de salsas frescas y guarniciones auténticas.');
    menuEntryShort('Milanesa de Res - $290', 'Jugosa milanesa de res acompañada de papas y frijoles.');
    menuEntryShort('Fajitas de Res - $290', 'Tiras de res a la parrilla, acompañadas de papas y frijoles.');
    menuEntryShort('Carne Asada - $290', 'Deliciosa carne asada a la parrilla, jugosa y llena de sabor, acompañada de guarniciones frescas.');
}

export {
    comidaALaCarta
};
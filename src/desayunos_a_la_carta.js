function desayunosALaCarta() {
    const main = document.querySelector('.centered_food_items')

    const menuTitle = document.createElement('h1');
    menuTitle.textContent = 'Desayunos a la Carta';
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

    menuEntryShort('Hot Cakes - $190', 'Tres esponjosos hot cakes acompañados de tu elección de fruta fresca.');
    menuEntryLong('Huevos Al Gusto - $190','Incluye arroz y frijoles. Opción a elegir:', 'Huevo con jamón','Huevo con salchicha', 'Huevos rancheros', 'Huevos con tocino', 'Huevos a la mexicana' )
    menuEntryShort('Fruta de Temporada - $190', '2 frutas de temporada a elegir, incluye miel, granola y yogurt');
    menuEntryShort('Chilaquiles - $190', 'Rojos o verdes, Incluye arroz y frijoles');
    menuEntryShort('Sincronizada - $190', 'Incluye arroz y frijoles');
    menuEntryShort('Quesadillas - $190', '3 piezas (solo queso) incluye arroz y frijoles');
    menuEntryShort('Machaca A La Mexicana - $190');
    menuEntryShort('Machaca Con Huevo - $190');
}

export {
    desayunosALaCarta
};
function extrasAlt() {
    const menuTitleName = 'Extras';
    const main = document.querySelector('.centered_food_items')

    const menuTitle = document.createElement('h1');
    menuTitle.textContent = menuTitleName;
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

    menuEntryShort('Arroz y Frijoles - $40');
    menuEntryShort('Salsa Bandera - $40');
    menuEntryShort('Papas Fritas - $60');
    menuEntryShort('Dos Huevos - $30');
    menuEntryShort('Pan de Barra (3 Piezas) - $25');
    menuEntryShort('Guacamole con Totopos - $70');
}

export {
    extrasAlt
};
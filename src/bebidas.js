function bebidasAlt() {
    const menuTitleName = 'Bebidas';
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
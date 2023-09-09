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

    menuEntryLong('Todos los días', '$190 por platillo', '2 guisados diferentes a elegir con acompañamiento de sopa');
    menuEntryLong('Sábado y Domingo', '$190 por platillo', 'Menudo', 'Pozole');
    menuEntryLong('$190 por platillo', 'Club sandwich', 'Caldo de pollo', 'Hot dogs (2 piezas)', 'Hamburguesa');
    menuEntryLong('$250 por platillo', 'Pollo estilo sinaloa', 'Fajitas de pollo', 'Pechuga a la plancha', 'Hamburguesa', 
    'Milanesa de pollo','Machaca de pollo con verdura', 'Enchiladas de pollo o carne (Rojas, suizas, verdes)', 'Antojitos Mexicanos (Tostadas, Flautas, Sopes)');
    menuEntryLong('$290 por platillo', 'Milanesa de res (Incluye papas y frijol)', 'Fajitas de res (Incluye papas y frijol)', 'Carne asada')
}

export {
    comidaALaCarta
};
import logo from './images/youkoso_logo_color.svg';

function createNav() {
    const contentDiv = document.getElementById('content');

    const navBar = document.createElement('nav');
    navBar.setAttribute('id', 'nav_bar');
    contentDiv.appendChild(navBar);

    const youkosoLogo = new Image();
    youkosoLogo.src = logo;
    youkosoLogo.classList.add('nav_logo');
    navBar.appendChild(youkosoLogo)

    const navDivider = document.createElement('hr');
    navDivider.classList.add('nav_divider');
    navBar.appendChild(navDivider);

    const menuItems = document.createElement('ul');
    menuItems.classList.add('menu_items');
    navBar.appendChild(menuItems);

    const listButton1 = document.createElement('li');
    menuItems.appendChild(listButton1);
    const button1 = document.createElement('button');
    button1.textContent = 'Desayunos de cortesía';
    button1.classList.add('nav_button');
    button1.classList.add('desayunos_de_cortesia');
    listButton1.appendChild(button1);

    const listButton2 = document.createElement('li');
    menuItems.appendChild(listButton2);
    const button2 = document.createElement('button');
    button2.textContent = 'Desayunos a la carta';
    button2.classList.add('nav_button');
    button2.classList.add('desayunos_a_la_carta');
    listButton2.appendChild(button2);

    const listButton3 = document.createElement('li');
    menuItems.appendChild(listButton3);
    const button3 = document.createElement('button');
    button3.textContent = 'Comida a la carta';
    button3.classList.add('nav_button');
    button3.classList.add('comida_a_la_carta');
    listButton3.appendChild(button3);

    const listButton4 = document.createElement('li');
    menuItems.appendChild(listButton4);
    const button4 = document.createElement('button');
    button4.textContent = 'Bebidas';
    button4.classList.add('nav_button');
    button4.classList.add('bebidas');
    listButton4.appendChild(button4);

    const listButton5 = document.createElement('li');
    menuItems.appendChild(listButton5);
    const button5 = document.createElement('button');
    button5.textContent = 'Extras';
    button5.classList.add('nav_button');
    button5.classList.add('extras');
    listButton5.appendChild(button5);

    const hamburgerMenu = document.createElement('a');
    hamburgerMenu.setAttribute('href', 'javascript:void(0);');
    hamburgerMenu.classList.add('mobile_hamburger_icon');
    navBar.appendChild(hamburgerMenu);

    const main = document.createElement('main');
    main.classList.add('centered_food_items');
    contentDiv.appendChild(main);
}

export {
    createNav
};
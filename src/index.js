import './style_restaurant.css';
import { createNav } from './nav_create';
import { initializeNav } from './nav_initialize';
import { desayunosDeCortesia } from "./desayunos_de_cortesia";

// Create nav bar and add click event listeners
createNav();
initializeNav();
// Load the first page in site
desayunosDeCortesia();

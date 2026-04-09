import "../scss/app.scss";
//import * as bootstrap from 'bootstrap';

//Note:
//1)Treeshaking logic will include all bootstrap modules unless we import from specific files
//so don't do import {Dropdown} from 'bootstrap'

//2)You may need to include bootstrap JS files in the PurgeCSS configuration
//or it will ignore dynamic CSS classes (i.e. show, toggle)

//3)Include the path to node_modules in the path to the bootstrap file
//or PurgeCSS might exclude necessary CSS

import Tooltip from '../../node_modules/bootstrap/js/src/tooltip'
//Needed for dropdown in navbar
import Dropdown from '../../node_modules/bootstrap/js/src/dropdown'
//Needed for navbar in mobile mode
import Collapse from '../../node_modules/bootstrap/js/src/collapse'

//Export bootstrap
let bootstrap = {};
bootstrap.Tooltip = Tooltip;
bootstrap.Dropdown = Dropdown;
bootstrap.Collapse = Collapse;
window.bootstrap = bootstrap;

//Initialize all tooltips on the page
const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))
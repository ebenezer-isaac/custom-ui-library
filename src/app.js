import Tooltip from './custom-ui/tooltip'
import Dropdown from './custom-ui/dropdown'
import Tabs from './custom-ui/tabs'
import Snackbar from './custom-ui/snackbar'

const tooltip = new Tooltip(document.querySelector(".tooltip"));
const dropdowns = document.querySelectorAll(".dropdown");
const tab = document.querySelector('.tabs');
const snackbar = new Snackbar();
const tabs = new Tabs(tab);
const button = document.querySelector('button')
dropdowns.forEach(dropdown => {
    const instance = new Dropdown(dropdown);
    instance.init();
})
button.addEventListener('click', () => {
    snackbar.show('You clicked me :)')
})
snackbar.init();
tooltip.init();
tabs.init();



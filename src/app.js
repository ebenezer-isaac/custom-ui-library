import Tooltip from './custom-ui/tooltip'
import Dropdown from './custom-ui/dropdown'
const tooltip = new Tooltip(document.querySelector(".tooltip"));
const dropdowns = document.querySelectorAll(".dropdown");
dropdowns.forEach(dropdown=>{
    const instance = new Dropdown(dropdown);
    instance.init();
})
tooltip.init();



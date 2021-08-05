import Tooltip from './custom-ui/tooltip'
import Dropdown from './custom-ui/dropdown'
import Tabs from './custom-ui/tabs'
const tooltip = new Tooltip(document.querySelector(".tooltip"));
const dropdowns = document.querySelectorAll(".dropdown");
const tab = document.querySelector('.tabs');
dropdowns.forEach(dropdown=>{
    const instance = new Dropdown(dropdown);
    instance.init();
})
tooltip.init();
const tabs = new Tabs(tab);
tabs.init();



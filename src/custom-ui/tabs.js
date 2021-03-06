import './styles/tabs.css'
 
class Tabs {
    constructor(container) {
        this.container = container;
        this.tabs = container.querySelectorAll('.trigger')
    }

    init() {
        this.tabs.forEach(tab => {
            tab.addEventListener('click', e => {
                this.toggleTabs(e);
            })
        })
    }

    toggleTabs(e) {
        this.tabs.forEach(tab => tab.classList.remove("active"))
        e.target.classList.add("active")
    }

    toggleContent(e) {
        this.container.querySelectorAll('.content').forEach(tab => tab.classList.remove("active"))
        this.container.querySelectorAll(e.target.getAttribute("data-target")).classList.add("active");
    }
}
export {Tabs as default};
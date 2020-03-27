import ItemService from "../Services/ItemService.js";
import _store from "../store.js"


function _draw() {
    let template = ""
    let items = _store.State.items

    items.forEach((item, index) => template += item.getTemplate(index))
    document.getElementById("item").innerHTML = template
}


//Public
export default class ItemController {
    constructor() {
        _draw()

    }

    buyMilkyWay(event) {

    }

}
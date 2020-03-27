export default class Item {
    constructor(data) {
        this.title = data.title
        this.description = data.description
        this.price = data.price
        this.stock = data.stock
    }

    get Template() {
        return this.title
    }
}
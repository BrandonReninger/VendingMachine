export default class Money {
    constructor(data) {
        this.quarters = data.quarters
    }

    get Template() {
        return this.quarters
    }
}
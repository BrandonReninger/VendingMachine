import Value from "./Models/Value"
import Item from "./Models/Item.js"
import Money from "./Models/Money.js"

let _state = {
  activeValue: new Value({
    title: "Value"
  }),
  /** @type {Value[]} */
  values: [],
  /**@type {Item[]} */
  items: [],
  /**@type {Money[]} */
  moneys: []
};


class Store {
  /**
   * Provides access to application state data
   */
  get State() {
    return _state;
  }
}

const STORE = new Store();
export default STORE;
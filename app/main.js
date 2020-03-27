import ItemController from "./Controllers/ItemController.js";
import MoneyController from "./Controllers/MoneyController.js";

class App {
  itemController = new ItemController();
  moneyController = new MoneyController();
}

window["app"] = new App();
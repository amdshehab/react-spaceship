import { observable, action } from "mobx";

class Store {
  @observable x = 0;
  @observable y = 0;

  @action incrementPosition(arg) {
    if (arg === "vertical") this.y++;
    if (arg === "horizontal") this.x++;
  }
}

export default Store;

import { makeAutoObservable, runInAction } from "mobx";
import agent from "../agent";

class CatStore {
  currentRandomCat = null;

  constructor() {
    makeAutoObservable(this);
  }

  getRandomCat = async () => {
    try {
      const { file: catPictureUrl } = await agent.Cat.getRandom();
      runInAction(() => {
        this.currentRandomCat = catPictureUrl;
      });
    } catch (e) {
      console.error(e);
      runInAction(() => {
        this.currentRandomCat = null;
      });
    }
  };
}

export default CatStore;

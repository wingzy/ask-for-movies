import { makeAutoObservable } from "mobx";

class MovieStore {
  constructor() {
    makeAutoObservable(this);
  }
}

export default MovieStore;

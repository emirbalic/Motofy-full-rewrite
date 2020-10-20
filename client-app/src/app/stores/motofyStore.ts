import { RootStore } from './rootStore';
import { observable, action, runInAction } from 'mobx';
import { IMotofy } from '../models/motofy';
import agent from '../api/agent';

export default class MotofyStore {
  rootStore: RootStore;
  constructor(rootStore: RootStore) {
    this.rootStore = rootStore;
  }

  @observable motofy: IMotofy | null = null;
  @observable motofies: IMotofy[] = [];

  @observable motofyRegistry = new Map();

  @observable loadingInitial = false;

  //   @computed get motofiesByDate() {
  //     return this.groupMotofiesByDate(Array.from(this.motofyRegistry.values()));
  //   }
  //   groupMotofiesByDate(motofies: IMotofy[]) {
  //     const sortedMotofies = motofies.sort(
  //         // (a, b) => a.datePublished?.getTime() - b.datePublished?.getTime()
  //     )
  //   }

  @action loadMotofies = async () => {
    // this.loadingInitial = true;

    try {
      const motofies = await agent.Motofies.list();
      runInAction('loading mototofies', () => {
        this.motofies = motofies;
        motofies.forEach((motofy) => {
          //   console.log('motofyId: ', motofy.id);
          this.motofyRegistry.set(motofy.id, motofy);
        });
      });
      // console.log(this.motofyRegistry);
      //   this.loadingInitial = false;
    } catch (error) {
      console.log(error);
      // this.loadingInitial = false;
    }
  };
}

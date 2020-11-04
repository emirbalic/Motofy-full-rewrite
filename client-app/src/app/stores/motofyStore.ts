import { RootStore } from './rootStore';
import { observable, action, runInAction } from 'mobx';
import { IMotofy } from '../models/motofy';
import agent from '../api/agent';

export default class motofyStore {
  rootStore: RootStore;
  constructor(rootStore: RootStore) {
    this.rootStore = rootStore;
  }

  @observable motofyRegistry = new Map();

  @observable motofy: IMotofy | undefined;
  @observable motofies: IMotofy[] = [];


  @observable loadingInitial = false;

  //   @computed get motofiesByDate() {
  //     return this.groupMotofiesByDate(Array.from(this.motofyRegistry.values()));
  //   }
  //   groupMotofiesByDate(motofies: IMotofy[]) {
  //     const sortedMotofies = motofies.sort(
  //         // (a, b) => a.datePublished?.getTime() - b.datePublished?.getTime()
  //     )
  //   }

  // @action loadMotofies = async () => {
  //   this.loadingInitial = true;
  //   agent.Motofies.list()
  //     .then(motofies => {
  //       motofies.forEach((motofy) => {
  //         this.motofies.push(motofy);
  //         console.log('xxxxxxx')
  //       })
  //     });
  //     //finally(() => this.loadingInitial = false)
  // };

  @action loadMotofies = async () => {
    this.loadingInitial = true;

    try {
      const motofies = await agent.Motofies.list();
      // motofies.forEach(motofy => {
      //   // motofy.datePublished = motofy.datePublished.split('.')[0];
      //   this.motofyRegistry.set(motofy.id, motofy);
      // })
      runInAction('loading mototofies', () => {
        this.loadingInitial = false;
        this.motofies = motofies; 
        // console.log('Im here');
      });
    } catch (error) {
      runInAction(() => {
        this.loadingInitial = false;
      });
      console.log(error);
    }
  };

  @action loadMotofy = async (id: string) => {
    let motofy = this.getMotofy(id);
    console.log(motofy);
    if (motofy) {
      this.motofy = motofy;
    } else {
      this.loadingInitial = true;
      try {
        motofy = await agent.Motofies.details(id);
        runInAction('getting motofy', () => {
          this.motofy = motofy;
          this.loadingInitial = false;
        });
      } catch (error) {
        runInAction('Getting activity error', () => {
          this.loadingInitial = false;
        });
        console.log(error);
      }
    }
  };

  getMotofy = (id: string) => {

    return this.motofies.find((x) => x.id === id);
  };
}

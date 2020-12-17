// import { RootStore } from './rootStore';
import { observable, action, runInAction } from 'mobx';
import { IMotofy } from '../models/motofy';
import agent from '../api/agent';
import { createContext } from 'react';

class MotofyStore {
  // rootStore: RootStore;
  // constructor(rootStore: RootStore) {
  //   this.rootStore = rootStore;
  // }

  @observable motofyRegistry = new Map();

  @observable motofy: IMotofy | undefined;
  @observable motofies: IMotofy[] = [];

  @observable editMode = false;


  @observable loadingInitial = false;
  @observable submitting = false;



  @action loadMotofies = async () => {
    this.loadingInitial = true;

    try {
      const motofies = await agent.Motofies.list();
     
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

  @action createMotofy = async (motofy: IMotofy)=>{
    this.submitting = true;
    try {
      await agent.Motofies.create(motofy);
      this.motofies.push(motofy);
      this.editMode = false;
    } catch (error) {
      this.submitting = false;
      console.log(error);
    }
  }

  @action openCreateForm = () => {
    this.editMode = true;
    this.motofy = undefined
  }

  @action loadMotofy = async (id: string) => {
    let motofy = this.getMotofy(id);
    // console.log(motofy);
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

export default createContext(new MotofyStore());


import { action, observable, computed, configure, runInAction } from 'mobx';
import { createContext, SyntheticEvent } from 'react';
import agent from '../api/agent';
import { IMechanic } from '../models/mechanic';

configure({ enforceActions: 'always' });

class MechanicStore {
  @observable mechanicRegistry = new Map();

  @observable mechanics: IMechanic[] = [];
  @observable mechanic: IMechanic | null = null;
  @observable loadingInitial = false;
  @observable editMode = false;
  @observable submitting = false;

  @observable target = '';

  // @computed get mechanicsByDate() {  // === refactor for map
  //   return this.mechanics.sort((a, b) => Date.parse(a.datePublished) - Date.parse(b.datePublished))
  // }
  @computed get mechanicsByDate() {
    return Array.from(this.mechanicRegistry.values()).sort(
      (a, b) => Date.parse(a.datePublished) - Date.parse(b.datePublished)
    );
  }

  @action loadMechanics = async () => {
    this.loadingInitial = true;
    try {
      const mechanics = await agent.Mechanics.list();
      runInAction('loading mechanics', () => {
        mechanics.forEach((mechanic) => {
          mechanic.datePublished = mechanic.datePublished?.split('.')[0];
          // this.mechanics.push(mechanic); // === refactor for map
          this.mechanicRegistry.set(mechanic.id, mechanic);
        });
        this.loadingInitial = false;
      });
    } catch (error) {
      runInAction('load mechanics error', () => {
        this.loadingInitial = false;
      });
      console.log(error);
    }
  };

  @action loadMechanic = async (id: string) => {
    let mechanic = this.getMechanic(id);
    if (mechanic) {
      this.mechanic = mechanic;
    } else {
      this.loadingInitial = true;
      try {
        mechanic = await agent.Mechanics.details(id);
        runInAction('getting mechanic', () => {
          this.mechanic = mechanic;
          this.loadingInitial = false;
        });
      } catch (error) {
        runInAction('get mechanic error', () => {
          this.loadingInitial = false;
        });
        console.log(error);
      }
    }
  };

  @action clearMechanic = () => {
    this.mechanic = null;
  }

  getMechanic = (id: string) => {
    return this.mechanicRegistry.get(id);
  };

  @action createMechanic = async (mechanic: IMechanic) => {
    this.submitting = true;
    try {
      await agent.Mechanics.create(mechanic);
      runInAction('creating mechanics', () => {
        this.mechanicRegistry.set(mechanic.id, mechanic);
        this.editMode = false;
        this.submitting = false;
      });
    } catch (error) {
      runInAction('create mechanic error', () => {
        this.submitting = false;
      });
      console.log(error);
    }
  };

  @action editMechanic = async (mechanic: IMechanic) => {
    this.submitting = true;
    try {
      // console.log('mechanic', mechanic);
      await agent.Mechanics.update(mechanic);
      runInAction('creating mechanic', () => {
        this.mechanicRegistry.set(mechanic.id, mechanic);
        this.mechanic = mechanic;
        this.editMode = false;
        this.submitting = false;
      });
    } catch (error) {
      runInAction('create mechanic error', () => {
        this.submitting = false;
      });
      console.log(error);
    }
  };

  @action deleteMechanic = async (
    event: SyntheticEvent<HTMLButtonElement>,
    id: string
  ) => {
    this.submitting = true;
    this.target = event.currentTarget.name;
    try {
      await agent.Mechanics.delete(id);
      runInAction('deleting mechanic', () => {
        this.mechanicRegistry.delete(id);
        this.submitting = false;
        this.target = '';
      });
    } catch (error) {
      runInAction('delete mechanic error', () => {
        this.submitting = false;
        this.target = '';
      });
      console.log(error);
    }
  };

  @action openCreateForm = () => {
    this.editMode = true;
    this.mechanic = null;
  };
  @action openEditForm = (id: string) => {
    this.mechanic = this.mechanicRegistry.get(id);
    // console.log(this.mechanic?.yearOfStart);
    this.editMode = true;
  };
  @action cancelSelectedMechanic = () => {
    this.mechanic = null;
  };
  @action cancelFormOpen = () => {
    this.editMode = false;
    // TODO: GO BACK WHEREVER YOU WERE
  };

  @action selectMechanic = (id: string) => {
    // this.selectedMechanic = this.mechanics.find(m => m.id === id); // === refactor for map
    this.mechanic = this.mechanicRegistry.get(id);
    this.editMode = false;
  };
}

export default createContext(new MechanicStore());

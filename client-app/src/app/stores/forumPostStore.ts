import { observable, action, computed, configure, runInAction } from 'mobx';
import { createContext, SyntheticEvent } from 'react';
import agent from '../api/agent';
import { IForumpost } from '../models/forumpost';

configure({ enforceActions: 'always' });

class ForumPostStore {
  @observable forumPostRegistry = new Map();
  @observable forumposts: IForumpost[] = [];
  @observable selectedForum: IForumpost | undefined;
  @observable loadingInitial = false;
  @observable editMode = false;
  @observable submitting = false;

  @observable target = '';

  @computed get forumpostsByDate() {
    return Array.from(this.forumPostRegistry.values()).sort(
      (a, b) => Date.parse(a.dateAdded) - Date.parse(b.dateAdded)
    );
  }

  @action loadForumPosts = async () => {
    this.loadingInitial = true;
    try {
      const forumposts = await agent.Forumposts.list();
      runInAction('loading forumposts', () => {
        forumposts.forEach((forumpost) => {
          this.forumPostRegistry.set(forumpost.id, forumpost);
        });
        this.loadingInitial = false;
      });
    } catch (error) {
      runInAction('load forumposts error', () => {
        this.loadingInitial = false;
      });
      console.log(error);
    }
  };
  // === PROMISE (same functionality as a reference)===
  // @action loadForumPosts = () => {
  //   this.loadingInitial = true;
  //   agent.Forumposts.list()
  //     .then(forumPosts => {
  //       forumPosts.forEach((forumpost) => {
  //         forumpost.dateAdded = forumpost.dateAdded.split('.')[0];
  //         this.forumposts.push(forumpost);
  //       });
  //     }).finally(() => (this.loadingInitial = false));
  // };

  @action createForumpost = async (forumpost: IForumpost) => {
    this.submitting = true;
    try {
      await agent.Forumposts.create(forumpost);
      runInAction('creating forumposts', () => {
        this.forumPostRegistry.set(forumpost.id, forumpost);
        this.editMode = false;
        this.submitting = false;
      });
    } catch (error) {
      runInAction('create forumpost error', () => {
        this.submitting = false;
      });
      console.log(error);
    }
  };
  @action editForumpost = async (forumpost: IForumpost) => {
    this.submitting = true;
    try {
      await agent.Forumposts.update(forumpost);
      runInAction('editing forumpost', () => {
        this.forumPostRegistry.set(forumpost.id, forumpost);
        this.selectedForum = forumpost;
        this.editMode = false;
        this.submitting = false;
      });
    } catch (error) {
      runInAction('edit forumpost error', () => {
        this.submitting = false;
      });
      console.log(error);
    }
  };

  @action deleteForumpost = async (
    event: SyntheticEvent<HTMLButtonElement>,
    id: string
  ) => {
    this.submitting = true;
    this.target = event.currentTarget.name;
    try {
      await agent.Forumposts.delete(id);
      runInAction('deleting forumpost', () => {
        this.forumPostRegistry.delete(id);
        this.submitting = false;
        this.target = '';
      });
    } catch (error) {
      runInAction('delete forumpost error', () => {
        this.submitting = false;
        this.target = '';
      });
      console.log(error);
    }
  };

  @action openCreateForm = () => {
    this.editMode = true;
    this.selectedForum = undefined;
  };

  @action openEditForm = (id: string) => {
    this.selectedForum = this.forumPostRegistry.get(id);
    this.editMode = true;
  };

  @action cancelSelectedForumpost = () => {
    this.selectedForum = undefined;
  };

  @action cancelFormOpen = () => {
    this.editMode = false;
    // TODO: GO BACK WHEREVER YOU WERE
  };

  @action selectForum = (id: string) => {
    this.selectedForum = this.forumPostRegistry.get(id);
    this.editMode = false;
  };
}

export default createContext(new ForumPostStore());

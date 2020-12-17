import React, { useContext, useEffect } from 'react';
import { Grid } from 'semantic-ui-react';
import ForumDetails from '../details/ForumDetails';
import ForumForm from '../form/ForumForm';
import ForumList from './ForumList';
import LoadingComponent from '../../../app/layout/LoadingComponent';

import ForumPostStore  from '../../../app/stores/forumPostStore';
import { observer } from 'mobx-react-lite';

const ForumDashboard = () => {

  const forumpostStore = useContext(ForumPostStore);
  const {editMode, selectedForum} = forumpostStore;

  useEffect(() => {
    forumpostStore.loadForumPosts();
  }, [forumpostStore]);

  if (forumpostStore.loadingInitial) return <LoadingComponent content='Loading forum posts...' />;

  return (
    <div>
      <Grid>
        <Grid.Column width={10}>
          <ForumList/>
        </Grid.Column>
        <Grid.Column width={6}>
          {selectedForum && !editMode && (
            <ForumDetails/>
          )}
          {editMode && (
            <ForumForm
              forumpost={selectedForum!}/>
          )}
        </Grid.Column>
      </Grid>
    </div>
  );
};

export default observer(ForumDashboard);

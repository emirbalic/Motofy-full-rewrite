import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Grid } from 'semantic-ui-react';
import { IForumpost } from '../../../app/models/forumpost';
import ForumDetails from '../details/ForumDetails';
import ForumForm from '../form/ForumForm';
import ForumList from './ForumList';

const ForumDashboard = () => {
  const [forumposts, setForumposts] = useState<IForumpost[]>([]);
  const [selectedForum, setSelectedForum] = useState<IForumpost | null>(null);

  const [editMode, setEditMode] = useState(false);

  const handleSelectForum = (id: string) => {
    setSelectedForum(forumposts.filter((x) => x.id === id)[0]);
  };

  const handleCreateForumpost = (forumpost: IForumpost) => {
    setForumposts([...forumposts, forumpost]);
    setSelectedForum(forumpost);
    setEditMode(false);
  };

  const handleEditForumpost = (forumpost: IForumpost) => {
    setForumposts([
      ...forumposts.filter((a) => a.id !== forumpost.id),
      forumpost,
    ]);
    setSelectedForum(forumpost);
    setEditMode(false);
  };

  const handleDeleteForumpost = (id: string) => {
    setForumposts([...forumposts.filter((a) => a.id !== id)]);
  };

  useEffect(() => {
    axios.get('http://localhost:5000/api/forumposts').then((response) => {
      setForumposts(response.data);
    });
  }, []);

  return (
    <div>
      <Grid>
        <Grid.Column width={10}>
          <ForumList
            forumposts={forumposts}
            selectForum={handleSelectForum}
            deleteForumpost={handleDeleteForumpost}
          />
        </Grid.Column>
        <Grid.Column width={6}>
          {selectedForum && !editMode && (
            <ForumDetails
              setSelectedForum={setSelectedForum}
              forumpost={selectedForum}
              setEditMode={setEditMode}
            />
          )}
          {editMode && (
            <ForumForm
              setEditMode={setEditMode}
              forumpost={selectedForum!}
              createForumpost={handleCreateForumpost}
              editForumpost={handleEditForumpost}
            />
          )}
        </Grid.Column>
      </Grid>
    </div>
  );
};

export default ForumDashboard;

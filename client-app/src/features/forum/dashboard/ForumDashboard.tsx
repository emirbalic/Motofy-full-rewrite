import React, { SyntheticEvent, useEffect, useState } from 'react';
import { Grid } from 'semantic-ui-react';
import { IForumpost } from '../../../app/models/forumpost';
import ForumDetails from '../details/ForumDetails';
import ForumForm from '../form/ForumForm';
import ForumList from './ForumList';
import agent from '../../../app/api/agent';
import LoadingComponent from '../../../app/layout/LoadingComponent';
const ForumDashboard = () => {
  const [forumposts, setForumposts] = useState<IForumpost[]>([]);
  const [selectedForum, setSelectedForum] = useState<IForumpost | null>(null);

  const [loading, setLoading] = useState(true);
  const [submittting, setSubmitting] = useState(false);

  // isolate button
  const [target, setTarget] = useState('');

  const [editMode, setEditMode] = useState(false);

  const handleSelectForum = (id: string) => {
    setSelectedForum(forumposts.filter((x) => x.id === id)[0]);
    setEditMode(false);
  };

  const handleCreateForumpost = (forumpost: IForumpost) => {
    setSubmitting(true);
    agent.Forumposts.create(forumpost).then(() => {
      setForumposts([...forumposts, forumpost]);
      setSelectedForum(forumpost);
      setEditMode(false);
    }).then(() => setSubmitting(false));
  };

  const handleEditForumpost = (forumpost: IForumpost) => {
    setSubmitting(true);
    
    agent.Forumposts.update(forumpost).then(() => {
      setForumposts([
        ...forumposts.filter((a) => a.id !== forumpost.id),
        forumpost,
      ]);
      setSelectedForum(forumpost);
      setEditMode(false);
    }).then(() => setSubmitting(false));
  };
  
  const handleDeleteForumpost = (event: SyntheticEvent<HTMLButtonElement>, id: string) => {
    setSubmitting(true);
    setTarget(event.currentTarget.name);
    agent.Forumposts.delete(id).then(() => {
      setForumposts([...forumposts.filter((a) => a.id !== id)]);
    }).then(() => setSubmitting(false));
  };

  useEffect(() => {
    // axios.get('http://localhost:5000/api/forumposts')
    agent.Forumposts.list()
      .then((response) => {
        let forumposts: IForumpost[] = [];
        response.forEach((forumpost) => {
          forumpost.dateAdded = forumpost.dateAdded.split('.')[0];
          forumposts.push(forumpost);
        });
        setForumposts(forumposts);
      })
      .then(() => {
        setLoading(false);
      });
  }, []);

  if(loading) return <LoadingComponent content='Loading forum posts...'/>

  return (
    <div>
      <Grid>
        <Grid.Column width={10}>
          <ForumList
            forumposts={forumposts}
            selectForum={handleSelectForum}
            deleteForumpost={handleDeleteForumpost}
            submittting={submittting}
            target={target}
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
              submittting={submittting}
            />
          )}
        </Grid.Column>
      </Grid>
    </div>
  );
};

export default ForumDashboard;

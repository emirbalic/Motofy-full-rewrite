import React, { FormEvent, useContext, useState } from 'react';
import { Button, Form, Segment } from 'semantic-ui-react';
import { IForumpost } from '../../../app/models/forumpost';
import { v4 as uuid } from 'uuid';
import { RootStoreContext } from '../../../app/stores/rootStore';

// key==65:secondpart

interface IProps {
  setEditMode: (editMode: boolean) => void;
  forumpost: IForumpost;
  createForumpost: (forumpost: IForumpost) => void;
  editForumpost: (forumpost: IForumpost) => void;
  submittting: boolean;
}
const ForumForm: React.FC<IProps> = ({
  setEditMode,
  forumpost: initialFormState,
  createForumpost,
  editForumpost,
  submittting,
}) => {
  const rootStore = useContext(RootStoreContext);
  const { user, logout } = rootStore.userStore;

  const initializeForm = () => {
    if (initialFormState) {
      return initialFormState;
    } else {
      return {
        id: '',
        title: '',
        category: '',
        body: '',
        dateAdded: '',
        displayName: '',
      };
    }
  };

  const [forumpost, setForumpost] = useState<IForumpost>(initializeForm);

  const handleSubmit = () => {
    // console.log('newForumpost about to');
    if (forumpost.id.length === 0) {
      let newForumpost = {
        title: forumpost.title,
        body: forumpost.body,
        category: forumpost.category,
        id: uuid(),
        displayName: user!.displayName,
        // dateAdded: Date.now().toISOString(),
        dateAdded: Date.now().toString(),
        // dateAdded: "2020-11-01T16:09:31",
        authorId: 'a',

        // ili
        // ...forumpost,
        // id: uuid(),
        // displayName: user!.displayName,
        // dateAdded: Date.now().toString(),
      };

      createForumpost(newForumpost);
    } else if (forumpost.id.length > 0) {
      editForumpost(forumpost);
    }
  };

  const handleInputChange = (
    event: FormEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = event.currentTarget;
    setForumpost({ ...forumpost, [name]: value });
  };
  return (
    <Segment clearing>
      <Form onSubmit={handleSubmit}>
        <Form.Input
          onChange={handleInputChange}
          name='title'
          placeholder='title'
          value={forumpost.title}
        />
        <Form.TextArea
          onChange={handleInputChange}
          name='body'
          rows={4}
          placeholder='body'
          value={forumpost.body}
        />
        <Form.Input
          onChange={handleInputChange}
          name='category'
          placeholder='category'
          value={forumpost.category}
        />
        <Button
          loading={submittting}
          floated='right'
          positive
          type='submit'
          content='submit'
        />
        <Button
          floated='right'
          type='butoon'
          content='cancel'
          onClick={() => setEditMode(false)}
        />
      </Form>
    </Segment>
  );
};

export default ForumForm;

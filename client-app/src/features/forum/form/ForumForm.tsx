import React, { FormEvent, useContext, useState } from 'react';
import { Button, Form, Segment } from 'semantic-ui-react';
import { IForumpost } from '../../../app/models/forumpost';
import { v4 as uuid } from 'uuid';
import ForumPostStore from '../../../app/stores/forumPostStore';
import { observer } from 'mobx-react-lite';


interface IProps {
  forumpost: IForumpost;
}
const ForumForm: React.FC<IProps> = ({
  forumpost: initialFormState,
}) => {
  const forumPostStore = useContext(ForumPostStore);
  const { createForumpost, editForumpost, submitting, cancelFormOpen } = forumPostStore;


  const initializeForm = () => {
    if (initialFormState) {
      return initialFormState;
    } else {
      return {
        id: '',
        title: '',
        category: '',
        body: '',
        dateAdded: ''//Date.now().toString(),
        // displayName: '',
      };
    }
  };

  const [forumpost, setForumpost] = useState<IForumpost>(initializeForm);

  const handleSubmit = () => {
    if (forumpost.id.length === 0) {
      let dateToSend = new Date();
      let newForumpost = {
        ...forumpost,
        id: uuid(),
        dateAdded: dateToSend.toISOString()
      };
      createForumpost(newForumpost);
    } else {
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
          loading={submitting}
          floated='right'
          positive
          type='submit'
          content='submit'
        />
        <Button
          floated='right'
          type='butoon'
          content='cancel'
          onClick={cancelFormOpen}
        />
      </Form>
    </Segment>
  );
};

export default observer(ForumForm);

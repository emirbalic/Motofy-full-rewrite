import { observer } from 'mobx-react-lite';
import React, { useContext } from 'react';
import { Button, Card, Image, Label } from 'semantic-ui-react';

import ForumPostStore from '../../../app/stores/forumPostStore';

const ForumDetails: React.FC = () => {
  const forumpostStore = useContext(ForumPostStore);
  const {
    selectedForum: forumpost,
    openEditForm,
    cancelSelectedForumpost,
  } = forumpostStore;

  return (
    <Card fluid>
      <Image
        src={`/assets/forumCategoryImages/${forumpost!.category}.jpg`}
        wrapped
        ui={false}
      />

      <Card.Content>
        <Card.Header>{forumpost!.title}</Card.Header>
        <Label>{forumpost!.category}</Label>
        <Card.Meta>
          <span>{forumpost!.dateAdded}</span>
        </Card.Meta>
        <Card.Description>{forumpost!.body}</Card.Description>
      </Card.Content>
      <Card.Content extra>
        <Button.Group widths={2}>
          <Button
            basic
            color='blue'
            content='edit'
            onClick={() => openEditForm(forumpost!.id)}
          />
          <Button
            basic
            color='grey'
            content='cancel'
            onClick={cancelSelectedForumpost}
          />
        </Button.Group>
      </Card.Content>
    </Card>
  );
};

export default observer(ForumDetails);

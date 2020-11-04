import React from 'react';
import { Button, Card, Image, Label } from 'semantic-ui-react';
import { IForumpost } from '../../../app/models/forumpost';

interface IProps {
  forumpost: IForumpost;
  setEditMode: (mode: boolean) => void;
  setSelectedForum: (forumpost: IForumpost | null) => void;
}
const ForumDetails: React.FC<IProps> = ({
  forumpost,
  setEditMode,
  setSelectedForum,
}) => {
  return (
    <Card fluid>
      {/* <Image src={`/assets/placeholder.png`} wrapped ui={false} /> */}
      <Image
        src={`/assets/forumCategoryImages/${forumpost.category}.jpg`}
        wrapped
        ui={false}
      />

      <Card.Content>
        <Card.Header>{forumpost.title}</Card.Header>
        <Label>{forumpost.category}</Label>
        <Card.Meta>
          <span>{forumpost.dateAdded}</span>
        </Card.Meta>
        <Card.Description>{forumpost.body}</Card.Description>
      </Card.Content>
      <Card.Content extra>
        <Button.Group widths={2}>
          <Button
            basic
            color='blue'
            content='edit'
            onClick={() => setEditMode(true)}
          />
          <Button
            basic
            color='grey'
            content='cancel'
            onClick={() => setSelectedForum(null)}
          />
        </Button.Group>
      </Card.Content>
    </Card>
  );
};

export default ForumDetails;

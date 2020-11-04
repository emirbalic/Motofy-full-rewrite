import React, { SyntheticEvent } from 'react';
import { Button, Item, Label, Segment } from 'semantic-ui-react';
import { IForumpost } from '../../../app/models/forumpost';

interface IProps {
  forumposts: IForumpost[];
  selectForum: (id: string) => void;
  deleteForumpost: (e: SyntheticEvent<HTMLButtonElement>, id: string) => void;
  submittting: boolean;
  target: string;
}

const ForumList: React.FC<IProps> = ({
  forumposts,
  selectForum,
  deleteForumpost,
  submittting,
  target,
}) => {
  console.log('forumposts', forumposts);
  return (
    <Segment clearing>
      <Item.Group divided>
        {forumposts.map((forumpost) => (
          <Item key={forumpost.id}>
            <Item.Content>
              <Item.Header as='a'>{forumpost.title}</Item.Header>
              <Item.Meta>{forumpost.dateAdded}</Item.Meta>

              <Item.Description>
                <div>{forumpost.body}</div>
              </Item.Description>

              <Item.Description>
                <div>{forumpost.displayName}</div>
              </Item.Description>

              <Item.Extra>
                <Button
                  onClick={() => selectForum(forumpost.id)}
                  floated='right'
                  content='view'
                  color='blue'
                />
                <Button
                  name={forumpost.id}
                  loading={target === forumpost.id && submittting}
                  onClick={(e) => deleteForumpost(e, forumpost.id)}
                  floated='right'
                  content='delete'
                  color='red'
                />
                <Label basic content={forumpost.category} />
              </Item.Extra>
            </Item.Content>
          </Item>
        ))}
      </Item.Group>
    </Segment>
  );
};

export default ForumList;

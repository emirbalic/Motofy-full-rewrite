import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Icon, Item, Segment } from 'semantic-ui-react';
import { IActivity } from '../../../app/models/activity';
import { format } from 'date-fns';

// No need for an interface just one property restructured...

const ActivityListItem: React.FC<{ activity: IActivity }> = ({ activity }) => {
  return (
    <Segment.Group>
      <Segment>
        <Item.Group>
          <Item>
            <Item.Image size='tiny' circular src='/assets/user.png' />
            <Item.Content>
              <Item.Content>
                <Item.Header as='a'>{activity.title}</Item.Header>
                <Item.Description>Hosted by PIPLES</Item.Description>
              </Item.Content>
            </Item.Content>
          </Item>
        </Item.Group>
      </Segment>
      <Segment>
        <Icon name='clock' /> {format(activity.date, 'h:mm:a')}
        <Icon name='marker' /> {activity.venue}, {activity.city}
      </Segment>
      <Segment>Attendees go here</Segment>
      <Segment clearing>
        <span>{activity.description}</span>
        <Button
          as={Link}
          to={`/activities/${activity.id}`}
          floated='right'
          content='view'
          color='blue'
        />
      </Segment>
    </Segment.Group>
  );
};

export default ActivityListItem;


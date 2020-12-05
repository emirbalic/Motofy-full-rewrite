import React from 'react';
import { Button, Image, Item, Label, Segment } from 'semantic-ui-react';
import { IMechanic } from '../../../app/models/mechanic';

interface IProps {
  mechanics: IMechanic[];
  selectMechanic: (id: string) => void;
  handleDeleteMechanic: (id:string)=> void; 
}
const MechanicList: React.FC<IProps> = ({ mechanics, selectMechanic, handleDeleteMechanic }) => {
  return (
    <Segment clearing>
      <Item.Group divided>
        {mechanics.map((mechanic) => (
          <Item key={mechanic.id}>
            {/* <Item.Image size='tiny' src='/images/wireframe/image.png' /> */}

            <Item.Content>
              <Item.Header as='a'>{mechanic.name}</Item.Header>
              <Item.Meta>{mechanic.yearOfStart}</Item.Meta>
              <Item.Description>
                <div>{mechanic.city}</div>
                <div>{mechanic.country}</div>
                <div>{mechanic.address}</div>
                <div>{mechanic.description}</div>
              </Item.Description>
              <Item.Extra>
                <Button
                  onClick={() => selectMechanic(mechanic.id)}
                  floated='right'
                  content='View'
                  color='blue'
                ></Button>
                <Button
                  onClick={() => handleDeleteMechanic(mechanic.id)}
                  floated='right'
                  content='Delete'
                  color='red'
                ></Button>
                <Label basic content={mechanic.yearOfStart} />
              </Item.Extra>
            </Item.Content>
          </Item>
        ))}
      </Item.Group>
    </Segment>
  );
};

export default MechanicList;

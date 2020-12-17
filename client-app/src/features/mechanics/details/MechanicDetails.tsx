import { observer } from 'mobx-react-lite';
import React, { useContext } from 'react';
import { Button, Card, Image } from 'semantic-ui-react';
 import MechanicStore from '../../../app/stores/mechanicStore';

const MechanicDetails: React.FC = () => {
  const mechanicStore = useContext(MechanicStore);
  const {
    selectedMechanic: mechanic,
    openEditForm,
    cancelSelectedMechanic,
  } = mechanicStore;

  return (
    <Card fluid>
      <Image src={mechanic!.photoUrl || 'assets/user.png'} wrapped ui={false} />
      <Card.Content>
        <Card.Header>{mechanic!.name}</Card.Header>
        <Card.Meta>
          <span>Working since {mechanic!.yearOfStart}</span>
        </Card.Meta>
        <Card.Description>{mechanic!.description}</Card.Description>
      </Card.Content>
      <Card.Content extra>
        <Button.Group widths={2}>
          <Button
            onClick={() => openEditForm(mechanic!.id)}
            basic
            color='blue'
            content='edit'
          />
          <Button
            onClick={cancelSelectedMechanic}
            basic
            color='grey'
            content='cancel'
          />
        </Button.Group>
      </Card.Content>
    </Card>
  );
};

export default observer(MechanicDetails);

import React from 'react'
import { Button, Card, Icon, Image } from 'semantic-ui-react'
import { IMechanic } from '../../../app/models/mechanic'

interface IProps {
    // selectMechanic: (id: string) => void;
      mechanic: IMechanic;
      setEditMode: (editMode: boolean)=> void;
      setSelectedMechanic: (mechanic: IMechanic | null) => void;
}
const MechanicDetails: React.FC<IProps> = ({mechanic, setEditMode, setSelectedMechanic}) => {
// const MechanicDetails = () => {
    return (
        <Card fluid>
      <Image src={mechanic.photoUrl || '/assets/user.png'} wrapped ui={false} />
      <Card.Content>
        <Card.Header>{mechanic.name}</Card.Header>
        <Card.Meta>
    <span>Working since {mechanic.yearOfStart}</span>
        </Card.Meta>
        <Card.Description>
          {mechanic.description}
        </Card.Description>
      </Card.Content>
      <Card.Content extra>
        <Button.Group widths={2}>
          <Button onClick={() => setEditMode(true)} basic color='blue' content='edit'/>
          <Button onClick={() => setSelectedMechanic(null)} basic color='grey' content='cancel'/>
        </Button.Group>
      </Card.Content>
    </Card>
    )
}

export default MechanicDetails

import React from 'react';
import { Card, Image } from 'semantic-ui-react';
import { IMotofy } from '../../../app/models/motofy';

interface IProps {
  motofy: IMotofy;
} 
const GaleryDetails: React.FC<IProps> = ({ motofy }) => {
  return (
    <Card>
      <Image src={motofy.photoUrl || '/assets/user.png'} wrapped ui={false} />
      <Card.Content>
        <Card.Header>{motofy.name}</Card.Header>
        <Card.Meta>
          <span className='date'>{motofy.datePublished}</span>
        </Card.Meta>
        <Card.Description>{motofy.description}</Card.Description>
      </Card.Content>
      <Card.Content extra></Card.Content>
    </Card>
  );
};

export default GaleryDetails;

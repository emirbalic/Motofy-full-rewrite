import React from 'react';
import { Button, Card, Image } from 'semantic-ui-react';
import { IMotofy } from '../../../app/models/motofy';

interface IProps {
  // motofy: IMotofy;
  // selectMotofy: (id: string) => void;
  motofy: IMotofy;
  setEditMode: (editMode: boolean) => void;
  setSelectedMotofy: (activity: IMotofy | null) => void;
}

const GaleryDetails: React.FC<IProps> = ({
  motofy,
  setEditMode,
  setSelectedMotofy,
}) => {
  // const GaleryDetails = () => {

  // useEffect(() => {
  //   loadMotofy(match.params.id);
  //   // console.log(motofy)
  // }, [loadMotofy, match.params.id, history]);

  // if (loadingInitial || !motofy)
  //   return <LoadingComponent content='Loading activity...' />;

  //!!! what to do with this? need to study this case
  // if(!activity)
  //   return <h2>Not found</h2>

  // return <h1>Galery Details</h1>
  return (
    <Card fluid>
      <Image src={`/assets/placeholder.png`} wrapped ui={false} />
      <Card.Content>
        <Card.Header>{motofy.name}</Card.Header>
        <Card.Meta>
          <span>{motofy.datePublished}</span>
        </Card.Meta>
        <Card.Description>{motofy.description}</Card.Description>
      </Card.Content>
      <Card.Content extra>
        <Button.Group widths={2}>
          <Button
            onClick={() => setEditMode(true)}
            basic
            color='blue'
            content='edit'
          />
          <Button onClick={() => setSelectedMotofy(null)} basic color='grey' content='cancel' />
        </Button.Group>
      </Card.Content>
    </Card>
  );
};

export default GaleryDetails;

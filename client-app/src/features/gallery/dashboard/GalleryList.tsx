import React from 'react';
import { Button, Item, Label, Segment } from 'semantic-ui-react';

import { IMotofy } from '../../../app/models/motofy';

import { Link } from 'react-router-dom';

interface IProps {
  motofies: IMotofy[];
  selectMotofy: (id: string) => void;
  motofy: IMotofy;
}
const GalleryList: React.FC<IProps> = ({ motofies, selectMotofy, motofy }) => {
  //   const [motofies, setMotofies] = useState<IMotofy[]>([]);

  //   useEffect(() => {
  //     axios.get('http://localhost:5000/api/motofies').then((response) => {
  //       console.log(response.data);
  //       setMotofies(response.data);
  //     });
  //   }, []); //setMotofies, motofies

  return (
    // <div>
    //     <Header as='h2'>
    //         <Icon name='users'/>
    //     </Header>
    //     <List>
    //         {motofies.map((motofy) => (
    //             <List.Item key={motofy.id}>{motofy.name}</List.Item>
    //         ))}
    //     </List>
    // </div>
    <Segment clearing>
      <Item.Group divided>
        {motofies.map((motofy) => (
          <Item key={motofy.id}>
            <Item.Image size='medium' src={motofy.photoUrl} />

            <Item.Content>
              <Item.Header as='a'>{motofy.name}</Item.Header>
              <Item.Meta>{motofy.datePublished}</Item.Meta>
              <Item.Meta>{motofy.brand}</Item.Meta>
              <Item.Meta>{motofy.city}</Item.Meta>
              <Item.Description>
                {/* <Image src='https://react.semantic-ui.com/images/wireframe/short-paragraph.png' /> */}
                <div>{motofy.description}</div>
              </Item.Description>
              <Item.Extra>{motofy.yearOfProduction}</Item.Extra>
              <Item.Extra>{motofy.cubicCentimeters}</Item.Extra>
              <Item.Extra>Owner</Item.Extra>
              <Item.Extra>
                {/* <Button
                  floated='right'
                  content='view'
                  color='teal'
                  onClick={() => selectMotofy(motofy.id)}
                /> */}
                <Button
                  as={Link}
                  to={`/gallery/${motofy.id}`}
                  floated='right'
                  content='view'
                  color='blue'
                />
                <Label basic content={motofy.model} />
              </Item.Extra>
            </Item.Content>
          </Item>
        ))}
      </Item.Group>
    </Segment>
  );
};
// }

export default GalleryList;

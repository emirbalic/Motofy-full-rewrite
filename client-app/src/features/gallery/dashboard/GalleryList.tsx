import React, { useContext } from 'react';
import { Button, Image, Item, Label, Segment } from 'semantic-ui-react';

import { IMotofy } from '../../../app/models/motofy';

import GalleryListItem from './GalleryListItem';
import { RootStoreContext } from '../../../app/stores/rootStore';
import { observer } from 'mobx-react-lite';

interface IProps {
  motofies: IMotofy[];
  selectMotofy: (id: string) => void;
  handleDeleteMotofy: (id: string) => void;
}
const GalleryList: React.FC<IProps> = ({ motofies, selectMotofy, handleDeleteMotofy }) => {
  //motofies, selectMotofy, motofy
  // const GalleryList = () => {
  //motofies,
  // const rootStore = useContext(RootStoreContext);
  // const { motofies } = rootStore.motofyStore; //loadMotofies

  return (
    <Segment clearing>
      <Item.Group divided>
        {motofies.map((motofy) => (
          <Item key={motofy.id}>
            {/* <Item.Image size='tiny' src='/images/wireframe/image.png' /> */}

            <Item.Content>
              <Item.Header as='a'>{motofy.name}</Item.Header>
              <Item.Meta>{motofy.brand}</Item.Meta>
              <Item.Meta>{motofy.model}</Item.Meta>
              <Item.Description>
                <div>{motofy.description}</div>
                <div>{motofy.yearOfProduction}</div>
                <div>{motofy.datePublished}</div>
              </Item.Description>
              <Item.Extra>
                <Button
                  onClick={() => selectMotofy(motofy.id)}
                  floated='right'
                  content='View'
                  color='blue'
                ></Button>
                <Button
                  onClick={() => handleDeleteMotofy(motofy.id)}
                  floated='right'
                  content='Delete'
                  color='red'
                ></Button>
                <Label basic content={motofy.estimatedValue} />
              </Item.Extra>
            </Item.Content>
          </Item>
        ))}
      </Item.Group>
    </Segment>
    // <Segment clearing>
    //   <Item.Group divided>
    //     {motofies.map((motofy) => (
    //      <GalleryListItem key={motofy.id} motofy={motofy}/>
    //     ))}
    //   </Item.Group>
    // </Segment>
  );
};
// }

export default observer(GalleryList);

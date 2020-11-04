import React, { useContext } from 'react';
import {  Item, Segment } from 'semantic-ui-react';

import { IMotofy } from '../../../app/models/motofy';

import GalleryListItem from './GalleryListItem';
import { RootStoreContext } from '../../../app/stores/rootStore';
import { observer } from 'mobx-react-lite';

interface IProps {
  motofies: IMotofy[];
  selectMotofy: (id: string) => void;
  motofy: IMotofy;
}
// const GalleryList: React.FC<IProps> = ({ selectMotofy, motofy }) => { //motofies, 
const GalleryList = () => { //motofies, 
  const rootStore = useContext(RootStoreContext);
  const {motofies} = rootStore.motofyStore;  //loadMotofies

  
  return (
    <Segment clearing>
      <Item.Group divided>
        {motofies.map((motofy) => (
         <GalleryListItem key={motofy.id} motofy={motofy}/>
        ))}
      </Item.Group>
    </Segment>
  );
};
// }

export default observer(GalleryList);

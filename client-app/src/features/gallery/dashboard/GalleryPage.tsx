import React, { useContext, useEffect, useState } from 'react';
import { Grid, Segment } from 'semantic-ui-react';
import LoadingComponent from '../../../app/layout/LoadingComponent';
import { RootStoreContext } from '../../../app/stores/rootStore';
import GalleryList from './GalleryList';
import axios from 'axios';
import { IMotofy } from '../../../app/models/motofy';
import GaleryDetails from '../details/GaleryDetails';

const GalleryPage = () => {
  //   const rootStore = useContext(RootStoreContext);
  //   const {loadMotofies, motofies} = rootStore.motofyStore;

  //   useEffect ( () => {
  //     loadMotofies()
  //   }, [loadMotofies, motofies]);

  const [motofies, setMotofies] = useState<IMotofy[]>([]);
  const [selectedMotofy, setSelectedMotofy] = useState<IMotofy | null>(null);

  const handleSelectMotofy = (id: string) => {
    setSelectedMotofy(motofies.filter((m) => m.id === id)[0]);
  };

  useEffect(() => {
    axios.get('http://localhost:5000/api/motofies').then((response) => {
      console.log(response.data);
      setMotofies(response.data);
    });
  }, []); //setMotofies, motofies

  return (
    <Grid>
      <Grid.Column width={2}>
        <h2 style={{ minHeight: '300px' }}>Left sidebar</h2>
      </Grid.Column>
      <Grid.Column width={10}>
        <GalleryList
          motofies={motofies}
          selectMotofy={handleSelectMotofy}
          motofy={selectedMotofy!}
        />
      </Grid.Column>
      <Grid.Column width={4}>
        {/* <h2 style={{ minHeight: '300px' }}>Right sidebar</h2> */}
        {selectedMotofy && <GaleryDetails motofy={selectedMotofy!} />}
      </Grid.Column>
    </Grid>
  );
};

export default GalleryPage;

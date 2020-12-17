import React, {  useEffect, useState } from 'react';
import { Grid, } from 'semantic-ui-react';
import agent from '../../../app/api/agent';
import { IMotofy } from '../../../app/models/motofy';
import GaleryDetails from '../details/GaleryDetails';
import GalleryForm from '../form/GalleryForm';
import GalleryList from './GalleryList';

const GalleryDashboard = () => {
  const [motofies, setMotofies] = useState<IMotofy[]>([]);
  const [selectedMotofy, setSelectedMotofy] = useState<IMotofy | null>(null);

  const [editMode, setEditMode] = useState(false);

  const handleSelectedMotofy = (id: string) => {
    setSelectedMotofy(motofies.filter((m) => m.id === id)[0]);
    setEditMode(false);
  };

  const handleDeleteMotofy = (id: string) => {
    setMotofies([...motofies.filter((m) => m.id !== id)]);
  };


  const handleEditMotofy = (motofy: IMotofy) => {
          

    setMotofies([...motofies.filter(m => m.id !== motofy.id), motofy])
  };

  useEffect(() => {
    agent.Motofies.list()
      .then((response) => {
        let motofies: IMotofy[] = [];
        response.forEach((motofy) => {
          motofy.datePublished = motofy.datePublished!.split('.')[0];
          motofies.push(motofy);
        });
        setMotofies(motofies);
      })
      // .then(() => setLoading(false))
      ;
  });
  return (
    <Grid>
      <Grid.Column width={10}>
        <GalleryList
          handleDeleteMotofy={handleDeleteMotofy}
          selectMotofy={handleSelectedMotofy}
          motofies={motofies}
        ></GalleryList>
      </Grid.Column>
      <Grid.Column width={6}>
        {selectedMotofy && !editMode && (
          <GaleryDetails
            setSelectedMotofy={setSelectedMotofy}
            motofy={selectedMotofy}
            setEditMode={setEditMode}
          />
        )}
        {editMode && (
          <GalleryForm
            key={(selectedMotofy && selectedMotofy.id) || 0}
            setEditMode={setEditMode}
            motofy={selectedMotofy!}
            editMotofy={handleEditMotofy}
          />
        )}
      </Grid.Column>
    </Grid>
  );
};

export default GalleryDashboard;

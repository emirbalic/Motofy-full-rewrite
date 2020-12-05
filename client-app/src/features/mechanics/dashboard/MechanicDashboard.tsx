import React, { useEffect, useState } from 'react';
import { Grid, Sticky } from 'semantic-ui-react';

import agent from '../../../app/api/agent';
import { IMechanic } from '../../../app/models/mechanic';
import MechanicDetails from '../details/MechanicDetails';
import MechanicForm from '../form/MechanicForm';
import MechanicList from './MechanicList';

const MechanicDashboard = () => {
  const [mechanics, setMechanics] = useState<IMechanic[]>([]);

  const [selectedMechanic, setSelectedMechanic] = useState<IMechanic | null>(
    null
  );

  const [editMode, setEditMode] = useState(false);

  const handleSelectedMechanic = (id: string) => {
    setSelectedMechanic(mechanics.filter((m) => m.id === id)[0]);
    setEditMode(false);
  };

  // const handeOpenCreateForm = () => {
  //   setSelectedMechanic(null);
  //   setEditMode(true);
  // }
  const handleDeleteMechanic = (id: string) => {
    setMechanics([...mechanics.filter((m) => m.id !== id)]);
  };

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    agent.Mechanics.list()
      .then((response) => {
        let mechanics: IMechanic[] = [];
        response.forEach((mechanic) => {
          mechanic.datePublished = mechanic.datePublished?.split('.')[0];
          mechanics.push(mechanic);
        });
        setMechanics(mechanics);
      })
      .then(() => {
        setLoading(false);
        console.log('mechanics', mechanics);
      });
  }, []);
  return (
    <Grid>
      <Grid.Column width={10}>
        <MechanicList
        handleDeleteMechanic={handleDeleteMechanic}
          selectMechanic={handleSelectedMechanic}
          mechanics={mechanics}
        ></MechanicList>
      </Grid.Column>

      <Grid.Column width={6}>
        <Sticky>
          {selectedMechanic && !editMode && (
            <MechanicDetails
              setSelectedMechanic={setSelectedMechanic}
              mechanic={selectedMechanic}
              setEditMode={setEditMode}
            />
          )}
          {editMode && (
            <MechanicForm
              key={(selectedMechanic && selectedMechanic.id) || 0}
              setEditMode={setEditMode}
              mechanic={selectedMechanic!}
            />
          )}
        </Sticky>
      </Grid.Column>
    </Grid>
  );
};

export default MechanicDashboard;

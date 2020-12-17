import React, { useContext, useEffect } from 'react';
import { Grid, Sticky } from 'semantic-ui-react';

import MechanicDetails from '../details/MechanicDetails';
import MechanicForm from '../form/MechanicForm';
import MechanicList from './MechanicList';
import MechanicStore from '../../../app/stores/mechanicStore';
import { observer } from 'mobx-react-lite';
import LoadingComponent from '../../../app/layout/LoadingComponent';

const MechanicDashboard = () => {
  const mechanicStore = useContext(MechanicStore);
  const {editMode, selectedMechanic} = mechanicStore;


  useEffect(() => {
    mechanicStore.loadMechanic();
  }, [mechanicStore]);

  if (mechanicStore.loadingInitial) return <LoadingComponent content='Loading mechanics...' />;

  return (
    <Grid>
      <Grid.Column width={10}>
        <MechanicList/>
      </Grid.Column>

      <Grid.Column width={6}>
        <Sticky>
          {selectedMechanic && !editMode && (
            <MechanicDetails/>
          )}
          {editMode && (
            <MechanicForm
              key={(selectedMechanic && selectedMechanic.id) || 0}
              mechanic={selectedMechanic!}
            />
          )}
        </Sticky>
      </Grid.Column>
    </Grid>
  );
};

export default observer(MechanicDashboard);

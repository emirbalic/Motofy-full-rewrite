import React, { useContext, useEffect } from 'react';
import { RouteComponentProps } from 'react-router-dom';
import { Grid } from 'semantic-ui-react';
import LoadingComponent from '../../../app/layout/LoadingComponent';
import { RootStoreContext } from '../../../app/stores/rootStore';
import GalleryDetailedInfo from './GalleryDetailedInfo';

// interface IProps {
//   motofy: IMotofy;
// }
interface DetailParams {
  id: string;
}
const GaleryDetails: React.FC<RouteComponentProps<DetailParams>> = ({
  match,
  history,
}) => {
  const rootStore = useContext(RootStoreContext);
  const { motofy, loadMotofy, loadingInitial } = rootStore.motofyStore;

  useEffect(() => {
    loadMotofy(match.params.id);
    // console.log(motofy)
  }, [loadMotofy, match.params.id, history]);

  if (loadingInitial || !motofy)
    return <LoadingComponent content='Loading activity...' />;

  //!!! what to do with this? need to study this case
  // if(!activity)
  //   return <h2>Not found</h2>

  // return <h1>Galery Details</h1>
  return (
    <Grid>
      <pre>this.is details</pre>
      <Grid.Column width={10}>
        <GalleryDetailedInfo motofy={motofy!} />
      </Grid.Column>
    </Grid>
  );
};

export default GaleryDetails;

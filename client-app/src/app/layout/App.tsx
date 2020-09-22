import React, { Fragment } from 'react';
import { Container } from 'semantic-ui-react'; //Header, Icon,
import NavBar from '../../features/nav/NavBar';
import ActivityDashboard from '../../features/activities/dashboard/ActivityDashboard';
import { observer } from 'mobx-react-lite';
import { Route, RouteComponentProps, withRouter } from 'react-router-dom';
import HomePage from '../../features/home/HomePage';
import ActivityForm from '../../features/activities/form/ActivityForm';
import GalleryPage from '../../features/gallery/dashboard/GalleryPage';
import ForumPage from '../../features/forum/dashboard/ForumPage';
import MechanicsPage from '../../features/mechanics/dashboard/MechanicsPage';
import ActivityDetails from '../../features/activities/details/ActivityDetails';
import MerchantDashboard from '../../features/shop/dashboard/MerchantDashboard';
import MerchantDetails from '../../features/shop/details/MerchantDetails';

const App: React.FC<RouteComponentProps> = ({ location }) => {
  return (
    <Fragment>
      <Route exact path='/' component={HomePage} />
      <Route
        path={'/(.+)'}
        render={() => (
          <Fragment>
            <NavBar />
            <Container style={{ marginTop: '7em' }}>
              <Route exact path='/activities' component={ActivityDashboard} />
              <Route path='/activities/:id' component={ActivityDetails} />
              <Route
                key={location.key}
                path={['/createActivity', '/manage/:id']}
                component={ActivityForm}
              />
              <Route path='/gallery' component={GalleryPage} />
              <Route path='/gallery/:id' component={GalleryPage} />
              <Route path='/forum' component={ForumPage} />
              <Route path='/forum/:id' component={ForumPage} />
              <Route path='/mechanics' component={MechanicsPage} />
              <Route path='/mechanics/:id' component={MechanicsPage} />
              <Route path='/merchant' component={MerchantDashboard} />
              <Route path='/merchant/:id' component={MerchantDetails} />
            </Container>
          </Fragment>
        )}
      />
    </Fragment>
  );
};

export default withRouter(observer(App));

import { observer } from 'mobx-react-lite';
import React, { useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';
import {
  Button,
  Container,
  Dropdown,
  Image,
  Menu,
  Responsive,
} from 'semantic-ui-react';
import { RootStoreContext } from '../../app/stores/rootStore';

const NavBar: React.FC = () => {
  const createOptions = [
    { key: 'Mecanic', text: 'Mecanics Shop', value: 'Mecanic' },
    { key: 'Riding', text: 'Riding Route', value: 'Riding' },
    { key: 'Post', text: 'Gallery Post', value: 'Post' },
  ];
  const rootStore = useContext(RootStoreContext);
  const { user, logout } = rootStore.userStore;
  return (
    <Menu fixed='top'  stackable inverted>
      {/* pointing secondary */}
      <Container>
       
        <Menu.Item as={NavLink} exact to='/'>
          <img
            src='/assets/logo.png'
            alt='logo'
            style={{ marginRight: '10' }}
          />
          Motoranza
        </Menu.Item>
        <Responsive />
        <Menu.Item name='gallery' exact as={NavLink} to='/gallery' />
        <Menu.Item name='riding routes' exact as={NavLink} to='/activities' />
        <Menu.Item name='forum' exact as={NavLink} to='/forum' />
        <Menu.Item name='repair shops' exact as={NavLink} to='/mechanics' />
        <Menu.Item name='shop' exact as={NavLink} to='/merchant' />
        <Menu.Item>
          <Button
            as={Link}
            to='/createActivity'
            // onClick={activityStore.openCreateForm}
            positive
            content='Create Riding Route'
          />
        </Menu.Item>
        <Menu.Item>
          <Dropdown
            button
            className='icon'
            floating
            labeled
            icon='world'
            options={createOptions}
            search
            text='Create'
          />
        </Menu.Item>
        {user && (
          <Menu.Item position='right'>
            <Image
              avatar
              spaced='right'
              src={user.image || '/assets/user.png'}
            />
            <Dropdown pointing='top left' text={user.displayName}>
              <Dropdown.Menu>
                <Dropdown.Item
                  as={Link}
                  to={`/profile/${user.userName}`}
                  text='My profile'
                  icon='user'
                />
                <Dropdown.Item onClick={logout} text='Logout' icon='power' />
              </Dropdown.Menu>
            </Dropdown>
          </Menu.Item>
        )}
      </Container>
    </Menu>
  );
};

export default observer(NavBar);


// mozda neko rijesenje...
{/* <Responsive
as={Menu.Item}
minWidth={790}
name='gallery'
NavLink='/'
// active={activeItem === 'Laptop Item'}
// onClick={() => setActiveItem('Test Item')}
/>
<Responsive
as={Menu.Item}
minWidth={790}
name='riding routes'
NavLink='/activities'
// active={activeItem === 'Laptop Item'}
// onClick={() => setActiveItem('Test Item')}
/> */}
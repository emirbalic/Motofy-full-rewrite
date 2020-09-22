import { observer } from 'mobx-react-lite';
import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Button, Container, Dropdown, Menu } from 'semantic-ui-react';

const NavBar: React.FC = () => {

  const createOptions = [
    { key: 'Mecanic', text: 'Mecanics Shop', value: 'Mecanic' },
    { key: 'Riding', text: 'Riding Route', value: 'Riding' },
    { key: 'Post', text: 'Gallery Post', value: 'Post' },
  ];
  return (
    <Menu fixed='top' inverted>
      <Container>
        <Menu.Item as={NavLink} exact to='/'>
          <img
            src='/assets/logo.png'
            alt='logo'
            style={{ marginRight: '10' }}
          />
          LoveUMoto
        </Menu.Item>
        <Menu.Item name='gallery' exact as={NavLink} to='/gallery' />
        <Menu.Item name='riding routes' exact as={NavLink} to='/activities' />
        <Menu.Item name='forum' exact as={NavLink} to='/forum' />
        <Menu.Item name='repair shops' exact as={NavLink} to='/mechanics' />
        <Menu.Item name='shop' exact as={NavLink} to='/merchant'/>
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
      </Container>
    </Menu>
  );
};

export default observer(NavBar);

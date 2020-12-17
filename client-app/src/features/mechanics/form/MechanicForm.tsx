import { observer } from 'mobx-react-lite';
import React, { FormEvent, useContext, useState } from 'react';
import { Button, Form, Segment } from 'semantic-ui-react';
import { v4 as uuid } from 'uuid';

import { IMechanic } from '../../../app/models/mechanic';
import MechanicStore from '../../../app/stores/mechanicStore';

interface IProps {
  // setEditMode: (editMode: boolean) => void;
  mechanic: IMechanic;
}
const MechanicForm: React.FC<IProps> = ({
  // setEditMode,
  mechanic: initalFormState,
}) => {
  const mechanicStore = useContext(MechanicStore);
  const {
    createMechanic,
    editMechanic,
    submitting,
    editMode,
    cancelFormOpen,
  } = mechanicStore;

  const initalizeForm = () => {
    if (initalFormState) {
      return initalFormState;
    } else {
      return {
        id: '',
        // author: '', // add author in API
        photoUrl: '',
        name: '',
        description: '',
        yearOfStart: '',
        datePublished: '',
        country: '',
        city: '',
        address: '',
      };
    }
  };

  const [mechanic, setMechanic] = useState<IMechanic>(initalizeForm);

  const handleSubmit = () => {
    // let dateToSend = new Date();
    if (mechanic.id.length === 0) {
      let newMechanic = {
        ...mechanic,
        id: uuid(),
        datePublished: new Date().toISOString(),
      };
      createMechanic(newMechanic);
    } else {
      editMechanic(mechanic);
      // console.log('MECHANIC!!!', mechanic);
    }
  };

  // input into virtual DOM
  const handleInputChange = (
    event: FormEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = event.currentTarget;
    setMechanic({ ...mechanic, [name]: value });
  };

  return (
    <Segment clearing>
      <Form onSubmit={handleSubmit}>
        <Form.Input
          onChange={handleInputChange}
          name='name'
          placeholder='Name'
          value={mechanic.name}
        />
        <Form.Input
          onChange={handleInputChange}
          name='country'
          placeholder='Country'
          value={mechanic.country}
        />
        <Form.Input
          onChange={handleInputChange}
          name='city'
          placeholder='City'
          value={mechanic.city}
        />
        <Form.Input
          onChange={handleInputChange}
          name='address'
          placeholder='Address'
          value={mechanic.address}
        />
        {!editMode && (
          <Form.Input
            onChange={handleInputChange}
            name='yearOfStart'
            type='datetime-local'
            placeholder='Year of Start'
            value={mechanic.yearOfStart}
          />
        )}
        <Form.TextArea
          onChange={handleInputChange}
          name='description'
          raws={3}
          placeholder='Description'
          value={mechanic.description}
        />
        <Button
          loading={submitting}
          positive
          floated='right'
          type='submit'
          content='submit'
        />
        <Button
          onClick={cancelFormOpen}
          floated='right'
          type='button'
          content='cancel'
        />
      </Form>
    </Segment>
  );
};

export default observer(MechanicForm);

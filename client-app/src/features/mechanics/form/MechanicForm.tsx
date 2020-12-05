import React, { FormEvent, useState } from 'react';
import { Button, Form, Segment } from 'semantic-ui-react';
import { IMechanic } from '../../../app/models/mechanic';

interface IProps {
  setEditMode: (editMode: boolean) => void;
  mechanic: IMechanic;
}
const MechanicForm: React.FC<IProps> = ({
  setEditMode,
  mechanic: initalFormState,
}) => {
  const initalizeForm = () => {
    if (initalFormState) {
      return initalFormState;
    } else {
      return {
        id: '',
        author: '', // add author in API
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
      console.log(mechanic)
  }

  // input into virtual DOM
  const handleInputChange = (event: FormEvent<HTMLInputElement | HTMLTextAreaElement>) => {
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
        <Form.Input
          onChange={handleInputChange}
          name='yearOfStart'
          type='datetime-local'
          placeholder='Year of Start'
          value={mechanic.yearOfStart}
        />
        <Form.TextArea
          onChange={handleInputChange}
          name='description'
          raws={3}
          placeholder='Description'
          value={mechanic.description}
        />
        <Button positive floated='right' type='submit' content='submit' />
        <Button
          onClick={() => setEditMode(false)}
          floated='right'
          type='button'
          content='cancel'
        />
      </Form>
    </Segment>
  );
};

export default MechanicForm;

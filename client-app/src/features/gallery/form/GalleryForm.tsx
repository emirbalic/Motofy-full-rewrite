import React, { FormEvent, useState } from 'react';
import { Button, Form, Segment } from 'semantic-ui-react';
import { IMotofy } from '../../../app/models/motofy';

interface IProps {
  setEditMode: (editMode: boolean) => void;
  motofy: IMotofy;
}
const GalleryForm: React.FC<IProps> = ({
  setEditMode,
  motofy: initalFormState,
}) => {
  const initalizeForm = () => {
    if (initalFormState) {
      return initalFormState;
    } else {
      return {
        id: '',
        name: '',
        brand: '',
        model: '',
        cubicCentimeters: 0,
        photoUrl: '',
        description: '',
        yearOfProduction: '',
        datePublished: '',
        city: '',
        pricePaid: 0,
        estimatedValue: 0,
        numberOfKilometers: 0,
      };
    }
  };
  const [motofy, setMotofy] = useState<IMotofy>(initalizeForm);

  const handleSubmit = () => {
    console.log(motofy)
}

  // == this is to enable input ==
  const handleInputChange = (event: FormEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = event.currentTarget;
    setMotofy({ ...motofy, [name]: value });
  };


  return (
    <Segment clearing>
      <Form onSubmit={handleSubmit}>
        <Form.Input
          onChange={handleInputChange}
          name='name'
          placeholder='Name'
          value={motofy.name}
        />
        <Form.Input
          onChange={handleInputChange}
          name='brand'
          placeholder='Brand'
          value={motofy.brand}
        />
        <Form.Input
          onChange={handleInputChange}
          name='model'
          placeholder='Model'
          value={motofy.model}
        />
        <Form.Input
          onChange={handleInputChange}
          name='cubicCentimeters'
          placeholder='Cubics'
          value={motofy.cubicCentimeters}
        />
        <Form.Input
          onChange={handleInputChange}
          name='yearOfProduction'
          type='datetime-local'
          placeholder='Year of production'
          value={motofy.yearOfProduction}
        />
        <Form.Input
          onChange={handleInputChange}
          name='numberOfKilometers'
          placeholder='Number of kilometers'
          value={motofy.numberOfKilometers}
        />
        <Form.Input
          onChange={handleInputChange}
          name='pricePaid'
          placeholder='Price paid'
          value={motofy.pricePaid}
        />
        <Form.Input
          onChange={handleInputChange}
          name='estimatedValue'
          placeholder='Estimated value'
          value={motofy.estimatedValue}
        />
        <Form.TextArea
          onChange={handleInputChange}
          name='description'
          raws={3}
          placeholder='Description'
          value={motofy.description}
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

export default GalleryForm;

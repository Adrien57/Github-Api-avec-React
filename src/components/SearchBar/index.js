import React from 'react';
import { Input, Form } from 'semantic-ui-react';

import './searchbar.scss';


const SearchBar = ({ resultatOnSubmit }) => {


  const handleSubmit = (evt)=> {
    evt.preventDefault();
    const resultat = evt.target[0].value;
    resultatOnSubmit(resultat);
  };

  return (
    <Form name="form" onSubmit={handleSubmit} className="form">
      <Form.Field>
        <Input name="input" className="form__input" placeholder="Saisissez un repo à chercher" />
      </Form.Field>
    </Form>
  );
};

export default SearchBar;

import React,{ useState } from 'react';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import { Container, FormText, Button } from 'react-bootstrap';
import encode from '../utils/functions';


function Checkbox() {

    const [checked, setCheked] = useState(false);

    const handleChecked = (event) => {
        setCheked(event.target.checked);

        if(checked)encode();
      }
      console.log(handleChecked)
    return (
      <>
      <Container>
        <h1>Selecciona una o varias opciones</h1>
        <InputGroup className="m-3">
          <InputGroup.Checkbox aria-label="Checkbox for following text input" onChange={handleChecked}/>
          <FormText>Incluir Mayusculas</FormText>
        </InputGroup>
        <InputGroup className="m-3">
          <InputGroup.Checkbox aria-label="Checkbox for following text input" onClick={handleChecked} />
          <Form.Text aria-label="Text input with checkbox">Incluir Numeros</Form.Text>
        </InputGroup>
        <InputGroup className="m-3">
          <InputGroup.Checkbox aria-label="Checkbox for following text input" onClick={handleChecked} />
          <Form.Text aria-label="Text input with checkbox">Incluir Simbolos</Form.Text>
        </InputGroup>
        <Button>Generate Password</Button>
        </Container>
      </>
    );
  }
  
  export default Checkbox;
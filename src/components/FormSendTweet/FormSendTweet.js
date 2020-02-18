import React, { useState } from "react";
import PropTypes from "prop-types";

import { FormControl, FormGroup, TextField, Button } from "@material-ui/core";

import "./FormSendTweet.scss";

//Componente del formulario para enviar los Tweets (dentro del modal)
const FormSendTweet = ({ sendTweet }) => {
  //Manipular el estado del formulario
  const [formValue, setFormValue] = useState({
    name: "",
    tweet: ""
  });

  //Modifica el estado del formValue cuando un valor del form cambia
  const onFormChange = event => {
    setFormValue({
      ...formValue,
      [event.target.name]: event.target.value
    });
  };

  return (
    <div className="form-send-tweet">
      <h2 className="form-send-tweet__title">Enviar Tweet</h2>
      <form
        className="form-send-tweet__form"
        onSubmit={event => sendTweet(event, formValue)}
        onChange={onFormChange}
      >
        <FormControl>
          <FormGroup>
            <TextField
              className="form-send-tweet__form-name"
              type="text"
              name="name"
              placeholder="Nombre de usuario"
              margin="normal"
            />
          </FormGroup>
          <FormGroup>
            <TextField
              className="form-send-tweet__form-textarea"
              name="tweet"
              multiline
              rows="6"
              placeholder="Escribe tu Tweet..."
              margin="normal"
            />
          </FormGroup>
          <FormGroup>
            <Button type="submit">Enviar Tweet</Button>
          </FormGroup>
        </FormControl>
      </form>
    </div>
  );
};

FormSendTweet.propTypes = {
  sendTweet: PropTypes.func.isRequired
};

export default FormSendTweet;

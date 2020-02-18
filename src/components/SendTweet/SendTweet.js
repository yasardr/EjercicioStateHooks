import React, { useState } from "react";
import PropTypes from "prop-types";
import { Fab } from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";
import moment from "moment";
import ModalContainer from "../ModalContainer";
import FormSendTweet from "../FormSendTweet";
import { TWEETS_STORAGE } from "../../utils/constants";

import "./SendTweet.scss";

//Componente flotante de la app
const SendTweet = ({ setToastProps, allTweets }) => {
  const [isOpenModal, setIsOpenModal] = useState(false);

  //Función que permite abrir el modal
  const openModal = () => {
    setIsOpenModal(true);
  };

  //Función que permite cerrar el modal
  const closeModal = () => {
    setIsOpenModal(false);
  };

  //Función para guardar los Tweets en el localStorage
  const sendTweet = (event, formValue) => {
    event.preventDefault();
    const { name, tweet } = formValue;
    let allTweetsArray = [];

    //Si existen tweets el tweet nuevo se suma a los existentes
    if (allTweets) {
      allTweetsArray = allTweets;
    }

    //Si no se ha ingresado valores a alguno de los campos se muestra un toast
    if (!name || !tweet) {
      setToastProps({
        open: true,
        text: "WARNING: Todos los campos son obligatorios."
      });
    } else {
      formValue.time = moment().format();
      allTweetsArray.push(formValue);
      localStorage.setItem(TWEETS_STORAGE, JSON.stringify(allTweetsArray));
      setToastProps({
        open: true,
        text: "Tweet enviado correctamemte."
      });
      closeModal();
    }

    allTweetsArray = [];
  };

  return (
    <div className="send-tweet">
      <Fab
        className="send-tweet__open-modal"
        color="primary"
        arial-label="add"
        onClick={openModal}
      >
        <AddIcon />
      </Fab>

      <ModalContainer isOpenModal={isOpenModal} closeModal={closeModal}>
        <FormSendTweet sendTweet={sendTweet} />
      </ModalContainer>
    </div>
  );
};

SendTweet.propTypes = {
  setToastProps: PropTypes.func.isRequired,
  allTweets: PropTypes.array.isRequired
};

export default SendTweet;

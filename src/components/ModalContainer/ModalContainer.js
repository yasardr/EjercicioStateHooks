import React from "react";
import PropTypes from "prop-types";
import { Modal } from "@material-ui/core";

import "./ModalContainer.scss";

//Componente para manipular el modal
const ModalContainer = ({ isOpenModal, closeModal, children }) => {
  return (
    <Modal
      className="modal-container"
      open={isOpenModal}
      onClose={closeModal}
      closeAfterTransition
    >
      <div>{children}</div>
    </Modal>
  );
};

ModalContainer.propTypes = {
  isOpenModal: PropTypes.bool.isRequired,
  closeModal: PropTypes.func.isRequired,
  children: PropTypes.object.isRequired
};

export default ModalContainer;

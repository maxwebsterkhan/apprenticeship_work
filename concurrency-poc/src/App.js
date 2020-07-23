import React, { useState } from 'react';
import {
  PrimaryButton,
  SecondaryButton,
  Modal,
  Text,
} from 'ngis-application-kit';

export const ModalOne = ({ toggleModal, show }) => {
  return (
    <Modal title="Modal 1" isOpen={show}>
      <Modal.Content>
        <Text.Body>Modal 1</Text.Body>
      </Modal.Content>
      <Modal.Actions>
        <SecondaryButton
          onClick={() => {
            toggleModal(false);
          }}
        >
          Dismiss
        </SecondaryButton>
        <PrimaryButton onClick={() => toggleModal(false, 'modalTwo')}>
          Refresh Data
        </PrimaryButton>
      </Modal.Actions>
    </Modal>
  );
};

export const ModalTwo = ({ show, toggleModal }) => {
  const [waiting, setWaiting] = useState(false);

  const mockApi = async function mockApi() {
    setWaiting(true);
    const promise = new Promise((resolve) => {
      setTimeout(() => resolve('API call successful!'), 3000);
    });
    const result = await promise;
    console.log(result);
    setWaiting(false);
    toggleModal();
    console.log('Modal closed');
  };

  return (
    <Modal title="Modal 2" isOpen={show}>
      <Modal.Content>
        <Text.Body>Modal 2</Text.Body>
      </Modal.Content>
      <Modal.Actions>
        <SecondaryButton
          onClick={() => {
            toggleModal(false);
          }}
        >
          Dismiss
        </SecondaryButton>
        <PrimaryButton waiting={waiting} onClick={mockApi}>
          Complete referral
        </PrimaryButton>
      </Modal.Actions>
    </Modal>
  );
};

export const App = () => {
  const [show, setShow] = useState(false);
  const [modalType, setModalType] = useState('modalOne');

  const toggleModal = (_show, modalType = 'modalOne') => {
    setModalType(modalType);
    setShow(false);
  };

  const modal =
    modalType !== 'modalOne' ? (
      <ModalTwo show={show} toggleModal={toggleModal} />
    ) : (
      <ModalOne show={show} toggleModal={toggleModal} />
    );

  return (
    <>
      <PrimaryButton onClick={() => setShow(true)}>Open Modal</PrimaryButton>
      {modal}
    </>
  );
};

export default App;

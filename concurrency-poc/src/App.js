import React, { useState } from 'react';
import { PrimaryButton, SecondaryButton } from 'ngis-application-kit';
import { Modal, Text } from 'ngis-application-kit';

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
        <PrimaryButton
          onClick={() => toggleModal(false, 'modalTwo')}
        >
          Refresh Data
        </PrimaryButton>
      </Modal.Actions>
    </Modal>
  );
}

export const ModalTwo = ({ show, toggleModal }) => {

   const [ waiting, setWaiting ] = useState(false);

   const mockApi = async function () {

     setWaiting(true);
     let promise = new Promise((resolve, reject) => {
       setTimeout(() => resolve('done!'), 1000);
     });
     let result = await promise;
     console.log(result); // "done!"
     setWaiting(false);
     toggleModal()
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
}

export const App = (props) => {

  const [show, setShow] = useState(false);
  const [modalType, setModalType] = useState('modalOne');

  const toggle = (show, modalType = 'modalOne') => {
    setModalType(modalType);
    setShow(false);
  };


 const modal =
    modalType !== 'modalOne' ? (
      <ModalTwo show={show} toggleModal={toggle} />
    ) : (
      <ModalOne show={show} toggleModal={toggle} />
    );

  return (
    <>
      <PrimaryButton onClick={(e) => setShow(true)}>Open Modal</PrimaryButton>
      {modal}
    </>
  );
}

export default App;

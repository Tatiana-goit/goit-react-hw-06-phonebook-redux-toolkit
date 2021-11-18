import './App.css';
import { useState } from 'react';
import { RiContactsBook2Fill, RiContactsFill } from 'react-icons/ri';
import Container from '../Container/Container';
import ContactForm from '../ContactForm/ContactForm';
import ContactList from '../ContactList/ContactList';
import Filter from '../Filter/Filter';
import Modal from '../Modal/Modal';

export default function App() {
  const [showModal, setShowModal] = useState(false);
  const toggleModal = () => setShowModal(!showModal);

  return (
    <div className="App">
      <Container>
        <h1>
          <RiContactsBook2Fill />
          Phonebook
        </h1>
        <button className="center_button" type="button" onClick={toggleModal}>
          Add contact
        </button>
        {showModal && (
          <Modal toggleModal={toggleModal}>
            <ContactForm />
          </Modal>
        )}

        <h2>
          <RiContactsFill />
          Contacts
        </h2>
        <Filter />
        <ContactList />
      </Container>
    </div>
  );
}

import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';
import { deleteContact } from '../../redux/Phonebook/phone-actions';
import {getFiltredContacts} from '../../redux/Phonebook/phone-selector'
import s from './ContactList.module.css';

export default function ContactList() {

  
  // const normalizeFilter = filter.toLowerCase();
  // return contacts.filter(contact =>
  //   contact.name.toLowerCase().includes(normalizeFilter),
  // );

  const contacts = useSelector(getFiltredContacts);
  const dispatch = useDispatch();

 

  return (
    <ul className={s.list}>
      {contacts.map(({ name, number, id }) => (
        <li className={s.item} key={id}>
          <div className={s.info}>
            <p className={s.name}> {name}</p>
            <p className={s.number}> {number}</p>
          </div>

          <button type="button" onClick={() => dispatch(deleteContact(id))}>
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
}

ContactList.propTypes = {
  contacts: PropTypes.array,
};
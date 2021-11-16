import { useState } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { addContact } from '../../redux/Phonebook/phone-actions';
import { getContacts } from '../../redux/Phonebook/phone-selector';
import s from './ContactForm.module.css';

export default function Form() {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const contacts = useSelector(getContacts);
  const dispatch = useDispatch();

  const handleChange = e => {
    const { name, value } = e.currentTarget;
    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'number':
        setNumber(value);
        break;
      default:
        return;
    }
  };

  const handleSubmit = e => {
    e.preventDefault();
    const comparableElement = contacts.some(
      element => element.name.toLowerCase() === name.toLowerCase(),
    );
    if (comparableElement) {
      resetForm();
      return alert(`${name} is already in the directory`);
    }
    dispatch(addContact({ name, number }));
    resetForm();
  };

  const resetForm = () => {
    setName('');
    setNumber('');
  };

  return (
    <div>
      <form className={s.form} onSubmit={handleSubmit}>
        <label className={s.label}>
          <span className={s.name}>Name</span>
          <input
            className={s.input}
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
            required
            value={name}
            onChange={handleChange}
          ></input>
        </label>

        <label className={s.label}>
          <span className={s.name}>Number</span>
          <input
            className={s.input}
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
            required
            value={number}
            onChange={handleChange}
          ></input>
        </label>

        <button className={s.button} type="submit">
          Add
        </button>
      </form>
    </div>
  );
}

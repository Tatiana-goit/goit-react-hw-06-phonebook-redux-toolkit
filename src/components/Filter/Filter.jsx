import { useSelector, useDispatch } from 'react-redux';
import { getFilter } from '../../redux/Phonebook/phone-selector';
import { changeFilter } from '../../redux/Phonebook/phone-actions';
import s from './Filter.module.css';

export default function Filter() {
  const filter = useSelector(getFilter);
  const dispatch = useDispatch();

  const onchangeFilter = e => dispatch(changeFilter(e.currentTarget.value));

  return (
    <div className={s.section}>
      <span className={s.text}> Фильтр по имени</span>
      <input
        className={s.input}
        type="text"
        value={filter}
        onChange={onchangeFilter}
      ></input>
    </div>
  );
}

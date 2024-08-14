import css from './Contact.module.css';
import { useDispatch } from 'react-redux';
import { deleteContact } from '../../redux/contactsSlice';

export const Contact = ({ data: { id, name, number }}) => {
  const dispatch = useDispatch();
  const handleDelete = () => dispatch(deleteContact(id));

  return (
    <div className={css.container}>
          <p className={css.text}>{name}</p>
          <p className={css.text}>{number}</p>
        <button className={css.btn} onClick={handleDelete} >
            Delete
        </button>
    </div>
  );
}

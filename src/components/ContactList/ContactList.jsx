import { Contact } from '../Contact/Contact';
import css from './ContactList.module.css';
import { useSelector } from 'react-redux';
import { selectContacts } from '../../redux/contactsSlice';
import { selectNameFilter } from '../../redux/filtersSlice';

const getVisibleContacts = (contacts, query) => {
  return contacts.filter((contact) => contact.name.toLowerCase().includes(query.toLowerCase()));
};

export const ContactList = () => {

  const contacts = useSelector(selectContacts);
  const query = useSelector(selectNameFilter);
  const visibleContacts = getVisibleContacts(contacts, query);

  return (
    <ul className={css.list}>
      {visibleContacts.map((contact) => (
        <li className={css.item} key={contact.id}>
          <Contact data={contact} className={css.delete} />
        </li>
      ))}
    </ul>
  );
}

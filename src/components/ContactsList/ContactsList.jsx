import { useSelector, useDispatch } from 'react-redux';
import { deleteContactThunk } from 'redux/thunks';
import css from './ContactsList.module.css';

export function ContactsList() {
  const contacts = useSelector(state => state.contacts.items);
  const filter = useSelector(state => state.filter.value);
  const dispatch = useDispatch();
  const filteredContact = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  const clickHandler = id => {
    dispatch(deleteContactThunk(id));
  };

  return (
    <>
      {filteredContact.length === 0 ? (
        <p className={css.contacts__text}>You don't have any contacts</p>
      ) : (
        <ul className={css.contacts__list}>
          {filteredContact.map(({ id, name, number }) => (
            <li className={css.contacts__item} key={id}>
              <span className={css.contacts__name}>{name}:</span>&nbsp;{number}
              <button
                className={css.contacts__btn}
                onClick={() => clickHandler(id)}
                name={name}
              >Delete</button>
            </li>
          ))}
        </ul>
      )}
    </>
  );
}

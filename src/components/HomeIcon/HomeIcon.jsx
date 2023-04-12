import css from './HomeIcon.module.css';

export const HomeIcon = () => {
  return (
    <div className={css.HomeIcon__wrapper}>
      <span className={css.HomeIcon__span}>Phonebook</span> Take advantage of
      the excellent opportunity - to have a place where you can store all your
      contacts - without losing them, a place - which will not take up a single
      MB in your device's memory.
    </div>
  );
};

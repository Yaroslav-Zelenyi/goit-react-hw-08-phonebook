import { NavLink } from 'react-router-dom';
import css from './Navigation.module.css';

export const Navigation = () => {
  return (
    <ul className={css.Navigation__list}>
      <li className={css.Navigation__item}>
        <NavLink
          to="/register"
          className={({ isActive }) =>
            isActive ? `${css.Navigation__active}` : `${css.Navigation__link}`
          }
        >
          Register
        </NavLink>
      </li>
      <li className={css.Navigation__item}>
        <NavLink
          to="/login"
          className={({ isActive }) =>
            isActive ? `${css.Navigation__active}` : `${css.Navigation__link}`
          }
        >
          Login
        </NavLink>
      </li>
    </ul>
  );
};
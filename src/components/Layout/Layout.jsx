import css from './Layout.module.css';
import { NavLink } from 'react-router-dom';
import { Loader } from '../Loader/Loader';
import { Navigation } from '../Navigation/Navigation';
import { IsLoggedNavigation } from 'components/isLoggedNavigation/isLoggedNavigation';
import { Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';

export const Layout = () => {
  const isLoggedIn = useSelector(state => state.auth.isLoggedIn);
  const isLoading = useSelector(state => state.contacts.isLoading);
  const isRefreshing = useSelector(state => state.auth.isRefreshing);

  return (
    <>
      <header className={css.Layout__navbar}>
        <div className={css.Layout__container}>
          <div className={css.Layout__wrapper}>
            <h1 className={css.Layout__title}>
              Phone<span className={css.Layout__span}>book</span>
            </h1>
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? `${css.Layout__active}` : `${css.Layout__link}`
              }
            >
            </NavLink>
          </div>
          <nav className={css.Layout__nav}>
            {isLoggedIn ? <IsLoggedNavigation /> : <Navigation />}
          </nav>
        </div>
      </header>
      <section className={css.Layout__sec}>
        <Outlet />
      </section>
      {isLoading && <Loader />}
      {isRefreshing && <Loader />}
    </>
  );
};
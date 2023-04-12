import { userLoginThunk } from 'redux/thunks';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import css from './LoginForm.module.css';

export const LoginForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const err = useSelector(state => state.auth.error);

  const submitHandler = e => {
    e.preventDefault();
    const form = e.target;
    dispatch(
      userLoginThunk({
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
    !err && setTimeout(() => navigate('/contacts'), 500);
  };

  return (
    <div className={css.LoginForm__container}>
      <h2 className={css.LoginForm__title}>Enter your account</h2>
      <form className={css.LoginForm__formRegister} onSubmit={submitHandler}>
        <label className={css.LoginForm__label}>
          E-mail
          <input type="email" name="email" className={css.LoginForm__input} />
        </label>
        <label className={css.LoginForm__label}>
          Password
          <input type="password" name="password" className={css.LoginForm__input} />
        </label>
        <button type="submit" className={css.LoginForm__btn}>
          Login
        </button>
      </form>
    </div>
  );
};

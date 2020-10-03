import React, { useState } from 'react';
import { connect } from 'react-redux';
import { loginRequest } from '../actions/index';
import { Link } from 'react-router-dom';
import '../assets/styles/components/Login.scss';
import googleIcon from '../assets/static/google-icon.png';
import twitterIcon from '../assets/static/twitter-icon.png';
import Header from '../components/Header';

const Login = (props) => {

  const [form, setValues] = useState({
    email: '',
  });

  const handleInput = (event) => {
    setValues({
      ...form,
      [event.target.name]: event.target.value //[ event.target.name ] para hacer dinámica la información, en este caso el nombre del input
    })
    console.log(event.target.value);
  }

  const handleSumbit = (event) => {
    event.preventDefault(); //para prevenir el comportamiento por default de enviar desde el formulario el email y password por url
    props.loginRequest(form);
    props.history.push('/'); //permite movernos hacia donde sea necesario, en este caso al home
    console.log(form);
  }


  return (
    <>

      <Header isLogin />
      <section className="login">
        <section className="login__container">
          <h2>Inicia sesión</h2>
          <form className="login__container--form" onSubmit={handleSumbit}>

            <input
              name="email"
              className="input"
              type="text"
              placeholder="Correo"
              onChange={handleInput} />

            <input
              name="password"
              className="input"
              type="password"
              placeholder="Contraseña"
              onChange={handleInput} />

            <button className="button">Iniciar sesión</button>
            <div className="login__container--remember-me">
              <label>
                <input type="checkbox" id="cbox1" value="first_checkbox" />Recuérdame
          </label>
              <a href="/">Olvidé mi contraseña</a>
            </div>
          </form>
          <section className="login__container--social-media">
            <div><img src={googleIcon} /> Inicia sesión con Google</div>
            <div><img src={twitterIcon} /> Inicia sesión con Twitter</div>
          </section>
          <p className="login__container--register">¿No tienes ninguna cuenta? {' '}
          <Link to="/register">Regístrate</Link></p>
        </section>
      </section>

    </>
  )
}

const mapDispatchToProps = {
  loginRequest,
}

export default connect(null, mapDispatchToProps)(Login);

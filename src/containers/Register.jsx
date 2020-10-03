import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { registerRequest } from '../actions/index';
import '../assets/styles/components/Register.scss';
import Header from '../components/Header';

const Register = (props) => {

  const [form, setValues] = useState({
    email: '',
    name: '',
    password: '',
  })

  const handleInput = (event) => {
    setValues({
      ...form,
      [event.target.name]: event.target.value
    })
  }

  const handleSumbit = (event) => {
    event.preventDefault();
    props.registerRequest(form);
    props.history.push('/');
  }

  return (
    <>
      <Header isRegister />
      <section className="register">
        <section className="register__container">
          <h2>Regístrate</h2>
          <form className="register__container--form" onSubmit={handleSumbit}>

            <input
              name="name"
              className="input"
              type="text"
              placeholder="Nombre"
              onChange={handleInput} />

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

            <button className="button">Registrarme</button>
          </form>
          <Link to="/login">
            Iniciar sesión
      </Link>
        </section>
      </section>
    </>
  )
}

const mapDispatchToProps = {
  registerRequest
}

export default connect(null, mapDispatchToProps)(Register);
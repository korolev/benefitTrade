import React, { Component } from 'react'
import PropTypes from 'prop-types'
import history from '../../helpers/history'
import { connect } from 'react-redux'
import { login } from '../../ac'
import { userLoggedInSelector } from '../../selectors'
import './login-form.css'

class LoginForm extends Component {
  static propTypes = {
    loggedIn: PropTypes.bool
  }

  state = {
    id: ''
  }

  componentDidMount() {
    this.handleLogin()
  }

  componentDidUpdate() {
    this.handleLogin()
  }

  render() {
    return (
      <section className="main-page">
        <article className="login-block">
          <h1>Снабжение</h1>
          <p className="description">Площадка для сотрудничества</p>
          <p className="description">местных производителей и покупателей</p>
          <div className="user-category">
            <div className="form-check">
              <div className="category producer">
                <input
                  ref="_provider"
                  className="form-check-input radio"
                  type="radio"
                  name="customeType"
                  id="exampleRadios1"
                  value="provider"
                />
                <label className="form-check-label" htmlFor="exampleRadios1">
                  Я поставщик
                </label>
              </div>
              <div className="category buyer">
                <input
                  ref="_consumer"
                  className="form-check-input radio"
                  type="radio"
                  name="customeType"
                  id="exampleRadios2"
                  value="consumer"
                  defaultChecked
                />
                <label className="form-check-label" htmlFor="exampleRadios2">
                  Я покупатель
                </label>
              </div>
            </div>
            <form className="form-signin">
              <input
                type="text"
                name="id"
                autoComplete="off"
                value={this.state.id}
                className={this.getClassName('id')}
                onChange={this.handleChange('id')}
                placeholder="Логин (ИНН)"
                autoFocus={true}
              />
              <input
                type="password"
                id="inputPassword"
                className="form-control"
                placeholder="Пароль"
              />
              <div className="row">
                <div className="col remember-me">
                  <label>
                    <input type="checkbox" value="remember-me" /> Запомнить меня
                  </label>
                </div>
                <div className="forgot-pass col">Забыли пароль?</div>
              </div>
              <input
                type="submit"
                value="Войти"
                disabled={!this.isValidField('id')}
                onClick={this.submitForm}
                className="button"
              />
              <div className="gosuslugi">
                Войти через портал Госуслуги (ЕСИА)
              </div>
            </form>
          </div>
        </article>
      </section>
    )
  }

  isValidField = (type) => this.state[type].length >= limits[type].min

  getClassName = (type) =>
    this.isValidField(type) ? 'form-control' : 'form-input__error form-control'

  handleChange = (type) => (ev) => {
    const { value } = ev.target
    if (value.length > limits[type].max) return
    this.setState({
      [type]: value
    })
  }

  submitForm = (event) => {
    console.log(this.refs._provider.checked, this.refs._consumer.checked)
    event.preventDefault()
    if (this.state.id !== '') {
      this.props.handleLogin(
        this.state.id,
        this.refs._provider.checked ? 'provider' : 'consumer'
      )
    }
  }

  handleLogin = () => {
    if (this.props.loggedIn) {
      history.push('/home')
    }
  }
}

const limits = {
  id: {
    min: 1,
    max: 10
  }
}

export default connect(
  (state) => ({
    loggedIn: userLoggedInSelector(state)
  }),
  (dispatch) => ({
    handleLogin: (id, type) => dispatch(login(id, type))
  })
)(LoginForm)

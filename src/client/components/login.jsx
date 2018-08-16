import React, { Component } from 'react';

class Login extends Component {
    state = {
        login: '',
        password: ''
    }

    onInputChange = (e) => {
        this.setState({ [e.target.name]: e.target.value })
    }

    onClickHandler = () => {
        const { loginUser } = this.props;
        if (!this.state.login.trim() || !this.state.password.trim()) {
            alert('Ошибка! Пожалуйста, заполните все поля');
        } else {
            loginUser(this.state.login, this.state.password)
        }
    }

    render() {
        return (
            <div className="login">
                <h1> Вход </h1>
                <input type='text' name='login' placeholder='Пользователь' onChange={this.onInputChange} />
                <input type='password' name='password' placeholder='Пароль' onChange={this.onInputChange} />
                <div className='buttonContainer'>
                    <button onClick={this.onClickHandler}>Войти</button>
                </div>
            </div>
        )
    }
}

export default Login;
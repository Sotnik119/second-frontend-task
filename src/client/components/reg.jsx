import React, { Component } from 'react';

class Registration extends Component {
    state = {
        login: '',
        password: ''
    }

    onInputChange = (e) => {
        this.setState({ [e.target.name]: e.target.value })
    }

    onClickHandler = () => {
        const { registerUser } = this.props;
        if (!this.state.login.trim() || !this.state.password.trim()) {
            alert('Ошибка! Пожалуйста, заполните все поля');
        } else {
            registerUser(this.state.login, this.state.password);
        }
    }

    render() {
        return (
            <div className="reg">
                <h1> Регистрация </h1>
                <input type='text' name='login' placeholder='Имя' onChange={this.onInputChange} />
                <input type='password' name='password' placeholder='Пароль' onChange={this.onInputChange} />
                <div className='buttonContainer'>
                    <button onClick={this.onClickHandler}>Зарегистрироваться</button>
                </div>
            </div>
        )
    }
}

export default Registration;
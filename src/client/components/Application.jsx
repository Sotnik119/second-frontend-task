import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
import Registration from "../containers/registratioContainer";
import Login from "../containers/LoginContainer";
import Catalog from '../containers/CatalogContainer';
import * as consts from '../consts/consts';

class Application extends Component {

    exit = () => {
        this.props.logout(this.props.history.push);
    }

    render() {
        const { token } = this.props
        return (
            <div className='Application'>
                {token ?
                    <div className='mainMenu'>
                        <h1>Меню</h1>
                        <a onClick={this.exit}> Выход </a>
                    </div>
                    :
                    <div className='mainMenu'>
                        <h1>Меню</h1>
                        <Link to={'/registration'}>
                            Регистрация
                        </Link>
                        <Link to={'/signin'}>
                            Авторизация
                        </Link>
                    </div>
                }
                <div className='workSpace'>
                    <Route exact path='/' component={Registration} />
                    <Route path='/registration' component={Registration} />
                    <Route path='/signin' component={Login} />
                    <Route path='/catalog' component={Catalog} />
                </div>
            </div>
        )
    }
}

export default Application
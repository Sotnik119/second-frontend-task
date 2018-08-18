import React, { Component } from 'react';
import { Switch, Route, Link } from 'react-router-dom';
import { BrowserRouter, HashRouter } from 'react-router-dom';
import Registration from "../containers/registratioContainer";
import Login from "../containers/LoginContainer";
import Catalog from '../containers/CatalogContainer';
import * as consts from '../consts/consts';

class Application extends Component {
    state = {
        token: this.props.token,
        page: consts.Page_register
    }

    // static getDerivedStateFromProps(nextprops, prevstate) {
    //     if (prevstate.token == '' && nextprops.token !== '') {
    //         return {
    //             token: nextprops.token,
    //             page: consts.Page_catalog
    //         }
    //     } else if (prevstate.token !== '' && nextprops.token == '') {
    //         return {
    //             token: nextprops.token,
    //             page: consts.Page_login
    //         }
    //     } else { return null }
    // }

    menuItemClick = (event) => {
        // this.setState({ page: event.target.name })
    }

    exit = () => {
        this.props.setId('');
    }

    render() {
        const { page } = this.state
        const { token } = this.props
        return (

            <div className='Application'>
                {token ?
                    <div className='mainMenu'>
                        <h1>Меню</h1>
                        <Link to={'/'}>
                            Выход
                            {/* <a className='menu_item' onClick={this.exit} >Выход</a> */}
                        </Link>
                    </div>
                    :
                    <div className='mainMenu'>
                        <h1>Меню</h1>
                        <Link to={'/registration'}>
                            Регистрация
                                {/* <a className='menu_item' onClick={this.menuItemClick} name={consts.Page_register}>Регистрация</a> */}
                        </Link>
                        <Link to={'/signin'}>
                            Авторизация
                            {/* <a className='menu_item' onClick={this.menuItemClick} name={consts.Page_login}>Авторизация</a> */}
                        </Link>
                    </div>
                }
                <div className='workSpace'>

                    <Route exact path='/' component={Registration} />
                    <Route path='/signin' component={Login} />
                    <Route path='/catalog' component={Catalog} />


                </div>
            </div>

        )
    }
}

export default Application
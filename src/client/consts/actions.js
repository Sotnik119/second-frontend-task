import * as consts from "./consts";

export const setId = (sid) => ({
    type: consts.SET_SID,
    playload: sid
})

export const setCategories = (categories) => ({
    type: consts.SET_CATEGORIES,
    playload: categories
})

export const setSubCategories = (subCategories) => ({
    type: consts.SET_SUBCATEGORIES,
    playload: subCategories
})

export const setProducts = (products) => ({
    type: consts.SET_PRODUCTS,
    playload: products
})

export const registerUser = (userlogin, userpassword) => dispatch => {
    return fetch("/signup",
        {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            method: "POST",
            body: JSON.stringify({ login: userlogin, password: userpassword })
        })
        .then((response) => {
            return (response.status)
        }).then((code) => {
            if (code == 200) {
                alert("Вы успешно зарегистрировались")
            } else {
                alert("Ошибка регистрации")
            }
            return null
        })
        .catch(alert);
}

export const loginUser = (userlogin, userpassword, redirect) => dispatch => {
    return fetch("/login",
        {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            method: "POST",
            body: JSON.stringify({ login: userlogin, password: userpassword })
        })
        .then((response) => {
            return response.json();
        })
        .then((object) => {
            dispatch(setId(object.sid));
            redirect('/catalog');
        })
        .catch(alert);
}

export const logout = (redirect) => dispatch => {
    dispatch(setId(''));
    redirect('/signin');
}

export const getCategories = (sid) => dispatch => {
    return fetch("/categories",
        {
            headers: {
                sid
            },
            method: "GET",
        })
        .then((response) => {
            return response.json();
        })
        .then((object) => {
            dispatch(setCategories(object));
        })
        .catch(alert);
}

export const getSubCategories = (sid, categoryId) => dispatch => {
    return fetch("/categories/" + categoryId,
        {
            headers: {
                sid
            },
            method: "GET",
        })
        .then((response) => {
            return response.json()
        })
        .then((object) => {
            dispatch(setSubCategories(object))
        })
        .catch(alert);
}

export const getProducts = (sid, subCategoryId) => dispatch => {
    return fetch("/products/" + subCategoryId,
        {
            headers: {
                sid
            },
            method: "GET",
        })
        .then((response) => {
            return response.json()
        })
        .then((object) => {
            dispatch(setProducts(object))
        })
        .catch(alert);
}
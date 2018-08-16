import * as actions from '../consts/consts'

export const initialState = {
    sid: '',
    products: [],
    categories: [],
    subCategories: [],
}

export default (state = initialState, action) => {
    switch (action.type) {
        case actions.SET_SID: {
            return {
                ...state,
                sid: action.playload,
            }
        }
        case actions.SET_CATEGORIES: {
            return {
                ...state,
                categories: action.playload,
            }
        }

        case actions.SET_SUBCATEGORIES: {
            return {
                ...state,
                subCategories: action.playload,
                products: [],
            }
        }
        case actions.SET_PRODUCTS: {
            return {
                ...state,
                products: action.playload,
            }
        }
        default: return state;
    }
}
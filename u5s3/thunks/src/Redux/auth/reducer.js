import { actionTypes } from "./action"


const initState = {
    isLoading: false,
    isError : false,
    isAuth : false,
    token : null
}

export const authReducer = (state=initState, action) => {
    switch(action.type) {
        case actionTypes : 
            return {
                ...state,
                isLoading : true,
                isError : false,
                isAuth : false,
            }

        case actionTypes.SUCCESS : 
            return {
                ...state,
                isLoading : false,
                isAuth : true,
                token : action.payload
            }

        case actionTypes.FAILURE :
            return {
                ...state,
                isLoading : false,
                isError : true,
                isAuth : false,
            }

        default :
            return state;
    }
}
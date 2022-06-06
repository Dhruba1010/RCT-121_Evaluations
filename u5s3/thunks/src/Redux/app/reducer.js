import { actionTypes } from "./action"


const initState = {
    isLoading: false,
    isError : false,
    data : []
}

export const appReducer = (state=initState, action) => {
    switch(action.type) {
        case actionTypes.LOADING : 
            return {
                ...state,
                isLoading : true,
                isError : false
            }

        case actionTypes.SUCCESS : 
            return {
                ...state,
                isLoading : false,
                data : action.payload
            }

        case actionTypes.FAILURE :
            return {
                ...state,
                isLoading : false,
                isError : true
            }

        default :
            return state;
    }
}
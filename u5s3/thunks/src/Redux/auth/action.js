import axios from "axios"
import { useDispatch } from "react-redux"

export const actionTypes = {
    LOADING : 'LOADING',
    SUCCESS : 'SUCCESS',
    FAILURE : 'FAILURE',
}

export const authLoading = () => {
    return {
        type: actionTypes.LOADING
    }
}

export const authSuccess = (token) => {
    return { 
        type: actionTypes.SUCCESS,
        payload: token
    }
}

export const authFailure = () => {
    return { type: actionTypes.FAILURE}
}

// const dispatch = useDispatch();

export const postUser = (email, pass) => (dispatch) => {
    dispatch(authLoading());
    return axios('https://reqres.in/api/login', {
        method: 'POST',
        data : {
            email : email,
            password : pass
        }
    })
    .then(res => {
        console.log(res.data)
        dispatch(authSuccess(res.token))
    })
    .catch(err => {
        dispatch(authFailure());
    })
}
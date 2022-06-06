
export const actionTypes = {
    LOADING : 'LOADING',
    SUCCESS : 'SUCCESS',
    FAILURE : 'FAILURE',
}

export const loginLoading = () => {
    return {
        type : actionTypes.LOADING,
    }
}

export const loginSuccess = (data) => {
    return {
        type: actionTypes.SUCCESS,
        payload : data
    }
}

export const loginFailure = () => {
    return {
        type: actionTypes.FAILURE,
    }
}
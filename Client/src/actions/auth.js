import * as api from '../api/index.js';

export const signin = (formData, history) => async (dispatch) => {
    try{
        //login user

        history.push('/')
    } catch(error){
        console.log(error)
    }
}

export const signup = (formData, history) => async (dispatch) => {
    try{
        //signup user

        history.push('/')
    } catch(error){
        console.log(error)
    }
}

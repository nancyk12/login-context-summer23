import Axios from '../lib/Axios'


export const fetchLogin = async (dispatch, userData) => {
    try {
        //console.log('!@-------userData-------@!')
        //console.log(userData)
        

        let response = await Axios.post('/users/login', userData)
        //console.log('!@-------response-------@!')
        //console.log(response.data)
        
        dispatch({
            type: 'LOGIN',
            data: response.data
    })
    } catch (error) {
        throw new Error(error)
    }
}

export const registerUser = async (dispatch, userData) => {
    let response = await Axios.post('/users/register', userData)
    //console.log(response.data);

    dispatch({
        type: 'REGISTER',
        payload: response.data
    })
}


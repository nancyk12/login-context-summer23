import Axios from '../lib/Axios'

const errorHandler = async(dispatch, error) => {
    // console.log(error)

    // passing full error object
    // dispatch({
    //     type: 'ERROR',
    //     error: error
    // })

    //passing just the message from the backend
    dispatch({
        type: 'ERROR',
        message: error.response.data
    })
}


export const fetchLogin = async (dispatch, userData) => {
    try {
        // console.log('!@-------userData-------@!')
        // console.log(userData)
        
        let response = await Axios.post('/users/login', userData)
        // console.log('!@-------response-------@!')
        // console.log(response.data)

        //saves the jwt token to local storage (local to the browser)
        localStorage.setItem('jwtToken', response.data.token)

        dispatch({
            type: 'LOGIN',
            data: {
                username: response.data.username,
                message: response.data.message
            }
    })
    } catch (error) {
        errorHandler(dispatch, error)
    }
}

export const registerUser = async (dispatch, userData) => {
    try {
        let response = await Axios.post('/users/register', userData)
        // console.log(response.data);
    
        dispatch({
            type: 'REGISTER',
            payload: response.data
        })
        
    } catch (error) {
         errorHandler(dispatch, error)
    }
}

//make logout delete the local storage token
//localStorage.removeItem('jwtToken')
export const logout = dispatch => {
    try {

        localStorage.removeItem('jwtToken')

        dispatch({type: 'LOGOUT'})
    } catch (error) {
        errorHandler(dispatch, error)
    }
}
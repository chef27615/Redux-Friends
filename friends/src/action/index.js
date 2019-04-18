import axios from 'axios';

export const DELETE_FRIEND = 'DELETE_FRIEND';

export const FETCHING_FRIEND_START = 'FETCHING_FRIEND_START';
export const FETCHING_FRIEND_SUCCESS = 'FETCHING_FRIEND_SUCCESS';
export const FETCHING_FRIEND_FAIL = 'FETCHING_FRIEND_FAIL';

export const LOGIN_START = 'LOGIN_START';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAIL = 'LOGIN_FAIL';


export const SAVING_FRIEND = 'SAVING_FRIEND';
export const UPDATE_FRIEND = 'UPDATE_FRIEND';


export const login = credentials => dispatch => {
    
    dispatch({ type: LOGIN_START});

    return axios.post('http://localhost:5000/api/login', credentials)
            .then(res => dispatch({
                type: LOGIN_SUCCESS,
                payload: res.data
            }))
            .catch(err => dispatch({
                type: LOGIN_FAIL
            }))
}

export const getFriends = () => dispatch => {

    dispatch({ type: FETCHING_FRIEND_START });

    return axios.get('http://localhost:5000/api/friends', {
        headers: {
            Authorization: localStorage.getItem('token')
        }
    })
        .then(res => dispatch({
            type: FETCHING_FRIEND_SUCCESS,
            payload: res.data
        }))
        .catch(err => dispatch({
            type: FETCHING_FRIEND_FAIL,
            payload: err
        }))
}
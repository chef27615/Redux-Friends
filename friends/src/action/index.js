import axios from 'axios';

export const DELETE_FRIEND = 'DELETE_FRIEND';
export const FETCHING_FRIEND = 'FETCHING_FRIEND';
export const LOGGING_IN = 'LOGGING_IN';
export const SAVING_FRIEND = 'SAVING_FRIEND';
export const UPDATE_FRIEND = 'UPDATE_FRIEND';
export const FETCHING_SUCCESS = 'FETCHING_SUCCESS';


export const getFriends = () => dispatch => {
    dispatch({type: FETCHING_FRIEND });
    axios.get('http://localhost:5000/api/friends')
    .then(res=> dispatch({
        type: FETCHING_SUCCESS,
        payload: res.data
    }))
    .catch(err => (console.log('Fetching Error: ', err)));
}

export function deleteFriend(index){
    return{
        type: DELETE_FRIEND,
        payload: index
    }
} 
import { DELETE_FRIEND,
    FETCHING_FRIEND_START,
    FETCHING_FRIEND_SUCCESS,
    FETCHING_FRIEND_FAIL,
    LOGIN_START,
    LOGIN_SUCCESS,
    LOGIN_FAIL,
    SAVING_FRIEND,
    UPDATE_FRIEND
} from '../action';

const initialState = {
    deleteFriend: false,
    fetchingFriend: false,
    friend: [],
    loggingIn: false,
    savingFriend: false,
    updateFriend: false,
    error: null
}

const reducer = (state = initialState, action) => {
    switch(action.type){
        case LOGIN_START:
        case FETCHING_FRIEND_START:
        return {
            ...state,
            fetchingFriend: true
        };
        case LOGIN_SUCCESS:

        localStorage.setItem('token', action.payload.payload)

        return {
            ...state,
            fetchingFriend: false
        }
        case FETCHING_FRIEND_SUCCESS:
        return {
            ...state,
            fetchingFriend: false,
            paylaod: action.paylaod.data
        }

        default:
        return state;
    }
}

export default reducer;
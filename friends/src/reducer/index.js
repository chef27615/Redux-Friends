import { DELETE_FRIEND, FETCHING_FRIEND, LOGGING_IN, SAVING_FRIEND, UPDATE_FRIEND } from '../action';

const initialState = {
    deleteFriend: false,
    fetchingFriend: false,
    friend: [],
    loggingIn: false,
    savingFriend: false,
    updateFriend: false,
    error: null
}

export default (state = initialState, action) => {
    switch(action.type){
        case DELETE_FRIEND:
            return {
                ...state, 
                friends: state.friends.map((friend, index)=>{
                    return index !== action.payload
                })
            }
        
        case FETCHING_FRIEND:
            return {
                ...state,
                error: '',
                fetching: true
            }
        
        case SAVING_FRIEND:
            return {
                ...state,
            }

        case UPDATE_FRIEND: 
            return{
                ...state,
            }    
    }
}
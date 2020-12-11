import * as actionTypes from './post.type';

const INITIAL_STATE = {
    post_likes:0
}


const PostReducer = (state=INITIAL_STATE,action) => {
    switch(action.type) {
        case actionTypes.POST_LIKES:
            return{
                ...state,
                post_likes: action.payload.likes
            }
        default:
            return state
    }
}


export default PostReducer;


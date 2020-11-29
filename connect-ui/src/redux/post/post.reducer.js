import * as actionTypes from './post.type';

const INITIAL_STATE = {
    post_caption:"",
    post_image:""
}


const PostReducer = (state=INITIAL_STATE,action) => {
    switch(action.type) {
        case actionTypes.POST_DETAIL:
            return{
                ...state,
                post_caption: action.payload.post_caption,
                post_image: action.payload.post_image
            }
        default:
            return state
    }
}


export default PostReducer;


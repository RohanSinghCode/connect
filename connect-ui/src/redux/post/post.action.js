import * as actionTypes from './post.type';
import axios from "axios";



export const likes = (likes) => {
    return {
        type:actionTypes.POST_LIKES,
        payload: likes
    }
}



export const getLikes = (token,post_id) => {
    return dispatch => {
        axios.defaults.headers = {
            "Content-Type": "application/json",
            Authorization:  `Token ${token}`
        }
        axios.get(`http://127.0.0.1:8000/posts/like/${post_id}`)
        .then(
            res => {
                const no_likes = res.data.likes
                console.log(no_likes)
                dispatch(likes(no_likes));
            }
        ).catch(
            err => console.log(err)
        )

    }
}

export const postLikes = (token,post_id) => {
    return dispatch => {
        axios.defaults.headers = {
            "Content-Type": "application/json",
            Authorization:  `Token ${token}`
        }
        axios.post(`http://127.0.0.1:8000/posts/like/${post_id}`)
        .then(
            res => {
                const no_likes = res.data.likes
                console.log(no_likes)
                dispatch(likes(no_likes));
            }
        ).catch(
            err => console.log(err)
        )

    }
}

export const fail = error => {
    return {
        type: actionTypes.POST_FAIL,
        payload:error
    }
}
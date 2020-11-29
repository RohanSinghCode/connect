import * as actionTypes from './post.type';
import axios from axios;


export const postDetail = (post_image,post_caption) => {

    return {
        type: actionTypes.POST_DETAIL,
        payload: {
            post_image:post_image,
            post_caption:post_caption
        }
    }
}


export const postFetch = token => {
    return patch => {
        axios.defaults.headers = {
            "Content-Type": "application/json",
            Authorization:  `Token ${token}`
        }
        axios.get("http://127.0.0.1:8000/posts/create-list").then(
            resp => {
                dispatch(postDetail(resp.data.post_image,resp.data.post_caption))
            }
        ).catch(err => console.log(err))
    }
}
import axios from "axios";
import { ADD,SUB ,FETCH_USER_SUCCESS} from "../constants";
export const add=()=>{
    return dispatch=>{
        setTimeout(()=>{
            dispatch({
                type:ADD
            })
        },2000)
    }
}
export const sub=()=>{
    return{
        type:SUB
    }
}
export const  get_user=()=>{

    return dispatch=>{
        dispatch({
            type:'FETCH_USER_LOADING'
        })
        axios.get('https://randomuser.me/api').then(res=>{
            dispatch({
                type:FETCH_USER_SUCCESS,
                email:res.data.results[0]
            })
        }).catch(error=>{
            dispatch({
                type:'FETCH_USER_ERROR',
                error:error.response.data
            })
        })
    }
}
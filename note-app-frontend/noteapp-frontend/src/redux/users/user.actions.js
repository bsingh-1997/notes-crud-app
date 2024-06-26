import axios from "axios";
import { LOGIN_USER_ERROR, LOGIN_USER_LOADING, LOGIN_USER_SUCCESS } from "./user.type";
import { BASE_URL } from "../../components/constatnts/config";

export const getUser = (obj) => async (dispatch) => {
    dispatch({ type: LOGIN_USER_LOADING });
    try {
        let data = await axios.post(BASE_URL+"/user/login", obj); // Sending data directly
        let { message, token, status } = data.data;
        console.log(message);
        if (status === 1) { // Use strict equality check
            dispatch({ type: LOGIN_USER_SUCCESS, payload: token });
            console.log(token)
        } else {
            alert(message)
            dispatch({ type: LOGIN_USER_ERROR });
        }
    } catch (error) {
        dispatch({ type: LOGIN_USER_ERROR });
    }
};

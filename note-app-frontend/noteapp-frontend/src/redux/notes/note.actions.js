import axios from "axios";
import { GET_NOTES_ERROR, GET_NOTES_LOADING, GET_NOTES_SUCCESS, CREATE_NOTES_ERROR, CREATE_NOTES_LOADING, CREATE_NOTES_SUCCESS, DELETE_NOTES_ERROR, DELETE_NOTES_LOADING, DELETE_NOTES_SUCCESS, UPDATE_NOTES_ERROR, UPDATE_NOTES_LOADING, UPDATE_NOTES_SUCCESS } from "./note.types";
import { BASE_URL } from "../../components/constatnts/config";
import { store } from "../store";
import { LOGOUT } from "../users/user.type";

export const getNotes = () => async (dispatch) => {
    const { token } = store.getState().userReducer;
    dispatch({ type: GET_NOTES_LOADING });
    try {
        const res = await axios.get(BASE_URL + "/note", {
            headers: { Authorization: token }
        });

        const { status, message, data } = res.data;
        if (status === 1) {
            dispatch({ type: GET_NOTES_SUCCESS, payload: data });
        } 
        else if(status == 2){
            dispatch({type:LOGOUT})
        }
        else {
            dispatch({ type: GET_NOTES_ERROR });
        }
        console.log(message);
    } catch (error) {
        console.error("Error fetching notes:", error);
        dispatch({ type: GET_NOTES_ERROR });
    }
};

export const createNotes = (obj) => async (dispatch) => {
    const { token } = store.getState().userReducer;
    dispatch({ type: CREATE_NOTES_LOADING });
    try {
        const res = await axios.post(BASE_URL + "/note/create", obj, {
            headers: { Authorization: token }
        });

        const { status, message } = res.data;
        console.log(message);
        if (status === 1) {
            dispatch({ type: CREATE_NOTES_SUCCESS });
            dispatch(getNotes())
        } 
        else if(status == 2){
            dispatch({type:LOGOUT})
        }
        else {
            dispatch({ type: CREATE_NOTES_ERROR });
        }
    } catch (error) {
        console.error("Error creating note:", error);
        dispatch({ type: CREATE_NOTES_ERROR });
    }
};

export const deleteNotes = (id) => async (dispatch) => {
    const { token } = store.getState().userReducer;
    dispatch({ type: DELETE_NOTES_LOADING });
    console.log(id)
    try {
        const res = await axios.delete(BASE_URL+"/note/",{
            headers: { Authorization: token ,id:id}
            
        });
        const { status, message } = res.data;
        console.log(message);
        if (status === 1) {
            dispatch({ type: DELETE_NOTES_SUCCESS });
            dispatch(getNotes())
        } else if(status == 2){
            dispatch({type:LOGOUT})
        } else {
            dispatch({ type: DELETE_NOTES_ERROR });
        }
    } catch (error) {
        console.error("Error deleting note:", error);
        dispatch({ type: DELETE_NOTES_ERROR });
    }
};

export const updateNotes = (obj, id) => async (dispatch) => {
    const { token } = store.getState().userReducer;
    dispatch({ type: UPDATE_NOTES_LOADING });
    try {
        const res = await axios.patch(BASE_URL + "/note/", obj, {
            headers: { Authorization: token ,id:id}
        });

        const { status, message } = res.data;
        console.log(message);
        if (status === 1) {
            dispatch({ type: UPDATE_NOTES_SUCCESS });
            dispatch(getNotes())
        } else if(status == 2){
            dispatch({type:LOGOUT})
        } else {
            dispatch({ type: UPDATE_NOTES_ERROR });
        }
    } catch (error) {
        console.error("Error updating note:", error);
        dispatch({ type: UPDATE_NOTES_ERROR });
    }
};

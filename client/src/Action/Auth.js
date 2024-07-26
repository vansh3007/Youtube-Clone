import * as api from "../API";
import { setcurrentuser } from "./CurrUser";
export const login = (authData) => async (dispatch) => { 
    try {
        const { data } = await api.login(authData);
        dispatch({ type: "AUTH", data })
        dispatch(setcurrentuser(JSON.parse(localStorage.getItem("profile"))));
        
    } catch (error) {
        alert(error);
    }
}
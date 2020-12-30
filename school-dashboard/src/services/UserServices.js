import axios from 'axios';
import ClientSession from "./ClientSession";


// Todo 
// 1) login using email and password 
// 2) save auth token 

const login = async (data) => {
    try {
        const response = await axios.post("http://localhost:5000/users/login", data)
        storeAuthData(response)
        return {
            status: "success"
        }
    }catch {
        return {
            status: "failed"
        }
    }
};

const storeAuthData = async (response) => {
    try {
        const stored = await ClientSession.storeAuth(response.data)
        return {
            status: "success",
            message: "Logged in success",
            user: response
        }
    }catch {
        return {
            status: "failed",
            message: "Logged in failed",
            // user: response
        }
    }
}

const reset = (email) => {
    //todo reset password
}

const changePassword = (password, accessToken) => {
    //todo change password
}

const logout = async () => {
    //todo logout current user
    try {
        const logout = await ClientSession.removeAuth();
        return {
            status: "success",
            message: "Logout in success",
        }
    }catch {
        return {
            status: "failed",
            message: "Logout failed",
            // user: response
        }
    }
    

}

export default {login, reset, changePassword, logout}; 
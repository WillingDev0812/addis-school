import axios from 'axios';
import ClientSession from "./ClientSession";


// Todo 
// 1) login using email and password 
// 2) save auth token 

const login = async (data) => {
    try {
        const response = await axios.post("http://localhost:5000/users/login", data)
        storeAuthData(response)
    }catch {
        console.error("Error Occurs")
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

const logout = () => {
    //todo logout current user
}

export default {login, reset, changePassword, logout}; 
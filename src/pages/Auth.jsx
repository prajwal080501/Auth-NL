import { useState } from "react";
import {jwtDecode} from 'jwt-decode'
import { GoogleLogin } from '@react-oauth/google';
import { googleLogout } from '@react-oauth/google';

function Auth() {
    const [mode, setMode] = useState("login");
    const [userData, setUserData] = useState({});
    function handleSubmit() {

    }
    function handleMode() {

    }
    function handleGoogleLogin() {

    }

    function logout() {
        googleLogout();
    }

    const responseMessage = (response) => {
        console.log(response);
        const USER_CREDENTIAL = jwtDecode(response.credential)
        console.log(USER_CREDENTIAL);
    };
    const errorMessage = (error) => {
        console.log(error);
    };
    return (
        <div>
            auth
            <GoogleLogin
                onSuccess={responseMessage}
                onError={errorMessage}
            />
            <button onClick={logout}>Logout</button>
        </div>
    )
}

export default Auth;
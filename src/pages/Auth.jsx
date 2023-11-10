import { useContext, useState } from "react";
import {jwtDecode} from 'jwt-decode'
import { GoogleLogin } from '@react-oauth/google';
import { googleLogout } from '@react-oauth/google';
import { UserContext } from "../context/UserContext";

function Auth() {
    const [mode, setMode] = useState("login");
    const [userData, setUserData] = useState({
        name: "",
        email: ""
    });
    const {saveUser, logout} = useContext(UserContext);
    function handleSubmit() {

    }
    function handleMode() {

    }
    function handleGoogleLogin(response) {
        const data = jwtDecode(response.credential);
        setUserData(data);
        saveUser(data);
    }

    // function logout() {
    //     googleLogout();
    // }

    // const responseMessage = (response) => {
    //     console.log(response);
    //     jwtDecode(response.credential)
    //     .then(data => {
    //         setUserData(data);
    //         saveUser(userData);
    //     })
    //     // console.log(USER_CREDENTIAL);
    //     // setUserData({
    //     //     name: USER_CREDENTIAL.name,
    //     //     email: USER_CREDENTIAL.email
    //     // })
    //     // saveUser(userData);
    // };
    const errorMessage = (error) => {
        console.log(error);
    };
    return (
        <div>
            auth
            <GoogleLogin
                onSuccess={handleGoogleLogin}
                onError={errorMessage}
            />
            <button onClick={logout}>Logout</button>
        </div>
    )
}

export default Auth;
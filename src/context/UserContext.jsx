import { createContext, useState } from "react";
import PropTypes from "prop-types";
import { googleLogout } from '@react-oauth/google';

const UserContext = createContext();

const UserProvider = ({ children }) => {
    const [user, setUser] = useState(null);

    const saveUser = (user) => {
        setUser(user);
        localStorage.setItem("user", JSON.stringify(user));
    }

    const logout = () => {
        googleLogout()
        setUser(null);
        localStorage.removeItem("user");
    }

    const getUser = () => {
        const user = localStorage.getItem("user");
        if (user) {
            setUser(JSON.parse(user));
        }
    }

    return (
        <UserContext.Provider
            value={{
                user, saveUser, getUser, logout
            }}
        >
            {children}
        </UserContext.Provider>
    )
    UserProvider.propTypes = {
        children: PropTypes.node.isRequired
    }
}


export { UserContext, UserProvider };


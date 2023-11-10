import { useContext } from "react";
import { UserContext } from "../context/UserContext";

function Home() {
    const { user, logout } = useContext(UserContext);
    return (
        <div>
            <h1>Welcome {user?.name}</h1>
            <button onClick={logout}>Logout</button>
        </div>
    )
}

export default Home;
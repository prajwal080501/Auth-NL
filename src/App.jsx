import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Auth from "./pages/Auth";
import { useContext, useEffect } from "react";
import { UserContext } from "./context/UserContext";
function App() {
    const { getUser, user } = useContext(UserContext);


    useEffect(() => {
        getUser();
    },[])
    console.log(user, "user from home");
    return (
        <div>
            <Router>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/auth" element={<Auth />} />
                </Routes>
            </Router>
        </div>
    )
}

export default App;
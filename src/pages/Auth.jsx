import { useState } from "react";

function Auth() {
    const [mode, setMode] = useState("login");
    return (
        <div>
            <h1>Auth</h1>
        </div>
    )
}

export default Auth;
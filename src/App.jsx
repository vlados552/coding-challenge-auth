import { useEffect } from "react";
import { AuthProvider } from "./hoc/AuthProvider";
import Routes from "./hoc";
import "./styles/App.css";

function App() {
    return (
        <AuthProvider>
            <Routes />
        </AuthProvider>
    );
}

export default App;

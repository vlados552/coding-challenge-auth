import { Outlet } from "react-router-dom";

function Container(){
    return (
        <div className="flex flex-col min-h-screen mx-auto">
            <Outlet />
        </div>
    );
}

export default Container;
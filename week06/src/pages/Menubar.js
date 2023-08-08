import React from "react";
import { Link, Outlet } from "react-router-dom";

const Menubar = () => {
    return (
        <div>
            <ul>
                <li>
                    <Link to="/home">Week04 HW</Link>
                </li>
                <li>
                    <Link to="/whoami">Week05 HW</Link>
                </li>
            </ul>
            <Outlet />
        </div>
    );
};

export default Menubar;
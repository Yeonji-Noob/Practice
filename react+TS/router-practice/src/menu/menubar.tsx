import '../menubar.css'
import { Link, Outlet } from "react-router-dom";

const Menubar = () => {
    return (
        <div>
            <ul className="menu">
                <li>
                    <Link to = "/home">Home</Link>
                </li>
                <li>
                    <Link to = "/about">About</Link>
                </li>
            </ul>

            <Outlet/>
        </div>
    );
};

export default Menubar;
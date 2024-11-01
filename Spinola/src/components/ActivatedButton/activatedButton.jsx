import { NavLink, useLocation } from "react-router-dom";
import "./activatedButton.scss"

export default function ActivatedButton({ link, children }) {
    return (
        <NavLink
            to={link}
            className={({ isActive }) =>
                isActive ? "nav-active" : "nav-not-active"
            }
        >
            {children}
        </NavLink>
    )
}
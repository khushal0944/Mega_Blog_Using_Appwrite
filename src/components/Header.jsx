import React from "react";
import {Container, Logo, LogoutBtn} from "./index";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

function Header() {
    const authStatus = useSelector(state => state.auth.status)
    const navigate = useNavigate()
    const navItems = [
        {
            name : "Home",
            path : "/",
            active : true
        },
        {
            name : "Login",
            path : "/login",
            active : !authStatus
        },
        {
            name : "Signup",
            path : "/signup",
            active : !authStatus
        },
        {
            name : "All Posts",
            path : "/all-posts",
            active : authStatus
        },
        {
            name : "Add Post",
            path : "/add-post",
            active : authStatus
        },
    ]
    return (
        <header className="py-3 w-full shadow bg-white">
            <Container>
                <nav className="flex items-center">
                    <div className="mr-4">
                        <Link to="/">
                            <Logo className="text-3xl" width="70px" />
                        </Link>
                    </div>
                    <ul className="flex ml-auto">
                        {navItems.map((singleItem) => (
                            singleItem.active && (
                                <li key={singleItem.path}>
                                    <button 
                                        className='inline-bock px-6 py-2 duration-200 hover:bg-blue-100 rounded-full' 
                                        onClick={() => navigate(singleItem.path)}
                                    >
                                        {singleItem.name}
                                    </button>
                                </li>
                            )
                        ))}
                        {authStatus && <li><LogoutBtn /></li>}
                    </ul>
                </nav>
            </Container>
        </header>
    );
}

export default Header;

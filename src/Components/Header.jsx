import React, { useContext } from 'react'
import { UserContext } from '../Contexts/UserContext';
import { Link } from 'react-router-dom';
import Login from './Login';


function Header () {
    const {currentUser} = useContext(UserContext)

    return (<>
        <h1>LAURA'S NC NEWS</h1>
        <Login/>
        <nav id='nav-bar'>
            <Link to=  "/">
                Home
            </Link>
            <Link to=  "/topics">
                Topics
            </Link>
        </nav>
        </>
    )
}

export default Header;
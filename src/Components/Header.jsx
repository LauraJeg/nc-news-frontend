import React, { useContext } from 'react'
import { UserContext } from '../Contexts/UserContext';
import { Link } from 'react-router-dom';


function Header () {
    const {currentUser} = useContext(UserContext)

    return (
        <nav id='nav-bar'>
            <Link to=  "/">
                Home
            </Link>
        </nav>
    )
}

export default Header;
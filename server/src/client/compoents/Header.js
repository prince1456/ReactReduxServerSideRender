import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

const Header = ({ auth }) => {
    //.log("my auth status is ", auth);

    const authButton = auth ? (
        <a href="/api/logout">Logout</a>
    ) : (
            <a href="/api/auth/google">Login</a>
        )

    return (
        <nav>
            <div className="nav-wrapper">
                <Link to="/"> React SSR</Link>
                <ul className="right">
                    <li key="1"><Link to="/users">Users</Link></li>
                    <li key="2"><Link to="/admins">Admin</Link></li>
                    <li key="3">{authButton}</li>


                </ul>
            </div>
        </nav>
    );
}


function mSTP({ auth }) { return { auth }; }

export default connect(mSTP)(Header);
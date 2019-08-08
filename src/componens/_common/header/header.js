import React from 'react';
import {Nav, NavItem} from 'reactstrap';
import {Link} from "react-router-dom";

const Header = () => {
    return (
        <div className='container-fluid'>
            <div className='d-flex justify-content-between'>
                <div className="logo col-2"><img src="" alt="Logo"/></div>
                <div className="menu">
                    <Nav>
                        <NavItem>
                            <Link className='nav-link' to='/'>Main</Link>
                        </NavItem>
                        <NavItem>
                            <Link className='nav-link' to='/events'>Events</Link>
                        </NavItem>
                    </Nav>
                </div>
                <div className="auth">
                    Sign in / Register
                </div>
            </div>
        </div>
    );
};

export default Header;
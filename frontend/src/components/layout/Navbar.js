import React, { Fragment } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { logout } from '../../actions/auth';

const Navbar = ({ auth: { isAuthenticated, loading }, logout }) => {

    const logoutUser = () => {
        logout();
        return <Redirect to="/" />
    }
    const authLinks = (
        <ul>
            <li>
                <a onClick={logoutUser} href="/">
                    <i className="fas fa-sign-out-alt" />{' '}
                    <span className="hide-sm">Logout</span>
                </a>
            </li>
        </ul>
    );

    const guestLinks = (
        <ul>
            <li><Link to="/">Home</Link></li>
            <li><a href="contact.html">Contact</a></li>
            <li><Link to="/login">Login</Link></li>
            <li><Link to="/register" className="button">Register</Link></li>
        </ul>
    );

    return (
        <nav id="nav">
            {!loading && (<Fragment>{isAuthenticated ? authLinks : guestLinks}</Fragment>)}
        </nav>
    );
};

const mapStateToProps = state => ({
    auth: state.auth
});

Navbar.propTypes = {
    logout: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired,
};

export default connect(mapStateToProps, { logout })(Navbar);

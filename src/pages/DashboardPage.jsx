import React from 'react';
import './Styles/DashboardPage.css';
import useAuth from '../hooks/useAuth';
import { Link, useNavigate } from 'react-router-dom';

const DashboardPage = () => {
    const { logout } = useAuth();

    const user = JSON.parse(localStorage.getItem('user'));
    const navigate = useNavigate();

    const handleLogout = () => {
        // Llamar a la función de cierre de sesión
        logout();

        // Redireccionar a la página de inicio de sesión
        navigate('/login');
    };

    return (
        <div className="dashboard-page">
            <form className="form_main" action="">
                <p className="heading">Welcome back</p>
                <div className="inputContainer">
                    <p className='title_input'> {user?.firstName}   {user?.lastName}</p>
                    <Link to={'/'}><button>buy</button></Link>
                </div>
                <div className='input_correo'>
                    <span className='input-correo'>correo</span>
                    <span className='correo'> {user?.email}</span>
                </div>
                <button id="button" onClick={handleLogout}>
                    Cerrar sesión
                </button>
            </form>
        </div>
    );
};

export default DashboardPage;

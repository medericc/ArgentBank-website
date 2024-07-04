import { useSelector } from 'react-redux';
import { NavLink, Outlet } from 'react-router-dom';

const ProtectedRoutes = () => {
    const token = useSelector((state) => state.auth.token);

    if (!token) {
        return (
            <div className="main main-error bg-dark">
                <h1>Accès non autorisé</h1>
                <span>
                    <NavLink className="main-error-link" to="signin">
                        Se connecter
                    </NavLink>{' '}
                    pour accéder
                </span>
            </div>
        );
    }

    return <Outlet />;
};

export default ProtectedRoutes;

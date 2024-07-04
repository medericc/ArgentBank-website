
import { Link } from 'react-router-dom';

const NotFound = () => {
    return (
        <main className="main main-error bg-dark">
            <p className="icon-container">
                <i className="fa fa-exclamation-triangle" aria-hidden="true"></i>
            </p>
            <p className="error-message">Oups! La page que vous recherchez n'existe pas.</p>
            <Link to="/" className="main-error-link">Retourner à la page d'accueil</Link>
        </main>
    );
};

export default NotFound;

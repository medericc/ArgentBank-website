
import { Link } from 'react-router-dom';
import Logo from "../img/argentBankLogo.png";
import { useDispatch } from 'react-redux';
import { logout } from '../app/recognize/Slice'; 
import useAuth from '../hook/useAuth';

const Header = () => {
    const { userInfo, isConnected } = useAuth()
    const dispatch = useDispatch();

    const userName = userInfo?.body.userName;

    const handleLogout = () => {
        dispatch(logout()); 
    };

    return (
        <nav className='main-nav'>
            <Link to="/" className='main-nav-logo'>
                <img 
                    src={Logo} alt="Argent Bank Logo"
                    className='main-nav-logo-image'
                />
                <h1 className="sr-only">Argent Bank</h1>
            </Link>
            <div>
                {isConnected ? (
                    <>
                        <Link to="/dashboard" className='main-nav-item'>
                            <i className="fa fa-user-circle"></i>
                            {userName}
                        </Link>
                        <Link onClick={handleLogout} className='main-nav-item' to="/">
                            <i className="fa fa-sign-out"></i>
                            Sign Out
                        </Link>
                    </>
                ) : (
                    <Link className='main-nav-item' to="/signin">
                        <i className="fa fa-user-circle"></i> 
                        Sign In
                    </Link>
                )}
            </div>
        </nav>
    );
};

export default Header;

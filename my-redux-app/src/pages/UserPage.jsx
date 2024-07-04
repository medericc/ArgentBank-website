
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import Account from '../components/Account';
import EditUserForm from '../components/EditUsernameForm.jsx';
import accountsData from '../data/Data.json';
import { logout } from '../app/recognize/Slice'; 
import useAuth from '../hook/useAuth';
import Error from '../components/Error';

const Dashboard = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { userInfo, fetchError } = useAuth();

    const lastName = userInfo?.body?.lastName;
    const userDetails = accountsData.clientDetails.find(client => client.lastName === lastName);

    const handleLogout = () => {
        dispatch(logout());
        navigate('/');
    };

    return (
        <main className="main bg-white">
            {fetchError ? (
                <>
                    <Error>{fetchError}</Error>
                    <button className="edit-button" onClick={handleLogout}>
                        Logout
                    </button>
                </>
            ) : (
                <>
                    <div className="header">
                        <EditUserForm />
                    </div>
                    <h2 className="sr-only">Accounts</h2>
                    {userDetails?.accounts.map(account => (
                        <Account
                            key={account.title}
                            title={account.title}
                            amount={account.amount}
                            desc={account.description}
                            transactions={account.transactions}
                        />
                    ))}
                </>
            )}
        </main>
    );
};

export default Dashboard;

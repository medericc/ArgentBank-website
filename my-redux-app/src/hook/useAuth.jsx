import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getUserDetails } from '../app/recognize/Action';

const useAuth = () => {
    const { userInfo, error, fetchError, isConnected, isLoading, token } = useSelector((state) => state.auth);
    const dispatch = useDispatch();

    useEffect(() => {
        if (token) {
            dispatch(getUserDetails(token));
        }
    }, [dispatch, token]);

    return { userInfo, error, fetchError, isConnected, isLoading, token };
};

export default useAuth;

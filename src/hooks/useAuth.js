import  { useContext } from 'react';
import { UserContext } from '../components/Context/AuthProvider/AuthProvider';

const useAuth = () => {
    const Auth = useContext(UserContext);
    return Auth;
};

export default useAuth;

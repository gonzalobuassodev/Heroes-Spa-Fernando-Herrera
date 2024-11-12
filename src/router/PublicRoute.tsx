import { useContext } from 'react';
import { AuthContext } from '../auth';
import { Navigate } from 'react-router-dom';

export const PublicRoute = ({ children }: { children: React.ReactNode }) => {
    const { authState } = useContext(AuthContext);

      const lastPath = localStorage.getItem('lastPath') || '/';
    //   console.log(lastPath);

    return (authState.logged) 
    ? <Navigate to={lastPath} />
    : children 
};

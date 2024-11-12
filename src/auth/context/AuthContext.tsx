import { createContext } from 'react';
import { IState } from './AuthReducer';

interface IAuthContext {
    authState: IState;
    login: (id: string, name: string) => void;
    logout: () => void;
}

export const AuthContext = createContext<IAuthContext>(
    { 
        authState: { logged: false, user: { id: '', name: '' } }, login: () => null, 
        logout: () => null 
    });

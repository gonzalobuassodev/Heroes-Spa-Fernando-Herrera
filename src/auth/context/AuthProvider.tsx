import { useReducer } from 'react';
import { AuthContext } from './AuthContext';
import { authReducer, IUser } from './AuthReducer';
import { types } from '../types/types';

interface Props {
    children: React.ReactNode;
}

const initialState = {
    logged: false,
    user: {
        id: '',
        name: '',
    },
};

const init = () => {
    const user: IUser = JSON.parse(localStorage.getItem('user') as string);

    if (!user) {
        return initialState;
    }
    return {
        logged: !!user,
        user,
    }
};

export const AuthProvider = ({ children }: Props) => {
    const [authState, dispatch] = useReducer(authReducer, initialState, init);

    const login = (id:string = '',name: string = '') => {
        const action = {
            type: types.login,
            payload: {
                id,
                name,
            },
        };

        localStorage.setItem('user', JSON.stringify(action.payload));

        dispatch(action);
    };

    const logout = ()=> {

        const action = {
            type: types.logout,
            payload: {
                id: '',
                name: '',
            },
        }
        localStorage.removeItem('user');

        dispatch(action)
    };

    return (
        <AuthContext.Provider
            value={{
                authState,
                login,
                logout
            }}
        >
            {children}
        </AuthContext.Provider>
    );
};

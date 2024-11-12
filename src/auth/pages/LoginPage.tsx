import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../context';

export const LoginPage = () => {

    const { login } = useContext(AuthContext);
    const navigate = useNavigate();


    const onLogin = () => {
        const lastPath = localStorage.getItem('lastPath') || '/';
        // console.log(lastPath);

        login('2','Gonzalo Buasso');
        navigate(lastPath, { replace: true });
    };
    return (
        <div className="px-4">
            <h1 className="py-4 text-3xl">Login</h1>
            <hr />

            <button
                onClick={onLogin}
                className="bg-blue-500 hover:bg-blue-800 text-white p-2 rounded-md m-4"
            >
                Login
            </button>
        </div>
    );
};

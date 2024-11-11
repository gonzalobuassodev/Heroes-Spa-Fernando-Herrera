import { useNavigate } from 'react-router-dom';

export const LoginPage = () => {
    const navigate = useNavigate();
    const onLogin = () => {
        navigate('/marvel', { replace: true });
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

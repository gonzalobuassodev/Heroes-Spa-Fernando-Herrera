import { Link, NavLink, useNavigate } from 'react-router-dom';

export const Navbar = () => {

    const navigate = useNavigate();

    const onLogout = () => {
        // console.log('logout');
        navigate('/login', {
            replace: true,
        });
    };

    return (
        <nav className="w-full bg-slate-800 flex items-center justify-between p-4 text-white gap-3">
            <div className="flex items-center gap-3">
                <Link className="navbar-brand" to="/">
                    Heroes
                </Link>
                <div className="navbar-collapse">
                    <div className="flex gap-3">
                        <NavLink
                            to="/marvel"
                            className={({ isActive }) =>
                                `${isActive ? 'text-white' : 'text-slate-500'}`
                            }
                        >
                            Marvel
                        </NavLink>

                        <NavLink
                            className={({ isActive }) =>
                                `${isActive ? 'text-white' : 'text-slate-500'}`
                            }
                            to="/dc"
                        >
                            Dc
                        </NavLink>

                        <NavLink
                            className={({ isActive }) =>
                                `${isActive ? 'text-white' : 'text-slate-500'}`
                            }
                            to='/search'
                        >
                            Search
                        </NavLink>
                    </div>
                </div>
            </div>

            <div className="">
                <ul className="flex gap-3 items-center">
                    <span className="text-blue-500">Gonzalo</span>

                    <button
                        onClick={onLogout}
                        className="bg-blue-500 rounded-md hover:bg-blue-800 p-1"
                    >
                        Logout
                    </button>
                </ul>
            </div>
        </nav>
    );
};

import { Route, Routes } from 'react-router-dom';

import { LoginPage } from '../auth';
import { HeroesRoutes } from '../heroes';
import { PrivateRoute } from './PrivateRoute';
import { PublicRoute } from './PublicRoute';
// import { ReisterPage } from '../auth/pages/ReisterPage';

export const AppRouter = () => {
    return (
        <>
            <Routes>

                <Route path="/login" element={
                    
                    <PublicRoute>
                        {/* <Routes>
                            <Route path='/login' element={<LoginPage />} />
                            <Route path='/register' element={<ReisterPage />} />
                        </Routes> */}
                        <LoginPage />
                        {/* <ReisterPage /> */}
                    </PublicRoute>
                    
                    } />

                <Route
                    path="/*"
                    element={
                        <PrivateRoute>
                            <HeroesRoutes />
                        </PrivateRoute>
                    }
                />
                {/* <Route path="/*" element={<HeroesRoutes />} /> */}
            </Routes>
        </>
    );
};

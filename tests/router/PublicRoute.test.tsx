import { render, screen } from '@testing-library/react';
import { AuthContext } from '../../src/auth/context/AuthContext';
import React from 'react';
import { PublicRoute } from '../../src/router/PublicRoute';
// import { IState } from '../../src/auth';
import { MemoryRouter, Route, Routes } from 'react-router-dom';

describe('Test en <PublicRoute />', () => {
    test('should show the children if the user is not logged', () => {
        const contextValue = {
            authState: {
                logged: false,
                user: {
                    id: '',
                    name: '',
                },
            },
            login: jest.fn(),
            logout: jest.fn(),
        };

        render(
            <AuthContext.Provider value={contextValue}>
                <PublicRoute>
                    <h1>Routa publica</h1>
                </PublicRoute>
            </AuthContext.Provider>
        );

        expect(screen.getByRole('heading')).toBeTruthy();

        // screen.debug();
    });

    test('should show the children if the user is logged', () => {
        const contextValue = {
            authState: {
                logged: true,
                user: {
                    id: '1',
                    name: 'Gonzalo',
                },
            },
            login: jest.fn(),
            logout: jest.fn(),
        };

        render(
            <AuthContext.Provider value={contextValue}>
                <MemoryRouter
                    initialEntries={['/login']}
                    future={{
                        v7_relativeSplatPath: true,
                        v7_startTransition: true,
                    }}
                >
                    <Routes>
                        <Route
                            path="login"
                            element={
                                <PublicRoute>
                                    <h1>Routa publica</h1>
                                </PublicRoute>
                            }
                        />
                        <Route path="/" element={<h1>DC</h1>} />
                    </Routes>
                </MemoryRouter>
            </AuthContext.Provider>
        );

        // screen.debug();

        expect(screen.getByText('DC')).toBeTruthy();
    });
});

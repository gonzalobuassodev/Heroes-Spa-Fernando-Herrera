import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';

import { AuthContext } from '../../src/auth/context/AuthContext';
import { PrivateRoute } from '../../src/router/PrivateRoute';

describe('Testing PrivateRoute', () => {
    test('should show the children when the user is logged in', () => {
        Storage.prototype.setItem = jest.fn();

        const contextValue = {
            authState: {
                logged: true,
                user: {
                    id: '1',
                    name: 'John Doe',
                },
            },
            login: jest.fn(),
            logout: jest.fn(),
        };

        render(
            <AuthContext.Provider value={contextValue}>
                <MemoryRouter
                    initialEntries={['/dc']}
                    future={{
                        v7_relativeSplatPath: true,
                        v7_startTransition: true,
                    }}
                >
                    <PrivateRoute>
                        <h1>DC</h1>
                    </PrivateRoute>
                </MemoryRouter>
            </AuthContext.Provider>
        );

        expect(screen.getByText('DC')).toBeTruthy();
        expect(localStorage.setItem).toHaveBeenCalledWith("lastPath", "/dc");
    });
});

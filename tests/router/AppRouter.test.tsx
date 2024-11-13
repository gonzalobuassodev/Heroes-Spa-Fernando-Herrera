import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';

import { AuthContext } from '../../src/auth';
import { AppRouter } from '../../src/router/AppRouter';

describe('Test in AppRouter', () => {
    test('should show the login if the user in not logged ', () => {
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
                <MemoryRouter
                    initialEntries={['/marvel']}
                    future={{
                        v7_relativeSplatPath: true,
                        v7_startTransition: true,
                    }}
                >
                    <AppRouter />
                </MemoryRouter>
            </AuthContext.Provider>
        );

        expect(screen.getAllByText('Login').length).toBe(2);
        // screen.debug();
    });

    test('should show the marvel components if the user is logged', () => {
        const contextValue = {
            authState: {
                logged: true,
                user: {
                    id: '122',
                    name: 'Gonzalo',
                },
            },
            login: jest.fn(),
            logout: jest.fn(),
        };

        render(
            <MemoryRouter
                future={{
                    v7_relativeSplatPath: true,
                    v7_startTransition: true,
                }}
                initialEntries={['/marvel']}
            >
                <AuthContext.Provider value={contextValue}>
                    <AppRouter />
                </AuthContext.Provider>
            </MemoryRouter>
        );

        expect(screen.getAllByText('Marvel').length).toBeGreaterThanOrEqual(1);
        // screen.debug();
    });
});

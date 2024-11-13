import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';

import { AuthContext } from '../../../src/auth';
import { Navbar } from '../../../src/ui';

const mockedUseNavigate = jest.fn();

jest.mock('react-router-dom', ()=>({
    ...jest.requireActual('react-router-dom'),
    useNavigate: () => mockedUseNavigate
}))

describe('Test Navbar', () => {
    const contextValue = {
        authState: {
            logged: true,
            user: {
                id: '1212',
                name: 'Gonzalo',
            },
        },
        login: jest.fn(),
        logout: jest.fn(),
    };

    beforeEach(() => jest.clearAllMocks());

    test('should show the ', () => {

        render(
            <AuthContext.Provider value={contextValue}>
                <MemoryRouter
                    initialEntries={['/marvel']}
                    future={{
                        v7_relativeSplatPath: true,
                        v7_startTransition: true,
                    }}
                >
                    <Navbar />
                </MemoryRouter>
            </AuthContext.Provider>
        );

        // screen.debug();

        expect (screen.getByText(contextValue.authState.user.name).innerHTML).toEqual(contextValue.authState.user.name);
    });

    test('shoud log out when click on the logout button and navigate to the login page', () => {

        render(
            <AuthContext.Provider value={contextValue}>
                <MemoryRouter
                    initialEntries={['/marvel']}
                    future={{
                        v7_relativeSplatPath: true,
                        v7_startTransition: true,
                    }}
                >
                    <Navbar />
                </MemoryRouter>
            </AuthContext.Provider>
        );

        
        const logoutButton = screen.getByRole('button');

        fireEvent.click(logoutButton);
        expect(logoutButton).toBeTruthy();
        expect(contextValue.logout).toHaveBeenCalled();
        expect(mockedUseNavigate).toHaveBeenCalledWith('/login', { replace: true });
    
    });
});

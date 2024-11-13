import React from 'react';
import { render } from '@testing-library/react';
import { fireEvent, screen } from '@testing-library/dom';
import { MemoryRouter } from 'react-router-dom';

import { SearchPage } from '../../../src/heroes/pages/SearchPage';

const mockUseNavigate = jest.fn();

jest.mock('react-router-dom', () => ({
    ...jest.requireActual('react-router-dom'),
    useNavigate: () => mockUseNavigate,
}));

describe('Testing SearchPage', () => {
    beforeEach(() => jest.clearAllMocks);
    test('should show the components with the default values', () => {
        const { container } = render(
            <MemoryRouter
                future={{
                    v7_relativeSplatPath: true,
                    v7_startTransition: true,
                }}
            >
                <SearchPage />
            </MemoryRouter>
        );

        expect(container).toMatchSnapshot();
        // screen.debug();
    });

    test('should show to Batman and the input value with the query params value', () => {
        render(
            <MemoryRouter
                initialEntries={['/search?q=batman']}
                future={{
                    v7_relativeSplatPath: true,
                    v7_startTransition: true,
                }}
            >
                <SearchPage />
            </MemoryRouter>
        );

        const inputSearch = screen.getByRole('textbox') as HTMLInputElement;
        expect(inputSearch.value).toBe('batman');

        const img = screen.getByRole('img') as HTMLImageElement;
        expect(img.src).toContain('batman');

        const alertSearch = screen.getByLabelText('alert-search');
        expect(alertSearch.className).toContain('hidden');

        const alertNoResult = screen.getByLabelText('alert-no-results');
        expect(alertNoResult.className).toContain('hidden');

        // screen.debug();
    });

    test('should show an error if dont find the hero', () => {
        render(
            <MemoryRouter
                initialEntries={['/search?q=batman21334']}
                future={{
                    v7_relativeSplatPath: true,
                    v7_startTransition: true,
                }}
            >
                <SearchPage />
            </MemoryRouter>
        );

        const alertNoResult = screen.getByLabelText('alert-no-results');
        expect(alertNoResult.className).not.toContain('hidden');

        // screen.debug();
    });

    test('should call navigate function to a new page', () => {

        const inputValue = 'superman';
        
        render(
            <MemoryRouter
                initialEntries={['/search']}
                future={{
                    v7_relativeSplatPath: true,
                    v7_startTransition: true,
                }}
            >
                <SearchPage />
            </MemoryRouter>
        );

        const input = screen.getByRole('textbox') as HTMLInputElement;
        fireEvent.change(input, {
            target: { name: 'searchText', value: inputValue },
        });

        // console.log(input.value)

        const form = screen.getByLabelText('form');
        fireEvent.submit(form);

        expect(mockUseNavigate).toHaveBeenCalledWith(`?q=${inputValue}`);
    });
});

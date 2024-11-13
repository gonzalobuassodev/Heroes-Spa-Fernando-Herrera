import { authReducer } from '../../../src/auth/context/AuthReducer';
import { types } from '../../../src/auth/types/types';
describe('Testing AuthReducer', () => {
    
    const initialState = {
        logged: false,
        user: {
            id: '',
            name: '',
        },
    };

    test('should return the initial state', () => {

        const state = authReducer(initialState, {});
        expect(state).toEqual(initialState);

    });

    test('Should call the login action', () => {

        const action = {
            type: types.login,
            payload: {
                id: '2',
                name: 'Gonzalo Buasso',
            },
        };

        const state = authReducer(initialState, action);

        expect(state).toEqual({
            logged: true,
            user: action.payload
        })

    });

    test('Should call the logout action', () => {

        const action ={ 
            type: types.logout,
            payload: {
                id: '',
                name: '',
            }
        }

        const state = authReducer(initialState, action)

        expect(state).toEqual({
            logged: false,
            user: {
                id: '',
                name: '',
            }
        })
    });
})
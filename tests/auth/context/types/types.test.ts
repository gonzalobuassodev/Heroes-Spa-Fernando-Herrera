import { types } from "../../../../src/auth/types/types";

describe('Test Types', () => {

    test('should return this types', () => {
        
        // console.log(types)

        expect(types).toEqual({
            login: '[Auth] Login',
            logout: '[Auth] Logout',
        })

    });
})
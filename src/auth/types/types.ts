export const types = {
    login: '[Auth] Login',
    logout: '[Auth] Logout',
}

export interface Action {
    type: 'login' | 'logout';
}
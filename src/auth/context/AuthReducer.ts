import { types } from "../types/types";

export interface IAction { 
    type: string;
    payload: IUser;
}

export interface IState {
    logged: boolean;
    user: IUser;
}

export interface IUser {
    id?: string;
    name?: string;
}

export const authReducer = (state: IState, action: IAction) => {

    switch (action.type) {
        case types.login:
            
            return {
                ...state,
                logged: true,
                user: action.payload
            };

        case types.logout:

            return {
                ...state,
                logged: false,
                user: {}
            };
    
        default:
            return state;
    }


}


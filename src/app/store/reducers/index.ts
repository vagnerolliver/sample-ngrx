import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer
} from '@ngrx/store';
import { environment } from '../../../environments/environment';

import {User} from '../../models/user';

import {AuthActions, AuthActionTypes} from '../actions/auth.actions';

export interface AuthState {
  loggedIn: boolean;
  user: User;
}

export const initialAuthStatus: AuthState = {
  loggedIn: false,
  user: undefined
};

export interface AppState {
  auth: AuthState;
}

function authReducer(state = initialAuthStatus, action: AuthActions): AuthState {
  switch (action.type) {
    case AuthActionTypes.LoginAction:
      return {
        loggedIn: true,
        user: action.payload.user
      };

    case AuthActionTypes.LogoutAction:
      return {
        loggedIn: false,
        user: undefined
      };

    default:
      return state;
  }
}

export const reducers: ActionReducerMap<AppState> = {
  auth: authReducer
};


export const metaReducers: MetaReducer<AppState>[] = !environment.production ? [] : [];

import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer
} from '@ngrx/store';
import { environment } from '../../../environments/environment';

import {User} from '../../models/user';

import {LoginActions, LoginActionTypes} from '../../pages/login/login.actions';

export interface LoginState {
  loggedIn: boolean;
  user: User;
}

export const initialLoginState: LoginState = {
  loggedIn: false,
  user: undefined
};

export interface AppState {
  login: LoginState;
}

function loginReducer(state = initialLoginState, action: LoginActions): LoginState {
  switch (action.type) {
    case LoginActionTypes.LoginAction:
      return {
        loggedIn: true,
        user: action.payload.user
      };

    case LoginActionTypes.LogoutAction:
      return {
        loggedIn: false,
        user: undefined
      };

    default:
      return state;
  }
}

export const reducers: ActionReducerMap<AppState> = {
  login: loginReducer,
};


export const metaReducers: MetaReducer<AppState>[] = !environment.production ? [] : [];

import {createSelector} from '@ngrx/store';

export const seletcAuthState = state => state.auth;

export const isLoggedIn = createSelector(
  seletcAuthState,
  auth => auth.loggedIn
);

export const isLoggedOut = createSelector(
  isLoggedIn,
  loggedIn => !loggedIn
);

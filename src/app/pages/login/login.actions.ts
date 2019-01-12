import { Action } from '@ngrx/store';
import {User} from '../../models/user';

export enum LoginActionTypes {
  LoginAction = '[Login] Action',
  LogoutAction = '[Logout] Action',
}

export class Login implements Action {
  readonly type = LoginActionTypes.LoginAction;

  constructor(public payload: {user: User}) {
  }
}

export class Logout implements Action {
  readonly type = LoginActionTypes.LogoutAction;
}

export type LoginActions = Login | Logout;

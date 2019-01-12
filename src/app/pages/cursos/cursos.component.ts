import { Component, OnInit } from '@angular/core';

import {map} from 'rxjs/operators';

import {Store} from '@ngrx/store';

import {AppState} from '../../store/reducers';
import {Logout} from '../login/login.actions';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.css']
})
export class CursosComponent implements OnInit {

  isLoggedIn$: Observable<boolean>;
  isLoggedOut$: Observable<boolean>;

  constructor(private store: Store<AppState>) {}

  ngOnInit() {
    this.isLoggedIn$ = this.store
      .pipe(
        map(state => state.login.loggedIn)
      );

    this.isLoggedOut$ = this.store
      .pipe(
        map(state => !state.login.loggedIn)
      );
  }

  logout() {
    this.store.dispatch(new Logout());
  }

}

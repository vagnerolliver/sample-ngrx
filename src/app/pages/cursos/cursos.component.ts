import { Component, OnInit } from '@angular/core';

import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';

import {select, Store} from '@ngrx/store';

import {AppState} from '../../store/reducers';
import {Logout} from '../../store/actions/auth.actions';

import {isLoggedIn, isLoggedOut} from '../../modules/auth/auth.selectors';

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.sass']
})
export class CursosComponent implements OnInit {

  isLoggedIn$: Observable<boolean>;
  isLoggedOut$: Observable<boolean>;

  constructor(private store: Store<AppState>) {}

  ngOnInit() {
    // this.isLoggedIn$ = this.store
    //   .pipe(
    //     map(state => state.auth.loggedIn)
    //   );

    this.isLoggedIn$ = this.store
      .pipe(
        select(isLoggedIn)
      );


    this.isLoggedOut$ = this.store
      .pipe(
        select(isLoggedOut)
      );
  }

  logout() {
    this.store.dispatch(new Logout());
  }

}

import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';

import { AppState } from '../../store/auth.reducers';
import { isLoggedIn, isLoggedOut } from '../../store/auth.selectors';
import { Observable } from 'rxjs';
import { Logout } from '../../store/auth.actions';
import { map, tap } from 'rxjs/operators';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.sass']
})
export class HeaderComponent implements OnInit {
  isLoggedOut$: Observable<boolean>;
  isLoggedIn$: Observable<boolean>;

  constructor(private store: Store<AppState>) {}

  ngOnInit() {
    this.isLoggedOut$ = this.store
      .pipe(
        select(isLoggedOut)
      );

    this.isLoggedIn$ = this.store
      .pipe(
        select(isLoggedIn)
      );
  }

  logout() {
    this.store.dispatch(new Logout());
  }
}

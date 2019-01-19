import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {Router} from '@angular/router';
import {Store} from '@ngrx/store';

import {Login, Logout} from '../../store/auth.actions';
import {AppState} from '../../store/auth.reducers';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  form: FormGroup;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private store: Store<AppState>) {

    this.form = fb.group({
      name: ['vagner'],
      password: ['123']
    });
  }

  ngOnInit() {}

  login() {
    const user = this.form.value;
    this.store.dispatch(new Login({user}));
    this.router.navigateByUrl('/cursos');
  }
}

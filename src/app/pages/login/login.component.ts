import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {Router} from '@angular/router';
import {Store} from '@ngrx/store';

import {LoginService} from './login.service';

import {Login, Logout} from './login.actions';
import {AppState} from '../../store/reducers';

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
    private loginService: LoginService,
    private store: Store<AppState>) {

    this.form = fb.group({
      name: ['vagner'],
      password: ['123']
    });
  }

  ngOnInit() {
  }

  login() {
    const user = this.form.value;
    this.store.dispatch(new Login({user}));
    this.router.navigateByUrl('/cursos');
  }
}

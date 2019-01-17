import { Component, OnInit } from '@angular/core';

import {Observable, timer } from 'rxjs';
import {map} from 'rxjs/operators';

import {CoursesService} from '../../services/courses.service';

import {select, Store} from '@ngrx/store';

import {AppState} from '../../store/auth.reducers';
import {Logout} from '../../store/auth.actions';

import { AllCoursesRequested} from './store/course.actions';

import {isLoggedIn, isLoggedOut} from '../../modules/auth/auth.selectors';

@Component({
  selector: 'app-cursos',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.sass']
})
export class CourseComponent implements OnInit {

  isLoggedIn$: Observable<boolean>;
  isLoggedOut$: Observable<boolean>;

  constructor(private store: Store<AppState>,
              private courseService: CoursesService) {}

  ngOnInit() {
    this.store.dispatch(new AllCoursesRequested());

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

import { Injectable } from '@angular/core';
import {Actions, Effect, ofType} from '@ngrx/effects';
import {select, Store} from '@ngrx/store';
import {filter, map, mergeMap, withLatestFrom} from 'rxjs/operators';

import {CoursesService} from '../../../services/courses.service';
import {AllCoursesLoaded, AllCoursesRequested, CourseActionTypes} from './course.actions';
import { allCoursesLoaded, selectAllCourses } from './course.seletors';
import {AppState} from '../../../store/auth.reducers';


@Injectable()
export class CourseEffects {
  @Effect()
  loadAllCourses$ = this.actions$
    .pipe(
      ofType<AllCoursesRequested>(CourseActionTypes.AllCoursesRequested),
      withLatestFrom(this.store.pipe(select(allCoursesLoaded))),
      filter(([action, isLoaded]) => !isLoaded),
      mergeMap(() => this.coursesService.findAllCourses()),
      map(courses => new AllCoursesLoaded({courses}))
    );

  constructor(private actions$: Actions,
              private store: Store<AppState>,
              private  coursesService: CoursesService) {}
}

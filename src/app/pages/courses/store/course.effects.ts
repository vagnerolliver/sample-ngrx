import { Injectable } from '@angular/core';
import {Actions, Effect, ofType} from '@ngrx/effects';
import {AppState} from '../../../store/reducers';
import {select, Store} from '@ngrx/store';
import {filter, map, mergeMap, withLatestFrom} from 'rxjs/operators';
import {CoursesService} from '../../../services/courses.service';
import {AllCoursesLoad, AllCoursesRequested, CourseActionTypes} from './course.actions';


@Injectable()
export class CourseEffects {
  @Effect()
  loadAllCourses$ = this.actions$
    .pipe(
      ofType<AllCoursesRequested>(CourseActionTypes.AllCoursesRequested),
      filter(([action, allCoursesLoaded]) => !allCoursesLoaded),
      mergeMap(() => this.coursesService.findAllCourses()),
      map(courses => new AllCoursesLoad({courses}))
    );

  constructor(private actions$: Actions,
              private store: Store<AppState>,
              private  coursesService: CoursesService) {}
}

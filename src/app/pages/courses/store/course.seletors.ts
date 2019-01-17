import {createFeatureSelector, createSelector} from '@ngrx/store';

import * as fromCourse from './course.reducers';
import {CoursesState} from './course.reducers';

export const selectCoursesState = createFeatureSelector<CoursesState>('payload');

export const selectAllCourses = createSelector(
  selectCoursesState
);

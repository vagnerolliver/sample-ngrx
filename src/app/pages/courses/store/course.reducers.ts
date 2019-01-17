import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer
} from '@ngrx/store';

import {environment} from '../../../../environments/environment';

import {storeFreeze} from 'ngrx-store-freeze';

import {Course} from '../../../models/course';
import {CourseActions, CourseActionTypes} from './course.actions';

export interface CourseState {
  courses: Course[];
}

export function coursesReducer(state, action: CourseActions): CourseState {
  switch (action.type) {
    case CourseActionTypes.AllCoursesLoad:
      return {
        courses: [...action.payload.courses]
      }

    default:
      return state;
  }
}

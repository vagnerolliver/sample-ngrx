import { Action } from '@ngrx/store';
import {Course} from '../../../models/course';

export enum CourseActionTypes {
  AllCoursesRequested = '[Courses Course Page] All Courses Requested',
  AllCoursesLoad = '[Courses Course Page] All Courses Load'
}

export class AllCoursesRequested implements Action {
  readonly type = CourseActionTypes.AllCoursesRequested;
}

export class AllCoursesLoad implements Action {
  readonly type = CourseActionTypes.AllCoursesLoad;

  constructor(public payload: {  courses: Course[]}) {}
}

export type CourseActions =  AllCoursesRequested | AllCoursesLoad;

import {Course} from '../../../models/course';
import {CourseActions, CourseActionTypes} from './course.actions';

export interface CoursesState {
  courses: Course[];
  allCoursesLoaded: boolean;
}

export const initialCoursetate: CoursesState = {
  courses: [],
  allCoursesLoaded: false
};

export function coursesReducer(state = initialCoursetate, action: CourseActions): CoursesState {
  switch (action.type) {
    case CourseActionTypes.allCoursesLoaded:
      return {
        courses: [...action.payload.courses], allCoursesLoaded: true
      }

    default:
      return state;
  }
}

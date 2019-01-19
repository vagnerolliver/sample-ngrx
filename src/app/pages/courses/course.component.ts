import { Component, OnInit } from '@angular/core';

import { Observable } from 'rxjs';

import { select, Store } from '@ngrx/store';

import { AppState } from '../../store/auth.reducers';
import { AllCoursesRequested } from './store/course.actions';
import { selectAllCourses } from './store/course.seletors';

@Component({
  selector: 'app-cursos',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.sass']
})
export class CourseComponent implements OnInit {
  allCourses$: Observable<boolean>;

  constructor(private store: Store<AppState>) {}

  ngOnInit() {
    this.store.dispatch(new AllCoursesRequested());
    this.allCourses$ = this.store.pipe(select(selectAllCourses));
  }
}

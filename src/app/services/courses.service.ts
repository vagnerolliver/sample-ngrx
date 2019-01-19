import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import {map} from 'rxjs/operators';
import {Observable} from 'rxjs';

import {Cnt} from './cnt';
import {Course} from '../models/course';

@Injectable({
  providedIn: 'root'
})
export class CoursesService extends Cnt {

  constructor(private http: HttpClient) {
    super();
  }

  findAllCourses(): Observable<Course[]> {
      return this.http.get(this.connectTo('courses', ''))
      .pipe(map(res => res['payload']));
  }
}

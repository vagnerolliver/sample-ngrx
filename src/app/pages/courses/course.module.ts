import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HttpClientModule} from '@angular/common/http';

import {StoreModule} from '@ngrx/store';
import {EffectsModule} from '@ngrx/effects';

import { CourseRoutingModule } from './course-routing.module';

import {CoursesService} from '../../services/courses.service';

import {CourseComponent} from './course.component';

import {CourseEffects} from './store/course.effects';
import {coursesReducer} from './store/course.reducers';

@NgModule({
  declarations: [CourseComponent],
  imports: [
    CommonModule,
    CourseRoutingModule,
    HttpClientModule,
    StoreModule.forFeature('payload', coursesReducer),
    EffectsModule.forRoot([CourseEffects])
  ],
  providers: [CoursesService]
})
export class CourseModule { }

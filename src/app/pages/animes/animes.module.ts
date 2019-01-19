import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AnimesComponent } from './animes.component';

import { AnimeRoutingModule } from './anime-rounting.module';

@NgModule({
  declarations: [AnimesComponent],
  imports: [
    CommonModule,
    AnimeRoutingModule
  ]
})
export class AnimesModule { }

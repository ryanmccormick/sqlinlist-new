import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SqlinlistComponent } from './sqlinlist.component';
import { FormsModule } from '@angular/forms';

export const sharedComponents = [SqlinlistComponent];

@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [sharedComponents],
  declarations: [sharedComponents]
})
export class SqlinlistModule { }

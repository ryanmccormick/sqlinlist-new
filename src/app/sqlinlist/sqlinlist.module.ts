import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { SqlinlistComponent } from './sqlinlist.component';
import { InputSettingsDirective } from './shared/input-settings.directive';

export const sharedComponents = [SqlinlistComponent, InputSettingsDirective];

@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [sharedComponents],
  declarations: [sharedComponents]
})
export class SqlinlistModule { }

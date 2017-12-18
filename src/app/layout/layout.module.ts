import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TopnavComponent } from './topnav/topnav.component';

/**
 * Shared layout component barrel. Anything listed here is both declared
 * and exported in the module definition below.
 * @type {TopnavComponent[]}
 */
export const layoutComponents = [TopnavComponent];

/**
 * LayoutModule: Shared module that is the parent to any and all layout-related components.
 */
@NgModule({
  imports: [
    CommonModule
  ],
  exports: [layoutComponents],
  declarations: [layoutComponents]
})
export class LayoutModule { }

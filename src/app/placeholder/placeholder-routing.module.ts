import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PlaceholderComponent } from './placeholder.component';

const routes: Routes = [{ path: '', component: PlaceholderComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PlaceholderRoutingModule { }

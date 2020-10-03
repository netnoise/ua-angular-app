import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegisterContainerComponent } from './containers/register-container/register-container.component';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from '../shared/shared.module';

export const ROUTES: Routes = [
  { path: '', component: RegisterContainerComponent },
];

@NgModule({
  declarations: [RegisterContainerComponent],
  imports: [CommonModule, RouterModule.forChild(ROUTES), SharedModule],
})
export class RegisterModule {}

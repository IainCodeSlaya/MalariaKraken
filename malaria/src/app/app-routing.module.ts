import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CausesComponent } from './causes/causes/causes.component';
import { CausesDetailComponent } from './causes/causes-detail/causes-detail.component';
import { CausesAddComponent } from './causes/causes-add/causes-add.component';
import { CausesEditComponent } from './causes/causes-edit/causes-edit.component';

const routes: Routes = [{
  path: 'causes',
  component: CausesComponent,
  data: { title: 'List of Causes' }
},
{
  path: 'causes-details/:id',
  component: CausesDetailComponent,
  data: { title: 'Cause Details' }
},
{
  path: 'causes-add',
  component: CausesAddComponent,
  data: { title: 'Add Cause' }
},
{
  path: 'causes-edit/:id',
  component: CausesEditComponent,
  data: { title: 'Edit Cause' }
},
{
  path: '',
  redirectTo: '/causes',
  pathMatch: 'full'
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

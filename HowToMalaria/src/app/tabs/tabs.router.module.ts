import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';
import { AddPageModule } from '../add/add.module';
import { EditPageModule } from '../edit/edit.module';
import { HomePageModule } from '../home/home.module';
import { DetailsPageModule } from '../details/details.module';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: '',
        redirectTo: '/tabs/(home:home)',
        pathMatch: 'full',
      },
      {
        path: 'home',
        outlet: 'home',
        component: HomePage
      },
      {
        path: 'add',
        outlet: 'add',
        component: AddPage
      },
      {
        path: ':id',
        outlet: 'edit',
        component: EditPage
      },
      {
        path: ':id',
        outlet: 'details',
        component: DetailsPage
      }
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/(home:home)',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class TabsPageRoutingModule {}

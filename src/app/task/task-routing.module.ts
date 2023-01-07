import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreateComponent } from './create/create.component';
import { EditComponent } from './edit/edit.component';
import { IndexComponent } from './index/index.component';

const routes: Routes = [
  {
    path: 'task', redirectTo: 'task/index', pathMatch: 'full'
  },
  {
    path: 'task/index', component: IndexComponent
  },
  {
    path: 'task/create', component: CreateComponent
  },
  {
    path: 'task/edit/:id', component: EditComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TaskRoutingModule { }

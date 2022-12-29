import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreateComponent } from './create/create.component';
import { EditComponent } from './edit/edit.component';
import { IndexComponent } from './index/index.component';

const routes: Routes = [
  { path: 'customer', redirectTo: 'customer/index', pathMatch: 'full'},
  { path: 'customer/index', component: IndexComponent },
  { path: 'customer/create', component: CreateComponent },
  { path: 'customer/edit/:idcustomer', component: EditComponent } 
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CustomerRoutingModule { }

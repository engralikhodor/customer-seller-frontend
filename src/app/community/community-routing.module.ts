import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreateComponent } from './create/create.component';
import { EditComponent } from './edit/edit.component';
import { IndexComponent } from './index/index.component';


const routes: Routes = [

  { path: 'community', redirectTo: 'community/index', pathMatch: 'full' },
  { path: 'community/index', component: IndexComponent },
  { path: 'community/create', component: CreateComponent },
  { path: 'community/edit/:id', component: EditComponent }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CommunityRoutingModule { }

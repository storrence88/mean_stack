import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component'
import { NewComponent } from './home/new/new.component';
import { EditComponent } from './home/edit/edit.component';
import { ViewComponent } from './home/view/view.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', component: HomeComponent },
  { path: 'pets/new', component: NewComponent },
  { path: 'pets/:id/edit', component: EditComponent },
  { path: 'pets/:id', component: ViewComponent }
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

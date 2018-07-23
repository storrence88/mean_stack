import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { NewComponent } from './home/new/new.component';
import { EditComponent } from './home/edit/edit.component';
import { ReviewsComponent } from './reviews/reviews.component';
import { CreateComponent } from './reviews/create/create.component';

const routes: Routes = [
  { path: 'food', component: HomeComponent, children: [
    { path: ':id/edit', component: EditComponent }] 
  },
  { path: 'food/new', component: NewComponent },
  { path: 'food/reviews', component: ReviewsComponent },
  { path: 'food/reviews/food/new', component: CreateComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

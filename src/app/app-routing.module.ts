import { Routes, RouterModule } from '@angular/router';
import { QuizComponent } from './quiz/quiz.component';
import { NgModule } from '@angular/core';
import { AddComponent } from './add/add.component';
import { AboutComponent } from './about/about.component';
import { ListComponent } from './list/list.component';

const routes: Routes = [
  {
    path: '',
    component: AboutComponent
  },
  {
    path: 'quiz',
    component: QuizComponent
  },
  {
    path: 'add',
    component: AddComponent
  },
  { 
    path:'about',
    component: AboutComponent
  },
  { 
    path:'list',
    component: ListComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: []
})

export class AppRoutingModule { }

export const routingComponents = [AddComponent, QuizComponent, AboutComponent, ListComponent]


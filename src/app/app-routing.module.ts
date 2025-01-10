import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';// <--- import HomeComponent
import { ContentComponent } from './pages/content/content.component' // <--- import ContentComponent

const routes: Routes = [
  {
    path: '',
    component:HomeComponent
  },
 {
   path: 'content/:id',
   component:ContentComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

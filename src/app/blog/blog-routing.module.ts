import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BlogComponent } from './blog/blog.component';
import { HtmlComponent } from './html/html.component';
import { CssComponent } from './css/css.component';
import { AngularComponent } from './angular/angular.component';
import { JavascriptComponent } from './javascript/javascript.component';

const routes: Routes = [
  {
    path: '',
    component: BlogComponent
  },
  {
    path: 'html',
    component: HtmlComponent
  },
  {
    path: 'css',
    component: CssComponent
  },
  {
    path: 'angular',
    component: AngularComponent
  },
  {
    path:'javascript',
    component:JavascriptComponent
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BlogRoutingModule { }

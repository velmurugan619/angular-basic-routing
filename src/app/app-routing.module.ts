import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ChildOneComponent } from './child-one/child-one.component';
import { ChildTwoComponent } from './child-two/child-two.component';

const routes: Routes = [{
  path: '',
  component: ChildOneComponent
},{
  path: 'child-two',
  component: ChildTwoComponent
},
{
  path: '**',
  component: ChildTwoComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

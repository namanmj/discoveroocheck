import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component'
import { CustinfoComponent } from './custinfo/custinfo.component'
const routes: Routes = [ {path: '',component: LoginComponent},
{path: 'login',component: LoginComponent},
{path: 'data', component: CustinfoComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

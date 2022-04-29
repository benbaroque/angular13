import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OtherComponent } from './other/other.component';
import { UserComponent } from './user/user.component';
import { AuthenGuard } from './authen.guard';

import { LoginComponent } from './login/login.component';

const routes: Routes = [
  {path: 'user', component: UserComponent, canActivate: [AuthenGuard]},
  {path: 'other', component: OtherComponent},

  {path: 'login', component: LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

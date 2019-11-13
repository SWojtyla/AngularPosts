import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { UserListComponent } from './user-list/user-list.component';
import { AddPostComponent } from './add-post/add-post.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { RegisterComponent } from './user/register/register.component';
import { LoginComponent } from './user/login/login.component';
import { AuthGuard } from './user/auth.guard';
const appRoutes: Routes = [
  { path: 'user-list', component: UserListComponent },
  {path: 'add-post',component:AddPostComponent, canActivate: [ AuthGuard ],},
  {path: 'register',component:RegisterComponent},
  {path: 'login',component:LoginComponent},
  { path: '', redirectTo: 'user-list', pathMatch: 'full'},
  { path: '**', component: PageNotFoundComponent}
  
];
@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(appRoutes),
    
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }

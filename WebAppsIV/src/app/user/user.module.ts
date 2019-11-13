import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule, HttpClientJsonpModule } from '@angular/common/http';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { AppComponent } from '../app.component';
import { PostComponent } from '../post/post.component';
import { CommentsComponent } from '../comments/comments.component';
import { UserComponent } from './user.component';
import { AddPostComponent } from '../add-post/add-post.component';
import { AddCommentComponent } from '../add-comment/add-comment.component';
import { UserFilterPipe } from '../user-filter.pipe';
import { UserListComponent } from '../user-list/user-list.component';
import { PageNotFoundComponent } from '../page-not-found/page-not-found.component';
import { MainNavComponent } from '../main-nav/main-nav.component';
import { MaterialModule } from '../material/material.module';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { RouterModule } from '@angular/router';
import { HereMapComponent } from '../here-map/here-map.component';

@NgModule({
  declarations: [
    PostComponent,
    CommentsComponent,
    UserComponent,
    AddPostComponent,
    AddCommentComponent,    
    UserFilterPipe,
    UserListComponent,
    LoginComponent,
    RegisterComponent,
    HereMapComponent
  ],
  imports: [
    HttpClientModule,
    HttpClientJsonpModule,
    CommonModule,
    MaterialModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule
    
    
  ]
})
export class UserModule { }

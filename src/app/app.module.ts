import { ErrorHandler, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PostComponent } from './post/post.component';
import { PostService } from './services/post.service';
import { AppErrorHandler } from './coomon/app-error-handler';
import { ProfileComponent } from './profile/profile.component';
import { ProfileService } from './profile.service';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { RouterModule } from '@angular/router';
import { GithubprofileComponent } from './githubprofile/githubprofile.component';
import { NotFoundComponent } from './not-found/not-found.component';


@NgModule({
  declarations: [
    AppComponent,
    PostComponent,
    ProfileComponent,
    NavbarComponent,
    HomeComponent,
    GithubprofileComponent,
    NotFoundComponent,
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule.forRoot([
      {
       path: '',
       component: HomeComponent
      },
      {
        path: 'followers/:login:id', 
        component: GithubprofileComponent
      },
      {
        path: 'followers',
        component: ProfileComponent
      },
      {
        path: 'post',
        component: PostComponent
      },
      {
        path: '**',
        component:NotFoundComponent
      }
      
     
    ])
  ],
  providers: [
    PostService,
    ProfileService,
   {provide: ErrorHandler, useClass: AppErrorHandler }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

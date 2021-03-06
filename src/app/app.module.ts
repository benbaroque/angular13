import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { UserComponent } from './user/user.component';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { OtherComponent } from './other/other.component';
import { NewpipePipe } from './newpipe.pipe';
import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './login/login.component';
import { AuthenGuard } from './authen.guard';
import { LikeComponent } from './like/like.component';
import { DislikeComponent } from './dislike/dislike.component';

@NgModule({
  declarations: [
    AppComponent,
    OtherComponent,
    NewpipePipe,
    UserComponent,
    LoginComponent,
    LikeComponent,
    DislikeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ChatListComponent } from './chat-list/chat-list.component';
import { UserLoginComponent } from './user-login/user-login.component';
import { ChatDetailComponent } from './chat-detail/chat-detail.component';
import { RegisterUserComponent } from './register-user/register-user.component';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    ChatListComponent,
    UserLoginComponent,
    ChatDetailComponent,
    RegisterUserComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

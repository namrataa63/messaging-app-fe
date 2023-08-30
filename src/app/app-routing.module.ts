import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterUserComponent } from './register-user/register-user.component';
import { UserLoginComponent } from './user-login/user-login.component';
import { ChatListComponent } from './chat-list/chat-list.component';

const routes: Routes = [
  { path: 'register', component: RegisterUserComponent },
  { path: '', component: UserLoginComponent },
  { path: 'chat-list', component: ChatListComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

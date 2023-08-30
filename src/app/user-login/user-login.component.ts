import { Component, OnInit, inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { User } from '../model/user';
import { UserService } from '../service/user.service';
import { Router } from '@angular/router';
import { WebSocketServiceCustom } from '../service/websocket.service';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent implements OnInit {
  userService = inject(UserService);
  webSocketService = inject(WebSocketServiceCustom);
  router = inject(Router)
  errorMessage = null;


  constructor() {
  }

  ngOnInit(): void {
    this.userService.currentApprovalStageMessage.subscribe(msg => console.log("message oninit"));
  }

  userLogin = new FormGroup({
    userName: new FormControl(''),
    phoneNumber: new FormControl('')
  });

  loginUser() {
    this.errorMessage = null;
    var user = this.userLogin.value.userName ?? '';
    this.userService.loginUser(
      this.userLogin.value.userName ?? '',
      this.userLogin.value.phoneNumber ?? ''
    ).subscribe(
      res => {
        this.webSocketService.initializeWebSocketConnection(user);
        this.userService.updateApprovalMessage(user);
        this.router.navigate(['chat-list']);
      },
      err => {
        console.log(`Fail ${JSON.stringify(err)}`);
        if (err.status != 200) {
          this.errorMessage = err.error.payload;
        }
      }
    );
  }
}

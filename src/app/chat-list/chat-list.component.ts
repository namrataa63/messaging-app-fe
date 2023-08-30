import { Component, inject, OnInit } from '@angular/core';
import { UserService } from '../service/user.service';
import { FormControl, FormGroup } from '@angular/forms';
import { User } from '../model/user';

@Component({
  selector: 'app-chat-list',
  templateUrl: './chat-list.component.html'
})
export class ChatListComponent implements OnInit {


  userService = inject(UserService);
  loginUser: string = '';
  selectedUserForChat: string = '';
  searchedUsers: User[] = [];
  searchInput: FormControl = new FormControl(null);
  constructor() { }

  ngOnInit(): void {
    this.userService.currentApprovalStageMessage.subscribe((msg: any) => {
      console.log("message oninit,", msg)
      this.loginUser = msg;
    });
  }

  userSearch() {
    this.userService.searchUser(
      this.searchInput.value
    ).subscribe(
      res => {
        this.searchedUsers = res.payload;
        console.log(`Response ${JSON.stringify(this.searchedUsers)}`);
        // this.router.navigate(['']);
      },
      err => {
        console.log(`Fail ${JSON.stringify(err)}`);

      }
    );
  }

  chatWithUser(userName: any) {
    this.selectedUserForChat = userName;
    // throw new Error('Method not implemented.');
  }
}

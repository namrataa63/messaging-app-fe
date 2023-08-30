import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { UserService } from '../service/user.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-register-user',
  templateUrl: './register-user.component.html',
  styleUrls: ['./register-user.component.css'],
})

export class RegisterUserComponent implements OnInit {
  userService = inject(UserService)
  router = inject(Router)
  errorMessage = null;
  constructor() { }

  ngOnInit(): void {
  }

  userRegister = new FormGroup({
    userName: new FormControl(''),
    phoneNumber: new FormControl('')
  });

  registerUser() {
    this.errorMessage = null;
    this.userService.registerUser(
      this.userRegister.value.userName ?? '',
      this.userRegister.value.phoneNumber ?? ''
    ).subscribe(
      res => {
        this.router.navigate(['']);
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

import { Component, inject, Input, OnInit } from '@angular/core';
import { WebSocketServiceCustom } from '../service/websocket.service';
import { UserService } from '../service/user.service';

@Component({
  selector: 'app-chat-detail',
  templateUrl: './chat-detail.component.html'
})
export class ChatDetailComponent implements OnInit {
  webSocketService = inject(WebSocketServiceCustom);
  @Input() userForChat: string = '';
  @Input() loginUser: string = '';
  sendMessage() {
    console.log('message from', this.userForChat, this.loginUser);
    this.webSocketService.sendMsg(this.loginUser, 'message from', this.userForChat);
  }

  constructor() { }

  ngOnInit(): void {

  }

}

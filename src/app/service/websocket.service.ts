import { Inject, Injectable } from '@angular/core';
import * as SockJS from 'sockjs-client';
import * as Stomp from 'stompjs';


@Injectable({
  providedIn: 'root'
})
export class WebSocketServiceCustom {
  stompClient: any
  webSocket = Inject(SockJS);

  constructor() {
  }

  initializeWebSocketConnection(toUser: string) {
    const serverUrl = 'http://localhost:8080/messaging-app';
    let ws = new SockJS(serverUrl);
    this.stompClient = Stomp.over(ws);
    const _this = this;
    // this.stompClientPublic = stompClient;
    _this.stompClient.connect({}, function () {
      console.log('Dtomp client onnect', JSON.stringify(_this.stompClient));
      _this.stompClient.subscribe('/topic/messages/' + toUser, (message:any) => {
        console.log('Dtomp client subscrive', JSON.stringify(_this.stompClient));
        if (message) {
          console.log('WebSocket connection opened: &s for %s', JSON.stringify(message), toUser);
        }
      });
    });
  }

  sendMsg(from: string, text: string, to: string) {
    this.stompClient.send("/app/chat/" + to, {}, JSON.stringify({
      sender: from,
      content: text
    }));
  }
}



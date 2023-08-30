import { Injectable } from '@angular/core';
import { User } from '../model/user';
import { HttpClient, HttpParams } from '@angular/common/http';
import { BehaviorSubject, Observable, catchError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  user = {} as User;
  errorMessage = '';
  response = {};

  private approvalStageMessage = new BehaviorSubject('');
  currentApprovalStageMessage = this.approvalStageMessage.asObservable();

  updateApprovalMessage(message: string) {
    this.approvalStageMessage.next(message)
  }
  readonly baseUrl = 'http://localhost:8080';
  constructor(private http: HttpClient) { }

  registerUser(userName: string, phoneNumber: string): Observable<any> {
    this.user.phoneNumber = phoneNumber;
    this.user.userName = userName;
    return this.http.post<any>(this.baseUrl + '/registration', this.user)
  }

  loginUser(userName: string, phoneNumber: string): Observable<any> {
    let queryParams = new HttpParams();
    queryParams = queryParams.append("userName", userName);
    queryParams = queryParams.append("phone", phoneNumber);
    return this.http.get<any>(this.baseUrl + '/login?userName=' + userName + '&phone=' + phoneNumber);
  }

  searchUser(searchInput: string): Observable<any> {
    return this.http.get<any>(this.baseUrl + '/search?searchInput=' + searchInput);
  }
}


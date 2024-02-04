import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

    userDetails: BehaviorSubject<any> = new BehaviorSubject(null);

    constructor(private _httpClient: HttpClient) {}

    getTokenBasedOnCode(code: string) {
        return this._httpClient.get(`http://localhost:3002/getToken/${code}`);
    }

    getUserInfo(token: string) {
        return this._httpClient.get(`http://localhost:3002/userInfo/${token}`);
    }

    setUserDetails(userDetails: any) {
        this.userDetails.next(userDetails);
    }

    getUserDetails() {
        return this.userDetails.asObservable();
    }
}
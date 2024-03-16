import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

    userDetails: BehaviorSubject<any> = new BehaviorSubject(null);
    baseURL: string = "http://ec2-44-222-122-130.compute-1.amazonaws.com"; 

    constructor(private _httpClient: HttpClient) {}

    getTokenBasedOnCode(code: string) {
        return this._httpClient.get(`${this.baseURL}:3002/getToken/${code}`);
    }

    getUserInfo(token: string) {
        return this._httpClient.get(`${this.baseURL}:3002/userInfo/${token}`);
    }

    logout(username: string) {
        return this._httpClient.get(`${this.baseURL}:3002/signout/${username}`);
    }

    setUserDetails(userDetails: any) {
        this.userDetails.next(userDetails);
    }

    getUserDetails() {
        return this.userDetails.asObservable();
    }
}
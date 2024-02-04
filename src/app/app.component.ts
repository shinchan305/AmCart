import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from './shared/services/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'AmCart';

  constructor(private _activateRoute: ActivatedRoute, private _userService: UserService, private _router: Router) { }

  ngOnInit(): void {
    this._activateRoute.queryParams.subscribe((response: any) => {
      const accessToken = <string>localStorage.getItem("access_token");
      if (response.code && !accessToken) {
        this.getToken(response.code);
        this.clearRouteParams();
      }
      else if (accessToken) {
        this.getUserInfo(accessToken);
      }      
    })
  }

  getToken(code: string) {
    this._userService.getTokenBasedOnCode(code).subscribe((response: any) => {
      localStorage.setItem('access_token', response.access_token);
      localStorage.setItem('refresh_token', response.refresh_token);
      this._userService.setUserDetails(response.userDetails);
    }, (err: any) => {
      console.log(err);
    })
  }

  getUserInfo(token: string) {
    this._userService.getUserInfo(token).subscribe((response: any) => {
      this._userService.setUserDetails(response.userDetails);
    }, (err: any) => {
      console.log(err);
    })
  }

  clearRouteParams() {
    this._router.navigate([], {
      queryParams: {
        'code': null,
      },
      queryParamsHandling: 'merge'
    })
  }
}

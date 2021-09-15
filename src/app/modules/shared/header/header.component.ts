import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { headerName } from '../constants'

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  public headerName: string;
  public profileName: string;
  public changePasswordName: string;
  public logoutTile: string;
  public loginName: string;

  constructor(private router: Router,) {
    this.headerName = headerName.PROJECT_NAME,
      this.profileName = headerName.PROFILE,
      this.changePasswordName = headerName.CHANGE_PASSWORD,
      this.loginName = headerName.LOGIN_TITLE,
      this.logoutTile = headerName.LOGOUT
  }

  ngOnInit(): void { }

  logout() {
    localStorage.clear();
    this.router.navigate(['/login']);
  }

}

import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {AuthService} from '../aush.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private router: Router, private auth:AuthService) { }

  ngOnInit() {
  }
  onLoadServers() {
    this.router.navigate(['/servers']);
  }
  onLogin(){
    this.auth.login();
  }
  onLogout(){
    this.auth.logout();
  }
}

import { Component } from '@angular/core';
import { AuthService } from '../shared/auth.service';

@Component({
  selector: 'ov-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss']
})
export class UserProfileComponent {
  email: string;
  password: string;

  constructor(public authService: AuthService) { }

  login() {
    this.authService.login(this.email, this.password);
    this.email = this.password = '';
  }

  register() {
    this.authService.register(this.email, this.password);
    this.email = this.password = '';
  }
}

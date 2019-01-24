import { Component} from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '../services/authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  constructor(
    private router: Router,
    private authService: AuthenticationService
  ) {}

  doLogin() {
    this.authService.login(),
    this.router.navigate(['/tabs/tab1']);
  }

  doRegister() {
    this.router.navigate(['/register']);
  }

}

import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { AuthService } from '../../../shared/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-container',
  templateUrl: './login-container.component.html',
  styleUrls: ['./login-container.component.scss'],
})
export class LoginContainerComponent implements OnInit {
  error = '';

  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit(): void {}

  async loginUser($event: FormGroup): Promise<void> {
    const { email, password } = $event.value;

    try {
      await this.authService
        .loginUser(email, password)
        .then((value) => console.log(value));
      await this.router.navigate(['/']);
    } catch (e) {
      this.error = e.message;
    }
  }
}

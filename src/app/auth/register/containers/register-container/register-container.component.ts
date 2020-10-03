import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { AuthService } from '../../../shared/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register-container',
  templateUrl: './register-container.component.html',
  styleUrls: ['./register-container.component.scss'],
})
export class RegisterContainerComponent implements OnInit {
  error = '';

  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit(): void {}

  async registerUser($event: FormGroup): Promise<void> {
    const { email, password } = $event.value;
    try {
      await this.authService.createUser(email, password);
      await this.router.navigate(['/']);
    } catch (e) {
      this.error = e.message;
    }
  }
}

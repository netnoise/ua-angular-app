import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-login-container',
  templateUrl: './login-container.component.html',
  styleUrls: ['./login-container.component.scss'],
})
export class LoginContainerComponent implements OnInit {
  error: any;

  constructor() {}

  ngOnInit(): void {}

  loginUser($event: FormGroup): void {}
}

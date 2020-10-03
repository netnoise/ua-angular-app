import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-register-container',
  templateUrl: './register-container.component.html',
  styleUrls: ['./register-container.component.scss'],
})
export class RegisterContainerComponent implements OnInit {
  error = '';

  constructor() {}

  ngOnInit(): void {}

  registerUser($event: FormGroup): void {}
}

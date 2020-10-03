import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-auth-form',
  templateUrl: './auth-form.component.html',
  styleUrls: ['./auth-form.component.scss'],
})
export class AuthFormComponent implements OnInit {
  @Output()
  submitted = new EventEmitter<FormGroup>();

  public form: FormGroup;

  constructor(private fb: FormBuilder) {
    this.form = this.initLoginForm();
  }

  ngOnInit(): void {}

  onSubmit(): void {
    if (this.form.valid) {
      this.submitted.emit(this.form);
    } else {
      console.log('not valid');
    }
  }

  get passwordInvalid(): boolean {
    const control = this.form.get('password');
    return Boolean(control && control.hasError('required') && control.touched);
    // return control ? control.hasError('required') && control.touched : true;
  }

  get emailFormat(): boolean {
    const control = this.form.get('email') as FormControl;
    return control ? control.hasError('email') && control.touched : true;
  }

  get password(): AbstractControl | null {
    return this.form.get('password');
  }
  get email(): AbstractControl | null {
    return this.form.get('email');
  }

  private initLoginForm(): FormGroup {
    return this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });
  }
}

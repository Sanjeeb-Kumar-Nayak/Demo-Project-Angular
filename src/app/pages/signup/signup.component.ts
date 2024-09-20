import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, Router } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import {
  ReactiveFormsModule,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [CommonModule, RouterLink, HttpClientModule, ReactiveFormsModule],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css',
  providers: [UserService],
})
export class SignupComponent {
  userService = inject(UserService);
  // router = inject(Router);

  signupForm = new FormGroup({
    name: new FormControl('', [Validators.required]),
    mobile: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [
      Validators.required,
      Validators.minLength(8),
    ]),
  });

  onSubmit() {
    this.userService.signupHandler(this.signupForm.value).subscribe(
      (response: any) => {
        console.log('User created successfully', response);
        // this.router.navigate(['/login']);
      },
      (error: any) => {
        console.error('User creation failed', error);
      }
    );
    console.log(this.signupForm.value);
  }

  get nameValidator() {
    return this.signupForm.get('name');
  }

  get mobileValidator() {
    return this.signupForm.get('mobile');
  }

  get emailValidator() {
    return this.signupForm.get('email');
  }

  get passwordValidator() {
    return this.signupForm.get('password');
  }
}

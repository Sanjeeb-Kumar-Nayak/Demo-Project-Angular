import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, Router } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { NgForm, FormsModule } from '@angular/forms';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, RouterLink, FormsModule, HttpClientModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
  providers: [UserService],
})
export class LoginComponent {
  userService = inject(UserService);
  // router = inject(Router);

  onSubmit(data: NgForm) {
    this.userService.logInHandler(data).subscribe(
      (response: any) => {
        console.log('Login successful', response);
        // this.router.navigate(['/home']);
      },
      (error: any) => {
        console.error('Login failed', error);
      }
    );
    console.log(data);
  }
}

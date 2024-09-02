import { Component, inject } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { UserService } from '../../services/user.service';
import { NgForm, FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [RouterLink, FormsModule, HttpClientModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
  providers: [UserService],
})
export class LoginComponent {
  userService = inject(UserService);
  router = inject(Router);

  onSubmit(data: NgForm) {
    this.userService.logInHandler(data).subscribe(
      (response: any) => {
        console.log('Login successful', response);
        this.router.navigate(['/signup']);
      },
      (error: any) => {
        console.error('Login failed', error);
      }
    );
    console.log(data);
  }
}

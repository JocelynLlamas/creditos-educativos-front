import { Component } from '@angular/core';
import { AuthService } from 'src/app/services/auth/auth.service';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/users/user.service';
import { User } from 'src/app/models/user.model';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  username: string = '';
  password: string = '';

  constructor(private authService: AuthService, private router: Router, private userService: UserService) { }

  register() {
    const newUser: User = { id: 0, username: this.username, password: this.password };

    this.userService.createUser(newUser).subscribe(() => {
      this.router.navigate(['/users']);
    });
  }
}

import { Component, OnInit } from '@angular/core';
import { CreditRequestService } from 'src/app/services/credit-request/credit-request.service';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/users/user.service';
import { User } from 'src/app/models/user.model';

@Component({
  selector: 'app-credit-request-list',
  templateUrl: './credit-request-list.component.html',
  styleUrls: ['./credit-request-list.component.css']
})
export class CreditRequestListComponent implements OnInit {
  creditRequests: any[] = [];
  users: User[] = [];

  constructor(
    private creditRequestService: CreditRequestService,
    private userService: UserService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.creditRequestService.getAllRequests().subscribe(data => {
      this.creditRequests = data;
    });

    this.userService.getUsers().subscribe(users => {
      this.users = users;
    });
  }

  getUserName(userId: number): string {
    const user = this.users.find(user => user.id === userId);
    return user ? user.username : 'Unknown User';
  }

  viewDetail(id: number) {
    this.router.navigate(['/credit-requests', id]);
  }

  createNewRequest() {
    this.router.navigate(['/credit-requests/create']);
  }

  deleteRequest(id: number) {
    this.creditRequestService.deleteRequest(id).subscribe(() => {
      this.creditRequests = this.creditRequests.filter(request => request.id !== id);
    });
  }

  updateStatus(id: number, status: string) {
    this.creditRequestService.updateStatus(id, status).subscribe(response => {
      const updatedStatus = response.status;

      // Actualizar
      this.creditRequests = this.creditRequests.map(request =>
        request.id === id ? { ...request, status: updatedStatus } : request
      );
    });
  }
}

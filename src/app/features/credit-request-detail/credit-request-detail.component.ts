import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from 'src/app/models/user.model';
import { CreditRequestService } from 'src/app/services/credit-request/credit-request.service';
import { UserService } from 'src/app/services/users/user.service';

@Component({
  selector: 'app-credit-request-detail',
  templateUrl: './credit-request-detail.component.html',
  styleUrls: ['./credit-request-detail.component.css']
})
export class CreditRequestDetailComponent implements OnInit {
  creditRequest: any = {};
  id: number | null = null;
  users: User[] = [];
  selectedUserId: number = 0;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private userService: UserService,
    private creditRequestService: CreditRequestService
  ) { }

  ngOnInit(): void {
    const idParam = this.route.snapshot.paramMap.get('id');
    if (idParam) {
      this.id = +idParam;
      this.creditRequestService.getRequestById(this.id).subscribe(data => {
        this.creditRequest = data;
        this.selectedUserId = this.creditRequest.userId;
      });
    } else {
      // Manejar el caso cuando id es null
      this.router.navigate(['/credit-requests']);
    }
    this.userService.getUsers().subscribe(users => {
      this.users = users;
    });
  }

  save(): void {
    if (this.id !== null) {
      this.creditRequest.userId = this.selectedUserId;
      this.creditRequestService.updateRequest(this.id, this.creditRequest).subscribe(() => {
        this.router.navigate(['/credit-requests']);
      });
    }
  }
}

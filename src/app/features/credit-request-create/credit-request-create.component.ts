import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/models/user.model';
import { CreditRequestService } from 'src/app/services/credit-request/credit-request.service'; 

@Component({
  selector: 'app-credit-request-create',
  templateUrl: './credit-request-create.component.html',
  styleUrls: ['./credit-request-create.component.css']
})
export class CreditRequestCreateComponent {
  amount: number = 0;
  purpose: string = '';
  status: string = 'pendiente';
  users: User[] = []; 
  selectedUserId: number = 0; 

  constructor(
    private creditRequestService: CreditRequestService,
    private router: Router
  ) { }

  createRequest() {
    const newRequest = {
      amount: this.amount,
      purpose: this.purpose,
      status: this.status
    };

    this.creditRequestService.createRequest(newRequest).subscribe(() => {
      this.router.navigate(['/credit-requests']);
    });
  }
}

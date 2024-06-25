import { Component, OnInit } from '@angular/core';
import { CreditRequestService } from 'src/app/services/credit-request/credit-request.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-credit-request-list',
  templateUrl: './credit-request-list.component.html',
  styleUrls: ['./credit-request-list.component.css']
})
export class CreditRequestListComponent implements OnInit {
  creditRequests: any[] = [];

  constructor(private creditRequestService: CreditRequestService, private router: Router) { }

  ngOnInit(): void {
    this.creditRequestService.getAllRequests().subscribe(data => {
      console.log(data)
      this.creditRequests = data;
    });
  }

  viewDetail(id: number) {
    this.router.navigate(['/credit-requests', id]);
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

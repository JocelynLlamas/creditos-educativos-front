import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CreditRequestService } from 'src/app/services/credit-request/credit-request.service';

@Component({
  selector: 'app-credit-request-detail',
  templateUrl: './credit-request-detail.component.html',
  styleUrls: ['./credit-request-detail.component.css']
})
export class CreditRequestDetailComponent implements OnInit {
  creditRequest: any = {};
  id: number | null = null;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private creditRequestService: CreditRequestService
  ) { }

  ngOnInit(): void {
    const idParam = this.route.snapshot.paramMap.get('id');
    if (idParam) {
      this.id = +idParam;
      this.creditRequestService.getRequestById(this.id).subscribe(data => {
        this.creditRequest = data;
      });
    } else {
      // Manejar el caso cuando id es null
      this.router.navigate(['/credit-requests']);
    }
  }

  save(): void {
    console.log(this.creditRequest)
    if (this.id !== null) {
      this.creditRequestService.updateRequest(this.id, this.creditRequest).subscribe(() => {
        this.router.navigate(['/credit-requests']);
      });
    }
  }
}

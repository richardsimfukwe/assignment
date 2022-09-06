import { Component, OnInit } from '@angular/core';
import { ApiService } from './../../service/api.service';
@Component({
  selector: 'app-loan-list',
  templateUrl: './loan-list.component.html',
  styleUrls: ['./loan-list.component.css']
})
export class LoanListComponent implements OnInit {

  Loan: any = [];
  constructor(private apiService: ApiService) {
    this.readLoan();
  }
  ngOnInit() { }
  readLoan() {
    this.apiService.getLoans().subscribe((data) => {
      this.Loan = data;
    })
  }
  removeLoan(loan, index) {
    if (window.confirm('Are you sure?')) {
      this.apiService.deleteLoan(loan._id).subscribe((data) => {
        this.Loan.splice(index, 1);
      }
      )
    }
  }
}
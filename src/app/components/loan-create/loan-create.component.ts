import { Router } from '@angular/router';
import { ApiService } from './../../service/api.service';
import { Component, OnInit, NgZone } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
@Component({
  selector: 'app-loan-create',
  templateUrl: './loan-create.component.html',
  styleUrls: ['./loan-create.component.css'],
})
export class LoanCreateComponent implements OnInit {
  submitted = false;
  loanForm: FormGroup;
  clientDesignations: any = ['Finance', 'BDM', 'HR', 'Sales', 'Admin'];
  loanAmounts: any = [1000, 2000, 3000, 4000, 5000];
  loanTenures: any = [1, 2, 3, 4, 5];
  loanInterests: any = [5, 10, 15, 20, 25];
  constructor(
    public fb: FormBuilder,
    private router: Router,
    private ngZone: NgZone,
    private apiService: ApiService
  ) {
    this.mainForm();
  }
  ngOnInit() { }
  mainForm() {
    this.loanForm = this.fb.group({
      clientName: ['', [Validators.required]],
      clientEmail: [
        '',
        [
          Validators.required,
          Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,3}$'),
        ],
      ],
      clientDesignation: ['', [Validators.required]],
      clientPhoneNumber: ['', [Validators.required, Validators.pattern('^[0-9]+$')]],
      loanAmount: ['', [Validators.required]],
      loanTenure: ['', [Validators.required]],
      loanInterest: ['', [Validators.required]],
    });
  }
  // Choose designation with select dropdown
  updateDesignation(e) {
    this.loanForm.get('clientDesignation').setValue(e, {
      onlySelf: true,
    });
  }
  // Choose amount with select dropdown
  updateAmount(e) {
    this.loanForm.get('loanAmount').setValue(e, {
      onlySelf: true,
    });
  }
  // Choose tenure with select dropdown
  updateTenure(e) {
    this.loanForm.get('loanTenure').setValue(e, {
      onlySelf: true,
    });
  }
  // Choose interest with select dropdown
  updateInterest(e) {
    this.loanForm.get('loanInterest').setValue(e, {
      onlySelf: true,
    });
  }
  // Getter to access form control
  get myForm() {
    return this.loanForm.controls;
  }
  onSubmit() {
    this.submitted = true;
    if (!this.loanForm.valid) {
      return false;
    } else {
      return this.apiService.createLoan(this.loanForm.value).subscribe({
        complete: () => {
          console.log('Loan successfully created!'),
            this.ngZone.run(() => this.router.navigateByUrl('/loans-list'));
        },
        error: (e) => {
          console.log(e);
        },
      });
    }
  }
}
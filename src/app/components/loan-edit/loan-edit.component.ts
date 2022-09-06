import { Loan } from './../../model/loan';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from './../../service/api.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
@Component({
  selector: 'app-employee-edit',
  templateUrl: './loan-edit.component.html',
  styleUrls: ['./loan-edit.component.css'],
})
export class LoanEditComponent implements OnInit {
  submitted = false;
  editForm: FormGroup;
  loanData: Loan[];
  clientDesignations: any = ['Finance', 'BDM', 'HR', 'Sales', 'Admin'];
  loanAmounts: any = [1000, 2000, 3000, 4000, 5000];
  loanTenures: any = [1, 2, 3, 4, 5];
  loanInterests: any = [5, 10, 15, 20, 25];
  constructor(
    public fb: FormBuilder,
    private actRoute: ActivatedRoute,
    private apiService: ApiService,
    private router: Router
  ) {}
  ngOnInit() {
    this.updateLoan();
    let id = this.actRoute.snapshot.paramMap.get('id');
    this.getLoan(id);
    this.editForm = this.fb.group({
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
  // Choose options with select-dropdown
  updateDesignation(e) {
    this.editForm.get('clientDesignation').setValue(e, {
      onlySelf: true,
    });
  }
  // Choose amount with select dropdown
  updateAmount(e) {
    this.editForm.get('loanAmount').setValue(e, {
      onlySelf: true,
    });
  }
  // Choose tenure with select dropdown
  updateTenure(e) {
    this.editForm.get('loanTenure').setValue(e, {
      onlySelf: true,
    });
  }
  // Choose interest with select dropdown
  updateInterest(e) {
    this.editForm.get('loanInterest').setValue(e, {
      onlySelf: true,
    });
  }
  // Getter to access form control
  get myForm() {
    return this.editForm.controls;
  }
  getLoan(id) {
    this.apiService.getLoan(id).subscribe((data) => {
      this.editForm.setValue({
        clientName: data['clientName'],
        clientEmail: data['clientEmail'],
        clientDesignation: data['clientDesignation'],
        clientPhoneNumber: data['clientPhoneNumber'],
        loanAmount: data['loanAmount'],
        loanTenure: data['loanTenure'],
        loanInterest: data['loanInterest'],
      });
    });
  }
  updateLoan() {
    this.editForm = this.fb.group({
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
  onSubmit() {
    this.submitted = true;
    if (!this.editForm.valid) {
      return false;
    } else {
      if (window.confirm('Are you sure?')) {
        let id = this.actRoute.snapshot.paramMap.get('id');
        this.apiService.updateLoan(id, this.editForm.value).subscribe({
          complete: () => {
            this.router.navigateByUrl('/loans-list');
            console.log('Content updated successfully!');
          },
          error: (e) => {
            console.log(e);
          },
        });
      }
    }
  }
}
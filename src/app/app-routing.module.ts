import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoanCreateComponent } from './components/loan-create/loan-create.component';
import { LoanEditComponent } from './components/loan-edit/loan-edit.component';
import { LoanListComponent } from './components/loan-list/loan-list.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'create-employee' },
  { path: 'create-loan', component: LoanCreateComponent },
  { path: 'edit-loan/:id', component: LoanEditComponent },
  { path: 'loans-list', component: LoanListComponent } 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

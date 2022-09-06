import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoanCreateComponent } from './components/loan-create/loan-create.component';
import { LoanEditComponent } from './components/loan-edit/loan-edit.component';
import { LoanListComponent } from './components/loan-list/loan-list.component';

@NgModule({
  declarations: [
    AppComponent,
    LoanCreateComponent,
    LoanEditComponent,
    LoanListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

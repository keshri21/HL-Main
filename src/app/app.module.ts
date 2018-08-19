import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MaterialModule } from '@angular/material';
import { DatePickerModule } from 'angular-material-datepicker';

import { AppComponent } from './app.component';
import { DoRunningComponent } from './do/do-running/do-running.component';
import { DoCompletedComponent } from './do/do-completed/do-completed.component';
import { DoCreateComponent } from './do/do-create/do-create.component';
import { RegistrationTruckComponent } from './registration-truck/registration-truck.component';
import { TruckSearchResultsComponent } from './registration-truck/truck-search-results/truck-search-results.component';
import { TruckUpdateDetailsComponent } from './registration-truck/truck-update-details/truck-update-details.component';
import { BuiltyReceiptComponent } from './builty/builty-receipt/builty-receipt.component';
import { BuiltyCreateComponent } from './builty/builty-create/builty-create.component';
import { BuiltyApproveComponent } from './builty/builty-approve/builty-approve.component';
import { BillGenerateComponent } from './billing/bill-generate/bill-generate.component';
import { TruckOwnerReportComponent } from './registration-truck/truck-owner-report/truck-owner-report.component';
import { FieldReportSelfComponent } from './reporting/field-report-self/field-report-self.component';
import { DispatchReportCustomerComponent } from './reporting/dispatch-report-customer/dispatch-report-customer.component';
import { FieldCashBalanceComponent } from './reporting/field-cash-balance/field-cash-balance.component';
import { TruckOwnerDetailsComponent } from './registration-truck/truck-owner-details/truck-owner-details.component';
import { FreightReportTruckownerComponent } from './reporting/freight-report-truckowner/freight-report-truckowner.component';
import { DailyReportPassiveComponent } from './reporting/daily-report-passive/daily-report-passive.component';
import { DailyReportOwnerComponent } from './reporting/daily-report-owner/daily-report-owner.component';
import { UserCreateComponent } from './user/user-create/user-create.component';
import { UserListComponent } from './user/user-list/user-list.component';
import { HlCheckboxDirective } from './directives/hl-checkbox.directive';

@NgModule({
  declarations: [
    AppComponent,
    DoRunningComponent,
    DoCompletedComponent,
    DoCreateComponent,
    RegistrationTruckComponent,
    TruckSearchResultsComponent,
    TruckUpdateDetailsComponent,
    BuiltyReceiptComponent,
    BuiltyCreateComponent,
    BuiltyApproveComponent,
    BillGenerateComponent,
    TruckOwnerReportComponent,
    FieldReportSelfComponent,
    DispatchReportCustomerComponent,
    FieldCashBalanceComponent,
    TruckOwnerDetailsComponent,
    FreightReportTruckownerComponent,
    DailyReportPassiveComponent,
    DailyReportOwnerComponent,
    UserCreateComponent,
    UserListComponent,
    HlCheckboxDirective
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MaterialModule.forRoot(),
    DatePickerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

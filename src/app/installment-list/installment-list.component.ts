import { Component, Input, OnInit } from '@angular/core';
import { DashboardService } from '../dashboard.service';
import { DashboardComponent, Installments } from '../dashboard/dashboard.component';

@Component({
  selector: 'app-installment-list',
  templateUrl: './installment-list.component.html',
  styleUrls: ['./installment-list.component.css']
})
export class InstallmentListComponent implements OnInit {

  @Input() purchaseId :Number;

  message : String;
  status : String;
  
  constructor(private dashboardService : DashboardService, private dashboardComponent : DashboardComponent ) { }

  ngOnInit(): void {
    this.fetchInstallment();
  }

  installments : Installments[];

  fetchInstallment(){
    
    this.dashboardService.fetchInstallment(this.purchaseId).subscribe(response => {
      
      this.installments = response;
    });
  }

  payInstallment(id : Number){
    this.dashboardService.payInstallment(id).subscribe(response => {
      this.status = response.status;
      this.message = response.message;
      this.ngOnInit();
      this.dashboardComponent.ngOnInit();
      
    })
  }

}

import { AuthenticationModule } from './../authentication/authentication.module';
import { CommonModule } from '@angular/common';
import { DashboardGuard } from '../dashboard.guard';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';

@NgModule({
	declarations: [ HomeComponent ],
	imports: [ CommonModule, DashboardRoutingModule ],
	exports: [ HomeComponent ],
	providers: [ DashboardGuard ],
})
export class DashboardModule {}

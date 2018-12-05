import { DashboardGuard } from './../dashboard.guard';
import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
	{
		path: 'home',
		component: HomeComponent,
		canActivate: [ DashboardGuard ],
	},
];

@NgModule({
	imports: [ RouterModule.forChild(routes) ],
	exports: [ RouterModule ],
})
export class DashboardRoutingModule {}

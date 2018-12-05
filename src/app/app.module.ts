import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { AuthenticationModule } from './authentication/authentication.module';
import { BrowserModule } from '@angular/platform-browser';
import { DashboardModule } from './dashboard/dashboard.module';
import { NgModule } from '@angular/core';

@NgModule({
	declarations: [ AppComponent ],
	imports: [
		BrowserModule,
		AppRoutingModule,
		AuthenticationModule,
		DashboardModule,
	],
	providers: [],
	bootstrap: [ AppComponent ],
})
export class AppModule {}

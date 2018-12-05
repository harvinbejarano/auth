import { AuthenticationRoutingModule } from './authentication-routing.module';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { NgModule } from '@angular/core';

@NgModule({
	declarations: [ LoginComponent ],
	imports: [ CommonModule, AuthenticationRoutingModule ],
	exports: [ LoginComponent ],
})
export class AuthenticationModule {}

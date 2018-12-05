import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {
	CanActivate,
	ActivatedRouteSnapshot,
	RouterStateSnapshot,
} from '@angular/router';

@Injectable()
export class DashboardGuard implements CanActivate {
	canActivate(
		next: ActivatedRouteSnapshot,
		state: RouterStateSnapshot,
	): Observable<boolean> | Promise<boolean> | boolean {
		console.log('entro');
		return false;
	}
}

import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class UserLoggedInGuard implements CanActivate {
  constructor(private auth: AuthService,
              private router: Router) { }

  canActivate(): boolean {
    console.log(`UserLoggedInGuard:\n${this.auth.getLocalStorage('some_id')}`);
    if (this.auth.isUserLoggedIn('some_id')) {
      return true;
    }
    this.router.navigate(['login']);
    return false;
  }
}

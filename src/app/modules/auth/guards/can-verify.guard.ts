import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { map, take, tap } from 'rxjs/operators';
import { AuthService } from '../login/services/auth.service';

@Injectable({
  providedIn: 'root',
})
export class CanVerifyGuard implements CanActivate {
  constructor(private authServices: AuthService, private router: Router) {}
  canActivate(): Observable<boolean> | Promise<boolean> | boolean {
    return this.authServices.user$.pipe(
      take(1),
      map(
        (user) =>
          user &&
          (this.authServices.isClient(user) ||
            this.authServices.isAdmin(user) ||
            this.authServices.isGrocer(user) ||
            this.authServices.isVeterinarian(user))
      ),
      tap((canVerify) => {
        if (!canVerify) {
          this.router.navigate(['/login']);
        }
      })
    );
  }
}

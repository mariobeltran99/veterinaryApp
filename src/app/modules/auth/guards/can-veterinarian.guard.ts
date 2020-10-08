import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { map, take, tap } from 'rxjs/operators';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class CanVeterinarianGuard implements CanActivate {
  constructor(private authServices: AuthService, private router: Router) {}
  canActivate(): Observable<boolean> | Promise<boolean> | boolean {
    return this.authServices.user$.pipe(
      take(1),
      map((user)=> user && this.authServices.isVeterinarian(user)),
      tap((canVeterinarian)=>{
        if(!canVeterinarian){
          this.router.navigate(['/login']);
        }
      })
    );
  }
  
}

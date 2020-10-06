import { Component } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { AuthService } from '../../../auth/services/auth.service';
import { ModalSignoutComponent } from '../../../core/components/modal-signout/modal-signout.component';

@Component({
  selector: 'app-navbar-veterinarian',
  templateUrl: './navbar-veterinarian.component.html',
  styleUrls: ['./navbar-veterinarian.component.css'],
})
export class NavbarVeterinarianComponent {
  isHandset$: Observable<boolean> = this.breakpointObserver
    .observe(Breakpoints.Handset)
    .pipe(
      map((result) => result.matches),
      shareReplay()
    );
  public user$: Observable<any> = this.authServices.afAuth.user;

  constructor(
    private breakpointObserver: BreakpointObserver,
    private authServices: AuthService,
    private router: Router,
    private dialog: MatDialog
  ) {}
  onSignOut() {
    const dialogRef = this.dialog.open(ModalSignoutComponent);
    dialogRef.afterClosed().subscribe((res) => {
      if (res) {
        this.onLogout();
      }
    });
  }
  onLogout() {
    try {
      this.authServices.logout();
      this.router.navigate(['/']);
    } catch (ex) {
      console.error(ex);
    }
  }
}

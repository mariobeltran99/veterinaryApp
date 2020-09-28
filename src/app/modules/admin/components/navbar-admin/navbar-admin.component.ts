import { Component } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from 'src/app/modules/auth/login/services/auth.service';
import { ModalSignoutComponent } from 'src/app/modules/client/components/viewclient/modal-signout/modal-signout.component';

@Component({
  selector: 'app-navbar-admin',
  templateUrl: './navbar-admin.component.html',
  styleUrls: ['./navbar-admin.component.css'],
})
export class NavbarAdminComponent {
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
    private dialog: MatDialog,
    private route: ActivatedRoute
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
  showManageHome() {
    this.router.navigate(['manage-home'], { relativeTo: this.route });
  }
  showManageUser() {
    this.router.navigate(['manage-users'], { relativeTo: this.route });
  }
  showManageProvider() {
    this.router.navigate(['manage-providers'], { relativeTo: this.route });
  }
  showManageProduct() {
    this.router.navigate(['manage-products'], { relativeTo: this.route });
  }
}

import { Component } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { ActivatedRoute, Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { AuthService } from 'src/app/modules/auth/services/auth.service';
import { ModalSignoutComponent } from 'src/app/modules/core/components/modal-signout/modal-signout.component';

@Component({
  selector: 'app-navbar-secretary',
  templateUrl: './navbar-secretary.component.html',
  styleUrls: ['./navbar-secretary.component.css']
})
export class NavbarSecretaryComponent {

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );

  constructor(private breakpointObserver: BreakpointObserver,
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
    showSecretaryHome() {
      this.router.navigate(['secretary-home'], { relativeTo: this.route });
    }
    showReports() {
      this.router.navigate(['reports'], { relativeTo: this.route });
    }
    showReservations() {
      this.router.navigate(['reservations'], { relativeTo: this.route });
    }
    showViewProducts() {
      this.router.navigate(['view-products'], { relativeTo: this.route });
    }
}

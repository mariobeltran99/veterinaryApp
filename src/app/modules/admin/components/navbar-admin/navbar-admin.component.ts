import { Component, OnInit } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../../../auth/services/auth.service';
import { ModalSignoutComponent } from '../../../core/components/modal-signout/modal-signout.component';
import { Users } from 'src/app/modules/auth/interfaces/user';

@Component({
  selector: 'app-navbar-admin',
  templateUrl: './navbar-admin.component.html',
  styleUrls: ['./navbar-admin.component.css'],
})
export class NavbarAdminComponent implements OnInit {
  isHandset$: Observable<boolean> = this.breakpointObserver
    .observe(Breakpoints.Handset)
    .pipe(
      map((result) => result.matches),
      shareReplay()
    );
  displayName: string = null;
  photoURL: string = null;
  constructor(
    private breakpointObserver: BreakpointObserver,
    private authServices: AuthService,
    private router: Router,
    private dialog: MatDialog,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.loadSessionUser();
  }
  loadSessionUser() {
    this.authServices.afAuth.currentUser.then((res) => {
      this.authServices
        .getExistsUserWithGoogle(res.uid)
        .subscribe((respond) => {
          const user = respond.docs[0].data() as Users;
          this.photoURL = user.photoURL;
          this.displayName = user.displayName;
        });
    });
  }
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
  showManageMedicine(){
    this.router.navigate(['manage-medicines'], { relativeTo: this.route });
  }
  showManageDepartament(){
    this.router.navigate(['manage-departaments'], { relativeTo: this.route });
  }
  showManageAnimal(){
    this.router.navigate(['manage-animals'], { relativeTo: this.route });
  }
  showManageMessage(){
    this.router.navigate(['manage-messages'], { relativeTo: this.route });
  }
  showManageProfile(){
    
  }
}

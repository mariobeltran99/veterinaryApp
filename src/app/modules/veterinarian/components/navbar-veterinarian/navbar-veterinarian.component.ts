import { Component, OnInit } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute,Router } from '@angular/router';
import { AuthService } from '../../../auth/services/auth.service';
import { ModalSignoutComponent } from '../../../core/components/modal-signout/modal-signout.component';
import { Users } from 'src/app/modules/auth/interfaces/user';

@Component({
  selector: 'app-navbar-veterinarian',
  templateUrl: './navbar-veterinarian.component.html',
  styleUrls: ['./navbar-veterinarian.component.css'],
})
export class NavbarVeterinarianComponent implements OnInit {
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
    private route: ActivatedRoute,
    private dialog: MatDialog
  ) {}
  ngOnInit(){
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
  editProfile(){ //Editar Perfil
      this.router.navigate(['edit-profile'], { relativeTo: this.route });
  }
  onLogout() {
    try {
      this.authServices.logout();
      this.router.navigate(['/']);
    } catch (ex) {
      console.error(ex);
    }
  }
  showManageProfile() {}
}

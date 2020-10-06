import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { faPaw } from '@fortawesome/free-solid-svg-icons';
import { NzNotificationService } from 'ng-zorro-antd/notification';
import { Observable } from 'rxjs';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-verify',
  templateUrl: './verify.component.html',
  styleUrls: ['./verify.component.css'],
  providers: [AuthService],
})
export class VerifyComponent implements OnInit {
  faPaw = faPaw;
  constructor(
    private authServices: AuthService,
    private router: Router,
    private notification: NzNotificationService
  ) {}
  public user$: Observable<any> = this.authServices.afAuth.user;

  ngOnInit(): void {}
  onSendEmail() {
    this.authServices
      .sendVerificationEmail()
      .then((res) => {
        this.notification.create(
          'info',
          'El correo electrónico se ha enviado de nuevo',
          'Por favor, revise su bandeja de entrada'
        );
      })
      .catch((ex) => {
        this.notification.create(
          'info',
          'El correo electrónico no llego a su destinatario',
          'Por favor, inténtelo de nuevo'
        );
      });
  }
  onLogout() {
    this.authServices.logout();
    this.router.navigate(['/login']);
  }
}

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { faPaw } from '@fortawesome/free-solid-svg-icons';
import { NzNotificationService } from 'ng-zorro-antd/notification';
import { Observable } from 'rxjs';
import { AuthService } from '../../../login/services/auth.service';

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
    this.authServices.sendVerificationEmail();
  }
  onVerify() {
    this.authServices.getCurrentUser().then((res) => {
      console.log(res.emailVerified);
      if (res.emailVerified) {
        this.router.navigate(['/client']);
      } else {
        this.notification.create(
          'info',
          'El correo electrónico no está verficado',
          'Por favor, confime el correo electrónico para ingresar a su cuenta'
        );
      }
    });
  }
}

//---init imports
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

//---routing imports
import { AppRoutingModule } from './app-routing.module';

//---ng-zorro imports
import { NZ_I18N } from 'ng-zorro-antd/i18n';
import { es_ES } from 'ng-zorro-antd/i18n';
import es from '@angular/common/locales/es';
import { NzNotificationModule } from 'ng-zorro-antd/notification';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { registerLocaleData } from '@angular/common';

//---angular material imports
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

//---others modules imports
import { HttpClientModule } from '@angular/common/http';

//--firebase imports
import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { environment } from 'src/environments/environment';

//---components imports
import { AppComponent } from './app.component';

registerLocaleData(es);

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFirestoreModule,
    AngularFireAuthModule,
    HttpClientModule,
    NzIconModule,
    NzNotificationModule,
    AngularFireStorageModule
  ],
  providers: [
    { provide: NZ_I18N, useValue: es_ES },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}

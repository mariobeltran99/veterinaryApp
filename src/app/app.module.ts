//---init imports
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

//---routing imports
import { AppRoutingModule } from './app-routing.module';

//---ng-zorro imports
import { NZ_I18N } from 'ng-zorro-antd/i18n';
import { es_ES } from 'ng-zorro-antd/i18n';
import es from '@angular/common/locales/es';
import { NgzorroModule } from './design/ngzorro/ngzorro.module';
import { registerLocaleData } from '@angular/common';

//---angular material imports
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './design/material/material.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

//---others modules imports
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

//--firebase imports
import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule } from '@angular/fire/auth'
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { environment } from 'src/environments/environment';

//---components imports
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './home/navbar/navbar.component';
import { SliderComponent } from './home/slider/slider.component';
import { ContentComponent } from './home/content/content.component';
import { Departament1Component } from './home/content/departament1/departament1.component';
import { Departament2Component } from './home/content/departament2/departament2.component';
import { Departament3Component } from './home/content/departament3/departament3.component';
import { Departament4Component } from './home/content/departament4/departament4.component';
import { ContactformComponent } from './home/content/contactform/contactform.component';
import { FooterComponent } from './home/footer/footer.component';
import { ViewloginComponent } from './modules/auth/login/components/viewlogin/viewlogin.component';
import { NavbarLoginComponent } from './modules/auth/login/components/viewlogin/navbar-login/navbar-login.component';
import { TabsLoginComponent } from './modules/auth/login/components/viewlogin/tabs-login/tabs-login.component';
import { ViewclientComponent } from './modules/client/components/viewclient/viewclient.component';
import { NavbarClientComponent } from './modules/client/components/viewclient/navbar-client/navbar-client.component';
import { LayoutModule } from '@angular/cdk/layout';
import { VerifyComponent } from './modules/auth/sendEmail/components/verify/verify.component';
import { ModalSignoutComponent } from './modules/client/components/viewclient/modal-signout/modal-signout.component';
import { ForgotComponent } from './modules/auth/forgot-password/components/forgot/forgot.component';




registerLocaleData(es);

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    SliderComponent,
    ContentComponent,
    Departament1Component,
    Departament2Component,
    Departament3Component,
    Departament4Component,
    ContactformComponent,
    FooterComponent,
    ViewloginComponent,
    NavbarLoginComponent,
    TabsLoginComponent,
    ViewclientComponent,
    NavbarClientComponent,
    VerifyComponent,
    ModalSignoutComponent,
    ForgotComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    NgzorroModule,
    MaterialModule,
    FontAwesomeModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFirestoreModule,
    AngularFireAuthModule,
    LayoutModule
  ],
  providers: [{ provide: NZ_I18N, useValue: es_ES }],
  bootstrap: [AppComponent]
})
export class AppModule { }

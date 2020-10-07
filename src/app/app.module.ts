//---init imports
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

//---routing imports
import { AppRoutingModule } from './app-routing.module';

//---ng-zorro imports
import { NZ_I18N } from 'ng-zorro-antd/i18n';
import { es_ES } from 'ng-zorro-antd/i18n';
import es from '@angular/common/locales/es';
import { NgzorroModule } from './modules/core/models/ngzorro.module';
import { registerLocaleData } from '@angular/common';

//---angular material imports
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './modules/core/models/material.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { LayoutModule } from '@angular/cdk/layout';

//---others modules imports
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

//--firebase imports
import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { environment } from 'src/environments/environment';

//---guards imports
import { CanClientGuard } from './modules/auth/guards/can-client.guard';
import { CanVerifyGuard } from './modules/auth/guards/can-verify.guard';
import { CanAdminGuard } from './modules/auth/guards/can-admin.guard';
import { CanGrocerGuard } from './modules/auth/guards/can-grocer.guard';
import { CanVeterinarianGuard } from './modules/auth/guards/can-veterinarian.guard';

//---components imports
import { AppComponent } from './app.component';
import { HomeComponent } from './modules/home/components/home/home.component';
import { NavbarComponent } from './modules/home/components/navbar/navbar.component';
import { SliderComponent } from './modules/home/components/slider/slider.component';
import { ContentComponent } from './modules/home/components/content/content.component';
import { Departament1Component } from './modules/home/components/departament1/departament1.component';
import { Departament2Component } from './modules/home/components/departament2/departament2.component';
import { Departament3Component } from './modules/home/components/departament3/departament3.component';
import { Departament4Component } from './modules/home/components/departament4/departament4.component';
import { ContactformComponent } from './modules/home/components/contactform/contactform.component';
import { FooterComponent } from './modules/home/components/footer/footer.component';
import { ViewloginComponent } from './modules/auth/components/login/viewlogin/viewlogin.component';
import { NavbarLoginComponent } from './modules/auth/components/login/navbar-login/navbar-login.component';
import { TabsLoginComponent } from './modules/auth/components/login/tabs-login/tabs-login.component';
import { ViewclientComponent } from './modules/client/components/viewclient/viewclient.component';
import { NavbarClientComponent } from './modules/client/components/navbar-client/navbar-client.component';
import { VerifyComponent } from './modules/auth/components/verify/verify.component';
import { ModalSignoutComponent } from './modules/core/components/modal-signout/modal-signout.component';
import { ForgotComponent } from './modules/auth/components/forgot/forgot.component';
import { ViewadminComponent } from './modules/admin/components/viewadmin/viewadmin.component';
import { ViewveterinarianComponent } from './modules/veterinarian/components/viewveterinarian/viewveterinarian.component';
import { ViewgrocerComponent } from './modules/grocer/components/viewgrocer/viewgrocer.component';
import { NavbarAdminComponent } from './modules/admin/components/navbar-admin/navbar-admin.component';
import { NavbarGrocerComponent } from './modules/grocer/components/navbar-grocer/navbar-grocer.component';
import { NavbarVeterinarianComponent } from './modules/veterinarian/components/navbar-veterinarian/navbar-veterinarian.component';
import { PagenotfoundComponent } from './modules/core/components/pagenotfound/pagenotfound.component';
import { ServicePoliciesComponent } from './modules/home/components/service-policies/service-policies.component';
import { PrivacyPoliciesComponent } from './modules/home/components/privacy-policies/privacy-policies.component';
import { LicensesComponent } from './modules/home/components/licenses/licenses.component';
import { ManageUsersComponent } from './modules/admin/components/manage-users/manage-users.component';
import { ManageProvidersComponent } from './modules/admin/components/manage-providers/manage-providers.component';
import { ManageProductsComponent } from './modules/admin/components/manage-products/manage-products.component';
import { ManageHomeComponent } from './modules/admin/components/manage-home/manage-home.component';
import { StepsInitialComponent } from './modules/auth/components/steps-initial/steps-initial.component';

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
    ViewclientComponent,
    NavbarClientComponent,
    VerifyComponent,
    ModalSignoutComponent,
    ForgotComponent,
    ViewadminComponent,
    ViewveterinarianComponent,
    ViewgrocerComponent,
    NavbarAdminComponent,
    NavbarGrocerComponent,
    NavbarVeterinarianComponent,
    PagenotfoundComponent,
    ServicePoliciesComponent,
    PrivacyPoliciesComponent,
    LicensesComponent,
    ManageUsersComponent,
    ManageProvidersComponent,
    ManageProductsComponent,
    ManageHomeComponent,
    StepsInitialComponent,
    ViewloginComponent,
    NavbarLoginComponent,
    TabsLoginComponent
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
  providers: [
    { provide: NZ_I18N, useValue: es_ES },
    CanClientGuard,
    CanAdminGuard,
    CanGrocerGuard,
    CanVeterinarianGuard,
    CanVerifyGuard,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}

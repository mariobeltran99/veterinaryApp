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
    ContactformComponent
    
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
    ReactiveFormsModule
  ],
  providers: [{ provide: NZ_I18N, useValue: es_ES }],
  bootstrap: [AppComponent]
})
export class AppModule { }

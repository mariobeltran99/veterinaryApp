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
import { HttpClientModule } from '@angular/common/http';

//---components imports
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './home/navbar/navbar.component';
import { SliderComponent } from './home/slider/slider.component';



registerLocaleData(es);

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    SliderComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    NgzorroModule,
    MaterialModule,
    FontAwesomeModule
  ],
  providers: [{ provide: NZ_I18N, useValue: es_ES }],
  bootstrap: [AppComponent]
})
export class AppModule { }

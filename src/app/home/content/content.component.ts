import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import {
  faShieldAlt,
  faUniversalAccess,
  faGlobeAmericas,
  faWifi,
  faStethoscope,
  faVials,
  faXRay,
  faLaptopMedical,
  faDog,
  faKaaba,
  faSyringe,
  faCat,
  faDove,
  faHospitalAlt,
  faAllergies,
  faHeartbeat,
  faPhoneAlt,
  faMapMarkedAlt,
  faEnvelope,
} from '@fortawesome/free-solid-svg-icons';
import { PrivacyPoliciesComponent } from '../privacy-policies/privacy-policies.component';
import { ServicePoliciesComponent } from '../service-policies/service-policies.component';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css'],
})
export class ContentComponent implements OnInit {
  faShield = faShieldAlt;
  faAccess = faUniversalAccess;
  faAmerica = faGlobeAmericas;
  faWifi = faWifi;
  faStet = faStethoscope;
  faVials = faVials;
  faXray = faXRay;
  faLaptopM = faLaptopMedical;
  faDog = faDog;
  faKa = faKaaba;
  faSyin = faSyringe;
  faCat = faCat;
  faDove = faDove;
  faHospital = faHospitalAlt;
  faAllergie = faAllergies;
  faHeart = faHeartbeat;
  faPhone = faPhoneAlt;
  faEmail = faEnvelope;
  faLocate = faMapMarkedAlt;
  view1: boolean;
  view2: boolean;
  view3: boolean;
  view4: boolean;
  constructor(private dialog: MatDialog) {}

  ngOnInit() {
    this.view1 = true;
    this.view2 = false;
    this.view3 = false;
    this.view4 = false;
  }
  changeViewDepartament(num: number) {
    if (num == 1) {
      this.view1 = true;
      this.view2 = false;
      this.view3 = false;
      this.view4 = false;
    } else if (num == 2) {
      this.view1 = false;
      this.view2 = true;
      this.view3 = false;
      this.view4 = false;
    } else if (num == 3) {
      this.view1 = false;
      this.view2 = false;
      this.view3 = true;
      this.view4 = false;
    } else if (num == 4) {
      this.view1 = false;
      this.view2 = false;
      this.view3 = false;
      this.view4 = true;
    }
  }
  onServicePolicies(){
    const dialogRef = this.dialog.open(ServicePoliciesComponent);
    dialogRef.afterClosed().subscribe((res)=>{
    });
  }
  onPrivacyPolicies(){
    const dialogRef = this.dialog.open(PrivacyPoliciesComponent);
    dialogRef.afterClosed().subscribe((res)=>{
    });
  }
}

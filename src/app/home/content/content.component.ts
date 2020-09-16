import { Component, OnInit } from '@angular/core';
import { faShieldAlt } from '@fortawesome/free-solid-svg-icons';
import { faUniversalAccess } from '@fortawesome/free-solid-svg-icons';
import { faGlobeAmericas } from '@fortawesome/free-solid-svg-icons';
import { faWifi } from '@fortawesome/free-solid-svg-icons';
import { faStethoscope } from '@fortawesome/free-solid-svg-icons';
import { faVials } from '@fortawesome/free-solid-svg-icons';
import { faXRay } from '@fortawesome/free-solid-svg-icons';
import { faLaptopMedical } from '@fortawesome/free-solid-svg-icons';
import { faDog } from '@fortawesome/free-solid-svg-icons';
import { faKaaba } from '@fortawesome/free-solid-svg-icons';
import { faSyringe } from '@fortawesome/free-solid-svg-icons';
import { faCat } from '@fortawesome/free-solid-svg-icons';
import { faDove } from '@fortawesome/free-solid-svg-icons';
import { faHospitalAlt } from '@fortawesome/free-solid-svg-icons';
import { faAllergies } from '@fortawesome/free-solid-svg-icons';
import { faHeartbeat } from '@fortawesome/free-solid-svg-icons';
import { faPhoneAlt } from '@fortawesome/free-solid-svg-icons';
import { faMapMarkedAlt } from '@fortawesome/free-solid-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

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
  constructor() {}

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
}

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



@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
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
  fadog = faDog;
  faka = faKaaba;
  faSyin = faSyringe;
  facat = faCat;
  fadove = faDove;
  constructor() { }

  ngOnInit(): void {
  }

}

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-manage-providers',
  templateUrl: './manage-providers.component.html',
  styleUrls: ['./manage-providers.component.css'],
})
export class ManageProvidersComponent implements OnInit {
  constructor(private router: Router, private route: ActivatedRoute) {}

  ngOnInit(): void {}

  showCreateProvider() {
    this.router.navigate(['add-provider'], { relativeTo: this.route });
  }
  showViewProviders() {
    this.router.navigate(['view-providers'], { relativeTo: this.route });
  }
}

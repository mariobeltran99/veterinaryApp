import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-manage-users',
  templateUrl: './manage-users.component.html',
  styleUrls: ['./manage-users.component.css'],
})
export class ManageUsersComponent implements OnInit {
  constructor(private router: Router, private route: ActivatedRoute) {}

  ngOnInit():void {}
  
  showCreateUser() {
    this.router.navigate(['add-user'], { relativeTo: this.route });
  }
  showViewUser() {
    this.router.navigate(['view-users'], { relativeTo: this.route });
  }
  showViewUserClient() {
    this.router.navigate(['view-users-clients'], { relativeTo: this.route });
  }
}

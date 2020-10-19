import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-manage-departaments',
  templateUrl: './manage-departaments.component.html',
  styleUrls: ['./manage-departaments.component.css'],
})
export class ManageDepartamentsComponent implements OnInit {
  constructor(private router: Router, private route: ActivatedRoute) {}

  ngOnInit(): void {}
  showCreateDepartment() {
    this.router.navigate(['add-departments'], { relativeTo: this.route });
  }
  showViewDepartment() {
    this.router.navigate(['view-departments'], { relativeTo: this.route });
  }
}

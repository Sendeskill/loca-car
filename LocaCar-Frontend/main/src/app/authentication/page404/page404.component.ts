import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-page404',
  templateUrl: './page404.component.html',
  styleUrls: ['./page404.component.scss']
})
export class Page404Component implements OnInit {
  constructor(private router: Router) {}
  ngOnInit() {}

  submit() {
    this.router.navigate(['/authentication/signin']);
  }
}

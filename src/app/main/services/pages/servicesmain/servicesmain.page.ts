import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  standalone: false,
  selector: 'app-servicesmain',
  templateUrl: './servicesmain.page.html',
  styleUrls: ['./servicesmain.page.scss'],
})
export class ServicesmainPage implements OnInit {

  constructor(
    private router: Router
  ) { }

  ngOnInit() {
  }

  goBack(){
    this.router.navigate(['./menu'])

  }

}

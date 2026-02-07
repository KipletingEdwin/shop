import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  standalone: false,
  selector: 'app-homemain',
  templateUrl: './homemain.page.html',
  styleUrls: ['./homemain.page.scss'],
})
export class HomemainPage implements OnInit {

  constructor(
    private router: Router
  ) { }

  ngOnInit() {
  }

  goBack(){
    this.router.navigate(['./menu'])

  }

}

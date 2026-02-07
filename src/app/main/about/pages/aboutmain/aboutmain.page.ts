import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  standalone: false,
  selector: 'app-aboutmain',
  templateUrl: './aboutmain.page.html',
  styleUrls: ['./aboutmain.page.scss'],
})
export class AboutmainPage implements OnInit {

  constructor(
    private router: Router
  ) { }

  ngOnInit() {
  }

  goBack(){
    this.router.navigate(['./menu'])

  }

}

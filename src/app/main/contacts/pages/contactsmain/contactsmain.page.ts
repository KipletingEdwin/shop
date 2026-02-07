import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  standalone: false,
  selector: 'app-contactsmain',
  templateUrl: './contactsmain.page.html',
  styleUrls: ['./contactsmain.page.scss'],
})
export class ContactsmainPage implements OnInit {

  constructor(
    private router: Router
  ) { }

  ngOnInit() {
  }

  goBack(){
    this.router.navigate(['./menu'])

  }

}

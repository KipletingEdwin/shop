import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  standalone: false,
  selector: 'app-projectsmain',
  templateUrl: './projectsmain.page.html',
  styleUrls: ['./projectsmain.page.scss'],
})
export class ProjectsmainPage implements OnInit {

  constructor(
    private router: Router
  ) { }

  ngOnInit() {
  }


  goBack(){
    this.router.navigate(['./menu'])

  }

}

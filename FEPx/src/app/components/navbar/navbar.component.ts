import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  img = 'https://w7.pngwing.com/pngs/501/787/png-transparent-daisybush-common-daisy-flower-watercolor-cactus-purple-violet-photography.png';

  constructor() { }

  ngOnInit(): void {
  }

}

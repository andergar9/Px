import { Component, OnInit } from '@angular/core';
import { Comen } from 'src/app/interfaces/Comen';

@Component({
  selector: 'app-list-comen',
  templateUrl: './list-comen.component.html',
  styleUrls: ['./list-comen.component.css']
})
export class ListComenComponent implements OnInit {

  listComen: Comen[] = [
    { cedula: '1087561873', nombre: 'Jhon', apellido: 'Garcia', municipio: 'Pereira' },
    { cedula: '0000000000', nombre: 'Juan', apellido: 'Soto', municipio: 'Sta rosa' }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}

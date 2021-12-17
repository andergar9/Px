import { Component, OnInit } from '@angular/core';
import { Produc } from '../interfaces/Produc';



@Component({
  selector: 'app-productores',
  templateUrl: './productores.component.html',
  styleUrls: ['./productores.component.css']
})
export class ProductoresComponent implements OnInit {

  productores: Produc[] = [
    { cedula: '1087561873', nombre: 'Jhon', apellido: 'Garcia', municipio: 'Pereira' },
    { cedula: '0000000000', nombre: 'Juan', apellido: 'Soto', municipio: 'Sta rosa' }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}

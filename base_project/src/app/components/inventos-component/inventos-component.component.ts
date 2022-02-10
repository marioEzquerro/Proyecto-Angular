import { Component, OnInit } from '@angular/core';
import { INVENTOS } from 'src/app/utils/invento-constants';
import { Invento } from '../models/invento.model';

@Component({
  selector: 'app-inventos-component',
  templateUrl: './inventos-component.component.html',
  styleUrls: ['./inventos-component.component.css']
})
export class InventosComponentComponent implements OnInit {

  inventos: Invento[] | null;

  constructor() {
    this.inventos = INVENTOS;
  }

  abrirElemento(id: number) {
    alert("hola" + id);
  }

  ngOnInit(): void {
  }

}

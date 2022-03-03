import { Component, OnInit } from '@angular/core';
//import { INVENTOS } from 'src/app/utils/invento-constants';
import { Invento } from 'src/app/models/invento.model'; 
import { InventoService } from 'src/app/services/invento.service';

@Component({
  selector: 'app-inventos-component',
  templateUrl: './inventos-component.component.html',
  styleUrls: ['./inventos-component.component.css']
})
export class InventosComponentComponent implements OnInit {
  inventos: Invento[] | null;

  constructor(private _inventoService: InventoService) {
    this.inventos = null;
  }

  ngOnInit(): void {
    this._inventoService.getInventoData().subscribe(apiInventos => this.inventos = apiInventos);
  }
}

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { INVENTOS } from 'src/app/utils/invento-constants';
import { Invento } from '../models/invento.model';

@Component({
  selector: 'app-detalles-inventos-component',
  templateUrl: './detalles-inventos-component.component.html',
  styleUrls: ['./detalles-inventos-component.component.css'],
})
export class DetallesInventosComponentComponent implements OnInit {
  invento: Invento | null;
  idInvento = 0;

  constructor(private activatedRoute: ActivatedRoute) {
    this.invento = null;
  }
  
  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe((parameters: any) => {
      this.idInvento = parameters.get('idInvento');
    });

    this.invento = INVENTOS.filter(
      (x: Invento) => x.id == this.idInvento
    )[0];
  }
}

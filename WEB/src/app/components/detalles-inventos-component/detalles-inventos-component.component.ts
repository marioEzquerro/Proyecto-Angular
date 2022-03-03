import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Invento } from 'src/app/models/invento.model';
import { InventoService } from 'src/app/services/invento.service';

@Component({
  selector: 'app-detalles-inventos-component',
  templateUrl: './detalles-inventos-component.component.html',
  styleUrls: ['./detalles-inventos-component.component.css'],
})
export class DetallesInventosComponentComponent implements OnInit {
  invento: Invento | null;
  idInvento = 0;

  constructor(private activatedRoute: ActivatedRoute, private _inventoService: InventoService) {
    this.invento = null;
  }
  
  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe((parameters: any) => {
      this.idInvento = parameters.get('idInvento');
    });

    this._inventoService.getInventoDataID(this.idInvento).subscribe(apiInventos => this.invento = apiInventos);
  }
}

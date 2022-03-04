import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormBuilder, Validators } from '@angular/forms';
// PUJA
import { Puja } from 'src/app/models/puja.model';
import { PujaService } from 'src/app/services/puja.service';
// INVENTO
import { Invento } from 'src/app/models/invento.model';
import { InventoService } from 'src/app/services/invento.service';

@Component({
  selector: 'app-detalles-inventos-component',
  templateUrl: './detalles-inventos-component.component.html',
  styleUrls: ['./detalles-inventos-component.component.css'],
})
export class DetallesInventosComponentComponent implements OnInit {
  invento: Invento | null;
  pujas: Puja[] | null;
  idInvento = 0;
  maxPuja: number = 0;
  nuevaPuja = this.fb.group({
    cantidad: ['', Validators.required],
  });

  constructor(
    private fb: FormBuilder,
    private activatedRoute: ActivatedRoute,
    private _inventoService: InventoService,
    private _pujaService: PujaService
  ) {
    this.invento = null;
    this.pujas = null;
  }
  // api crear endpoint has de invento

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe((parameters: any) => {
      this.idInvento = parameters.get('idInvento');
    });

    this._inventoService.getInventoDataID(this.idInvento).subscribe((x) => (this.invento = x));
    this._inventoService.getInventoPujas(this.idInvento).subscribe((x) => this.pujas && this.getMaxPuja());
  }

  getMaxPuja() {
    if (this.pujas != null) {
      this.pujas?.forEach((e) => {
        if (e.cantidad != null && e.cantidad > this.maxPuja) {
          this.maxPuja = e.cantidad;
        }
      });
    }
  }

  submit() {}
}

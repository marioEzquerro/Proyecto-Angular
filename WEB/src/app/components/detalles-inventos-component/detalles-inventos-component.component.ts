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
  maxPuja = 0;
  nuevaPuja = this.fb.group({
    id: [''],
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

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe((parameters: any) => {
      this.idInvento = parameters.get('idInvento');
      this.nuevaPuja.patchValue({ id: this.idInvento });
    });

    this._inventoService
      .getInventoDataID(this.idInvento)
      .subscribe((x) => (this.invento = x));
    this._inventoService
      .getInventoPujas(this.idInvento)
      .subscribe((x) => (this.pujas = x) && this.getPujaMayor());
  }

  getPujaMayor() {
    if (this.pujas != null) {
      this.pujas.forEach((element) => {
        if (element.cantidad != null) {
          this.maxPuja = this.maxPuja < element.cantidad ? element.cantidad : this.maxPuja;
        }
      });
    }
  }

  submit() {
    this._pujaService.postPujaData(this.nuevaPuja.value);
    setTimeout("location.reload(true);", 300);
  }
}

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
// componentes
import { PlantillaComponent } from './pages/home/plantilla/plantilla.component';
import { NavComponentComponent } from './components/nav-component/nav-component.component';
import { ContactoFormComponentComponent } from './components/contacto-form-component/contacto-form-component.component';
import { DetallesInventosComponentComponent } from './components/detalles-inventos-component/detalles-inventos-component.component';
import { FooterComponentComponent } from './components/footer-component/footer-component.component';
import { ForbiddenUrlComponentComponent } from './components/forbidden-url-component/forbidden-url-component.component';
import { InventosComponentComponent } from './components/inventos-component/inventos-component.component';
import { PortadaComponentComponent } from './components/portada-component/portada-component.component';
// services
import { InventoService } from './services/invento.service';
import { PujaService } from './services/puja.service';


@NgModule({
  declarations: [
    AppComponent,
    PlantillaComponent,
    FooterComponentComponent,
    NavComponentComponent,
    InventosComponentComponent,
    ContactoFormComponentComponent,
    PortadaComponentComponent,
    ForbiddenUrlComponentComponent,
    DetallesInventosComponentComponent   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [InventoService, PujaService],
  bootstrap: [AppComponent]
})
export class AppModule { }

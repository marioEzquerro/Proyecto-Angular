import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingComponent } from './app-routing/app-routing.component';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { PlantillaComponent } from './pages/home/plantilla/plantilla.component';
import { FooterComponentComponent } from './components/footer-component/footer-component.component';
import { NavComponentComponent } from './components/nav-component/nav-component.component';
import { InventosComponentComponent } from './components/inventos-component/inventos-component.component';
import { ContactoFormComponentComponent } from './components/contacto-form-component/contacto-form-component.component';
import { PortadaComponentComponent } from './components/portada-component/portada-component.component';


@NgModule({
  declarations: [
    AppComponent,
    AppRoutingComponent,
    PlantillaComponent,
    FooterComponentComponent,
    NavComponentComponent,
    InventosComponentComponent,
    ContactoFormComponentComponent,
    PortadaComponentComponent
  ],
  imports: [
    BrowserModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

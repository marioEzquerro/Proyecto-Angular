import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { PlantillaComponent } from './pages/home/plantilla/plantilla.component';
import { FooterComponentComponent } from './components/footer-component/footer-component.component';
import { NavComponentComponent } from './components/nav-component/nav-component.component';
import { InventosComponentComponent } from './components/inventos-component/inventos-component.component';
import { ContactoFormComponentComponent } from './components/contacto-form-component/contacto-form-component.component';
import { PortadaComponentComponent } from './components/portada-component/portada-component.component';
import { ForbiddenUrlComponentComponent } from './components/forbidden-url-component/forbidden-url-component.component';
import { AppRoutingModule } from './app-routing.module';


@NgModule({
  declarations: [
    AppComponent,
    PlantillaComponent,
    FooterComponentComponent,
    NavComponentComponent,
    InventosComponentComponent,
    ContactoFormComponentComponent,
    PortadaComponentComponent,
    ForbiddenUrlComponentComponent    
  ],
  imports: [
    BrowserModule,
    NgbModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingComponent } from './app-routing/app-routing.component';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { PlantillaComponent } from './pages/home/plantilla/plantilla.component';
import { FooterComponentComponent } from './components/footer-component/footer-component.component';
import { NavComponentComponent } from './components/nav-component/nav-component.component';
import { InventosComponentComponent } from './components/inventos-component/inventos-component.component';

@NgModule({
  declarations: [
    AppComponent,
    AppRoutingComponent,
    PlantillaComponent,
    FooterComponentComponent,
    NavComponentComponent,
    InventosComponentComponent,
  ],
  imports: [
    BrowserModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

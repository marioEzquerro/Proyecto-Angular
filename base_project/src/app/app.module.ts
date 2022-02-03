import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmptyComponentComponent } from './components/empty-component/empty-component.component';
import { HomeComponentComponent } from './pages/home/home-component/home-component.component';
import { AppRoutingComponent } from './app-routing/app-routing.component';

@NgModule({
  declarations: [
    AppComponent,
    EmptyComponentComponent,
    HomeComponentComponent,
    AppRoutingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

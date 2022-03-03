import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetallesInventosComponentComponent } from './components/detalles-inventos-component/detalles-inventos-component.component';
// componentes
import { ForbiddenUrlComponentComponent } from './components/forbidden-url-component/forbidden-url-component.component';
import { PlantillaComponent } from './pages/home/plantilla/plantilla.component';

const routes: Routes = [
  {
    path: '',
    component: PlantillaComponent
  },
  {
    path: 'inventos/:idInvento',
    component: DetallesInventosComponentComponent
  },
  {
    path: '**',
    component: ForbiddenUrlComponentComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

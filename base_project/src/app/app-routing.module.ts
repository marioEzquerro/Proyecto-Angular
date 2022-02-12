import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// componentes
import { ForbiddenUrlComponentComponent } from './components/forbidden-url-component/forbidden-url-component.component';
import { PlantillaComponent } from './pages/home/plantilla/plantilla.component';

const routes: Routes = [
  {
    path: '',
    component: PlantillaComponent
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

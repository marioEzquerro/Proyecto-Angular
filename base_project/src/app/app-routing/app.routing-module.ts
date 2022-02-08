import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponentComponent } from '../pages/home/home-component/home-component.component';
import { PlantillaComponent } from '../pages/home/plantilla/plantilla.component';


const routes: Routes = [
    {
        path: '',
        component: PlantillaComponent,
    },
    {
        path: '**',
        component: HomeComponentComponent,
    },

];

// configures NgModule imports and exports
@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule { }
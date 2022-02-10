import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PlantillaComponent } from '../pages/home/plantilla/plantilla.component';


const routes: Routes = [
    {
        path: '',
        component: PlantillaComponent
    }
];

// configures NgModule imports and exports
@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule { }
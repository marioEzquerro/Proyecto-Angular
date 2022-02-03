import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponentComponent } from '../pages/home/home-component/home-component.component';


const routes: Routes = [
    {
        path: 'home',
        component: HomeComponentComponent,
    },
];

// configures NgModule imports and exports
@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule { }
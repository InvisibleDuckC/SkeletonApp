import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePage } from './home.page';
import { MisDatosComponent } from '../mis-datos/mis-datos.component';
import { ExperienciaLaboralComponent } from '../experiencia-laboral/experiencia-laboral.component';
import { CertificacionesComponent } from '../certificaciones/certificaciones.component';

const routes: Routes = [
  {
    path: '',
    component: HomePage,
    children:[
      {
        path:'misDatos',
        component:MisDatosComponent
      },
      {
        path:'experienciaLaboral',
        component:ExperienciaLaboralComponent
      },
      {
        path:'certificaciones',
        component:CertificacionesComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomePageRoutingModule {}

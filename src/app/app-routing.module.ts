import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import HijoMenorComponent from './components/hijo-menor/hijo-menor.component';

const routes: Routes = [

  {path: 'HijoMenor', component:HijoMenorComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

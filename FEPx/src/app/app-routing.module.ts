import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListComenComponent } from './components/list-comen/list-comen.component';

const routes: Routes = [
{path:'', component: ListComenComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

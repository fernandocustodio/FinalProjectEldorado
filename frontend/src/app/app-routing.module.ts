import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from'./views/home/home.component'
import { MovieCrudComponent } from'./views/movie-crud/movie-crud.component';
import { MovieCreateComponent } from'./components/movies/movie-create/movie-create.component';

const routes: Routes = [
{
  path: "",
  component: HomeComponent
},
{
  path: "movies",
  component: MovieCrudComponent

},
{
  path: "movies/create",
  component: MovieCreateComponent
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

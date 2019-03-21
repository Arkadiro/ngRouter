import { NgModule } from '@angular/core';
import { CatsComponent } from './cats/cats.component';
import { DogsComponent } from './dogs/dogs.component';
import { Routes, RouterModule } from '@angular/router';
import { DataComponent } from './data.component';

const routes: Routes = [
    {path: 'data', component: DataComponent, children: [
      {path: 'cats', component: CatsComponent},
      {path: 'dogs', component: DogsComponent},
    ]},
];

@NgModule({
  declarations: [
    CatsComponent,
    DogsComponent,
    DataComponent
  ],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class DataModule { }

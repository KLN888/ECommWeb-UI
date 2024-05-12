import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ECommComponent } from './e-comm.component';
import { RouterModule } from '@angular/router';


const routes:any =[
  {path:'',component:ECommComponent}
]

@NgModule({
  declarations: [ECommComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class ECommModule { }

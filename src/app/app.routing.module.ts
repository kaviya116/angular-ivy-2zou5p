import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { RegisterComponent } from './task/register/register.component';



@NgModule({
  declarations: [
  ],
  imports: [
    RouterModule.forRoot([
     
      { path: 'register', component: RegisterComponent},
      
    ])
  ],
  exports: [
    RouterModule,
  ],
  providers: [],

})
export class AppRoutingModule {}

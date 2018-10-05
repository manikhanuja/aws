import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PollyDemoComponent } from './polly-demo/polly-demo.component';

const routes: Routes = [
  {path: 'pollydemo', component: PollyDemoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [PollyDemoComponent];

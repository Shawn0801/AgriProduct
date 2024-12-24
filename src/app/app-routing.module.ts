import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeaderComponent } from './common-page/header/header.component';
import { SportCenterInfoComponent } from './public-info/sport-center-info/sport-center-info.component';

const routes: Routes = [
  { path: 'header', component: HeaderComponent },
  //**最後不然會覆蓋其他路由
  { path: '**', component: SportCenterInfoComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AddComponent } from './add/add.component';
import { UpdateComponent } from './update/update.component';
import { BookappComponent } from './bookapp/bookapp.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { ShowsingledeleteComponent } from './showsingledelete/showsingledelete.component';
import { PageloadingComponent } from './pageloading/pageloading.component';
import { SearchdataComponent } from './searchdata/searchdata.component';
const routes: Routes = [
  {path:'',redirectTo:'/bookapp',pathMatch:'full'},
  {path:'bookapp', component:BookappComponent},
  {path:'home', component:HomeComponent},
  {path:'add', component:AddComponent},
  {path:'update', component:UpdateComponent},
  {path:'delete/:value', component:ShowsingledeleteComponent},
  {path:'pageload', component:PageloadingComponent},
  {path:'searchdata/:userId',component:SearchdataComponent},  
  {path:"**", component:PagenotfoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponent=[BookappComponent,
                               HomeComponent,
                               AddComponent,
                               UpdateComponent,
                               BookappComponent,
                               ShowsingledeleteComponent,
                               PageloadingComponent,
                               SearchdataComponent]
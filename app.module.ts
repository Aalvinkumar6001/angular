import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule,routingComponent } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { SearchComponent } from './search/search.component';
import { HomeComponent } from './home/home.component';
import { AddComponent } from './add/add.component';
import { UpdateComponent } from './update/update.component';
import { BookserviceService } from './bookservice.service';
import { BookappComponent } from './bookapp/bookapp.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { HttpClientModule } from '@angular/common/http';
import { ShowsingledeleteComponent } from './showsingledelete/showsingledelete.component';
import { FormsModule, ReactiveFormsModule }   from '@angular/forms';
import { PageloadingComponent } from './pageloading/pageloading.component';
import { SearchdataComponent } from './searchdata/searchdata.component';
import { AddbookComponent } from './addbook/addbook.component';
import { AddsubjectComponent } from './addsubject/addsubject.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    SearchComponent,
    HomeComponent,
    AddComponent,
    UpdateComponent,
    routingComponent,
    BookappComponent,
    PagenotfoundComponent,
    ShowsingledeleteComponent,
    PageloadingComponent,
    SearchdataComponent,
    AddbookComponent,
    AddsubjectComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [BookserviceService],
  bootstrap: [AppComponent]
})
export class AppModule { }

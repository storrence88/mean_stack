import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';

import { HttpClientModule } from '@angular/common/http';
import { PetsService } from './pets.service';
import { FormsModule } from '@angular/forms';
import { NewComponent } from './home/new/new.component';
import { EditComponent } from './home/edit/edit.component';
import { ViewComponent } from './home/view/view.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NewComponent,
    EditComponent,
    ViewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [PetsService],
  bootstrap: [AppComponent]
})
export class AppModule { }

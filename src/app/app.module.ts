import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCardModule } from '@angular/material/card';
import { SportCenterInfoComponent } from './public-info/sport-center-info/sport-center-info.component';
import { HttpClientModule } from '@angular/common/http';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { HeaderComponent } from './common-page/header/header.component';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { ParkInfoComponent } from './public-info/park-info/park-info.component';
import { AirQualityInfoComponent } from './public-info/air-quality-info/air-quality-info.component';
import { MatTableModule } from '@angular/material/table';
import { CommonDialogComponent } from './dialogs/common-dialog/common-dialog.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MatRadioModule } from '@angular/material/radio';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatPaginatorModule } from '@angular/material/paginator';






@NgModule({
  declarations: [
    AppComponent,
    SportCenterInfoComponent,
    HeaderComponent,
    ParkInfoComponent,
    AirQualityInfoComponent,
    CommonDialogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatCardModule,
    HttpClientModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    FormsModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatInputModule,
    MatTableModule,
    MatDialogModule,
    MatRadioModule,
    MatCheckboxModule,
    MatPaginatorModule
  ],
  providers: [
    // { provide: 'API_URL', useValue: 'https://api.example.com' } //令牌
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

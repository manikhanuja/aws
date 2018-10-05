import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AvatarModule } from 'ngx-avatar';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatCardModule, MatIconModule, MatToolbarModule, MatButtonModule, MatFormFieldModule, MatInputModule } from '@angular/material';
import { AppRoutingModule, routingComponents } from './app-routing.module';
import { TableComponent } from './table/table.component';
import { TableRowComponent } from './table-row/table-row.component';
// import { PollyService } from './polly.service';

@NgModule({
  declarations: [
    AppComponent,

    routingComponents,

    TableComponent,

    TableRowComponent,
  ],
  imports: [
    BrowserModule,
    AvatarModule,
    MatCardModule,
    MatIconModule,
    MatToolbarModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

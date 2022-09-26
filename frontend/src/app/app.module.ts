import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms'

import { SocketIoModule } from 'ngx-socket-io';
import { CookieService } from 'ngx-cookie-service';
import { SocketProviderConnect } from './services/socket/web-socket.service';

import { JugadorComponent } from './components/jugador/jugador.component';
import { HomeComponent } from './components/home/home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSidenavModule } from '@angular/material/sidenav';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatOptionModule } from '@angular/material/core';
import { MatSelectModule } from '@angular/material/select';
import { MatTableModule } from '@angular/material/table';
import { MatListModule } from '@angular/material/list';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { MatInputModule } from '@angular/material/input';

import { HttpClientModule } from '@angular/common/http';
import { AbmcJugadorComponent } from './components/jugador/abmc-jugador/abmc-jugador.component';
import { SocketComponent } from './components/socket/socket.component';
import { SnakeComponent } from './components/snake/snake.component';

@NgModule({
  declarations: [
    AppComponent,
    JugadorComponent,
    HomeComponent,
    AbmcJugadorComponent,
    SocketComponent,
    SnakeComponent,
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    SocketIoModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatSidenavModule,
    MatOptionModule,
    MatSelectModule,
    MatTableModule,
    MatListModule,
    MatCardModule,
    MatDividerModule,
    MatInputModule,
  ],
  providers: [SocketProviderConnect, CookieService],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { JugadorComponent } from './components/jugador/jugador.component';
import { HomeComponent } from './components/home/home.component';
import { AbmcJugadorComponent } from './components/jugador/abmc-jugador/abmc-jugador.component';
import { SocketComponent } from './components/socket/socket.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'jugadores', component: JugadorComponent },
  { path: 'jugadores/:nombre_usuario', component: AbmcJugadorComponent },
  { path: 'juego', component: SocketComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

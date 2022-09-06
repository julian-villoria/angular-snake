import { Component, OnInit } from '@angular/core';
import { Jugador } from 'src/app/clases/jugador';
import { JugadorService } from 'src/app/services/jugadores/jugador.service';

@Component({
  selector: 'app-jugador',
  templateUrl: './jugador.component.html',
  styleUrls: ['./jugador.component.css']
})
export class JugadorComponent implements OnInit {
  jugadores: Jugador[] = [];
  jugador?: Jugador;
  nombreUsuario: String = 'test';
  columns: String[] = ['nombre-usuario', 'nombre', 'apellido', 'contrasena', 'acciones'];

  constructor(private jugadorService: JugadorService) { }

  ngOnInit(): void {
    this.getJugadores();
    this.getByNombreUsuario(this.nombreUsuario);
  }

  getJugadores(): void {
    this.jugadorService.getJugadores()
      .subscribe(jugadores => this.jugadores = jugadores);
  }

  getByNombreUsuario(nombreUsuario: String): void {
    this.jugadorService.getByNombreUsuario(nombreUsuario)
      .subscribe(jugador => this.jugador = jugador);
  }

}
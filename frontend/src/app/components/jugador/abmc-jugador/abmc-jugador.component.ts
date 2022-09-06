import { Component, OnInit } from '@angular/core';
import { Jugador } from 'src/app/clases/jugador';
import { ActivatedRoute } from "@angular/router";
import { JugadorService } from 'src/app/services/jugadores/jugador.service';

@Component({
  selector: 'app-abmc-jugador',
  templateUrl: './abmc-jugador.component.html',
  styleUrls: ['./abmc-jugador.component.css']
})
export class AbmcJugadorComponent implements OnInit {
  jugador?: Jugador;
  nombreUsuario?: string;

  constructor(private jugadorService: JugadorService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.nombreUsuario = this.route.snapshot.paramMap.get("nombre_usuario") as string;
    this.getByNombreUsuario(this.nombreUsuario);
  }

  getByNombreUsuario(nombreUsuario: string): void {
    this.jugadorService.getByNombreUsuario(nombreUsuario)
      .subscribe(jugador => this.jugador = jugador);
  }

}

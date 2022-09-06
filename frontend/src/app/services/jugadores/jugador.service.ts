import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Jugador } from 'src/app/clases/jugador';

@Injectable({
  providedIn: 'root',
})

export class JugadorService {

  private urlBase = 'http://localhost:3000';
  constructor(private http: HttpClient) { }

  getJugadores(): Observable<Jugador[]> {
    return this.http.get<Jugador[]>(`${this.urlBase}/jugadores`);
  }
  getByNombreUsuario(nombre_usuario: String): Observable<Jugador> {
    return this.http.get<Jugador>(`${this.urlBase}/jugadores/${nombre_usuario}`);
  }
  post(jugador: Jugador) {
    return this.http.post(`${this.urlBase}/jugadores`, JSON.stringify(jugador));
  }
  put(jugador: Jugador) {
    return this.http.put(`${this.urlBase}/jugadores/${jugador.nombre_usuario}`, JSON.stringify(jugador));
  }
  delete(nombre_usuario: String) {
    return this.http.delete(`${this.urlBase}/jugadores/nombre_usuario=${nombre_usuario}`);
  }
}

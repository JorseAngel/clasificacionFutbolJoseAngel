import { Resultado } from './../model/resultado';
import { Liga } from './../model/liga';
import { AppRoutingModule } from "./../app-routing.module";
import { Equipo } from "./../model/equipo";
import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root",
})
export class LigaService {
  arrayEquipos: Equipo[] = [];
  nombreEquipo: string[] = ["Barcelona", "Madrid", "Sevilla", "Valencia", "Osasuna", "Alaves"];
  liga: Liga;

  jornadas: Array<Resultado> = new Array();
  seguirAñadiendo: boolean = true;
  contador: number = 0;
  jornadaAjornada: boolean = false;

  constructor() {
    this.agregarEquipos();
  }

  public agregarEquipos(): void {
    for (let index = 0; index < this.nombreEquipo.length; index++) {
      this.arrayEquipos.push(new Equipo(index, this.nombreEquipo[index], 0, 0, 0));
    }
  }

  public pasarJornada() {
    if (this.seguirAñadiendo) {
      for (let index = 0; index < this.arrayEquipos.length / 2; index++) {
        this.jornadas.push(this.liga.totalResultados[this.contador]);
        this.obtenerDatosTotales(this.contador);
        this.liga.ordenarClasificacion();
        this.contador++;
        this.jornadaAjornada = true;
      }


    } else {
      this.jornadaAjornada = true;
    }

    if (this.liga.totalResultados.length / 2 <= this.contador) {
      this.seguirAñadiendo = false;
    }
  }

  private obtenerDatosTotales(contador: number): void {
    let result: Resultado =this.jornadas[contador];
      this.arrayEquipos.forEach(team => {
        if (result.local === team) {
          team.addGolesFavorables(result.golesLocal);
          team.addGolesContra(result.golesVisitante);
          team.addPuntuacion(result.puntosLocal());
        } if (result.visitante === team) {
          team.addGolesFavorables(result.golesVisitante);
          team.addGolesContra(result.golesLocal);
          team.addPuntuacion(result.puntosVisitante());

        }


      });
    
  }

  public actualizarLigaService(liga:Liga){
    return this.liga = liga;
  }
  
  public actualizarJornadaAjornadaService(valor: boolean){
    return this.jornadaAjornada = valor;
  }
}

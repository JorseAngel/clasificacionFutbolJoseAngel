import { LigaService } from './../services/liga.service';
import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { Equipo } from "../model/equipo";
import { Liga } from "./../model/liga";

@Component({
  selector: "app-clasificacion",
  templateUrl: "./clasificacion.page.html",
  styleUrls: ["./clasificacion.page.scss"],
})
export class ClasificacionPage implements OnInit {

  arrayEquipos: Equipo[] = [];
  liga: Liga;
  resultados = new Array();

  constructor(private ligaService: LigaService) {
    this.arrayEquipos = this.ligaService.arrayEquipos;
    this.montarResultados();
  }

  public montarResultados(): void {
    this.liga = new Liga(this.arrayEquipos);

    var resultadosIda = this.liga.jugarPartidosIda();
    var resultadosVuelta = this.liga.jugarPartidosVuelta();
    for (let index = 0; index < resultadosIda.length; index++) {
      this.resultados.push(resultadosIda[index]);
    }
    for (let index = 0; index < resultadosVuelta.length; index++) {
      this.resultados.push(resultadosVuelta[index]);
    }

    this.liga.totalResultados = this.resultados;
  }

  public darLigaActualizada(){
    this.ligaService.actualizarLigaService(this.liga);
  }
  
  public darJornadaAjornadaActualizada(){
    this.ligaService.actualizarJornadaAjornadaService(true);
  }

  ngOnInit() {}
}

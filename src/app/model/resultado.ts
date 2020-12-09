import { Puntuacion } from './puntuacion';
import { Equipo } from './equipo';

export class Resultado{
    private _local: Equipo;
    private _visitante: Equipo;
    private _golesLocal: number;
    private _golesVisitante: number;
    private _numeroJornada: number;

    constructor(numeroJornada: number, local: Equipo, visitante: Equipo, golesLocal: number, golesVisitante: number, private _id?: number){
        this._id = local.id * 2 + visitante.id;
        this._local = local;
        this._visitante = visitante;
        this._golesLocal = golesLocal;
        this._golesVisitante = golesVisitante;
        this._numeroJornada = numeroJornada;
    }

    public puntosLocal(): number{
        let puntos:number = Puntuacion.empatar;

        if (this.golesLocal > this.golesVisitante) {
            puntos = Puntuacion.ganar;
        }else if (this.golesLocal < this.golesVisitante) {
            puntos = Puntuacion.perder;
        }

        return puntos;
    }

    public puntosVisitante(): number{
        let puntos:number = Puntuacion.empatar;

        if (this.puntosLocal() != Puntuacion.empatar) {
            puntos = Puntuacion.ganar - this.puntosLocal();
        }

        return puntos;
    }

    public get id(): number {
        return this._id;
    }

    public set id(value: number) {
        this._id = value;
    }

    public get numeroJornada(): number {
        return this._numeroJornada;
    }

    public set numeroJornada(value: number) {
        this._numeroJornada = value;
    }

    public get local(): Equipo {
        return this._local;
    }

    public set local(value: Equipo) {
        this._local = value;
    }

    public get visitante(): Equipo {
        return this._visitante;
    }

    public set visitante(value: Equipo) {
        this._visitante = value;
    }

    public get golesLocal(): number {
        return this._golesLocal;
    }

    public set golesLocal(value: number) {
        this._golesLocal = value;
    }

    public get golesVisitante(): number {
        return this._golesVisitante;
    }

    public set golesVisitante(value: number) {
        this._golesVisitante = value;
    }
}
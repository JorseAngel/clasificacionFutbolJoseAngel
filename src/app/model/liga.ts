import { Resultado } from './resultado';
import { Equipo } from './equipo';

export class Liga{
    private _totalEquipos: Equipo[];
    private _totalResultados: Resultado[] = [];

    constructor(totalEquipos: Equipo[]){
        this._totalEquipos = totalEquipos;
    }

    public jugarPartidosIda(): Array<Resultado> {
        for (let i = 0; i < this._totalEquipos.length - 1; i++) {
            this.asignarValuesIda(i);
            this.combinarPartidos();
        }
        return this._totalResultados;
    }

    public jugarPartidosVuelta(): Array<Resultado> {
        let tamano: number = (this._totalEquipos.length - 1);
        for (let i = 0; i < this._totalEquipos.length - 1; i++) {

            this.asignarValuesVuelta(tamano);
            this.combinarPartidos();
            tamano++;
        }
        return this._totalResultados;
    }

    public asignarValuesIda(numeroJornada: number): void {
        for (let i = 0, j = this._totalEquipos.length - 1; i < j; i++ , j--) {
            this._totalResultados.push(new Resultado(numeroJornada, this._totalEquipos[i], this._totalEquipos[j], this.getRandom(0, 10), this.getRandom(0, 10)));

        }
    }

    public asignarValuesVuelta(numeroJornada: number): void {
        for (let i = 0, j = this._totalEquipos.length - 1; i < j; i++ , j--) {

            this._totalResultados.push(new Resultado(numeroJornada, this._totalEquipos[j], this._totalEquipos[i], this.getRandom(0, 10), this.getRandom(0, 10)));
        }
    }

    public combinarPartidos(): void {
        let combinador = this._totalEquipos[this._totalEquipos.length - 1];

        for (let i = this._totalEquipos.length - 1; i > 1; i--) {
            this._totalEquipos[i] = this._totalEquipos[i - 1];
        }
        this._totalEquipos[1] = combinador;
    }

    public ordenarClasificacion() {
        this._totalEquipos.sort((a, b) =>  {
            return (b.puntuacion - a.puntuacion);
        });
    }

    private getRandom(min: number, max: number) {
        return Math.round(Math.random() * (max - min) + min);
    }

    public get totalResultados(){
        return this._totalResultados;
    }

    public set totalResultados(dato: Resultado[]){
        this._totalResultados = dato;
    }
}
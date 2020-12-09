export class Equipo{
    private _id: number
    private _nombre: string;

    constructor(id: number, nombre: string, private _puntuacion?: number, private _golesFavorables?: number, private _golesContra?: number){
        this._id = id;
        this._nombre = nombre;
        _puntuacion = 0;
        _golesFavorables = 0;
        _golesContra = 0;
    }

    public addPuntuacion(puntos: number): void{
        this._puntuacion += puntos;
    }

    public addGolesFavorables(numeroGoles: number): void{
        this._golesFavorables += numeroGoles;
    }

    public addGolesContra(numeroGoles: number): void{
        this._golesContra += numeroGoles;
    }

    public get id(): number {
        return this._id;
    }

    public set id(value: number) {
        this._id = value;
    }

    public get nombre(): string {
        return this._nombre;
    }

    public set nombre(value: string) {
        this._nombre = value;
    }

    public get puntuacion(): number {
        return this._puntuacion;
    }

    public set puntuacion(value: number) {
        this._puntuacion = value;
    }

    public get golesFavorables(): number {
        return this._golesFavorables;
    }

    public set golesFavorables(value: number) {
        this._golesFavorables = value;
    }

    public get golesContra(): number {
        return this._golesContra;
    }

    public set golesContra(value: number) {
        this._golesContra = value;
    }

}
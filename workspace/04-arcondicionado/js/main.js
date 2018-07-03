export class ArCondicionado {
    constructor(marca, inverter, potencia, tempMax, tempMin) {
        this._marca = marca;
        this._inverter = inverter;
        this._potencia = potencia;
        this._temperatura = 0;
        this._ligado = false;
        this._aquecer = false;
        this._tempMax = tempMax;
        this._tempMin = tempMin;
    }

    get marca() {
        return this._marca;
    }

    get potencia() {
        return this._potencia;
    }

    get temperatura() {
        return this._temperatura;
    }

    get ligado() {
        return this._ligado;
    }

    get aquecer() {
        return this._aquecer;
    }

    ligar() {
        if (!this._ligado) {
            this._ligado = true;
            this._temperatura = this._tempMin;
        }
    }

    desligar() {
        if (this._ligado) {
            this._ligado = false;
            this._temperatura = 0;
        }
    }

    esquentar() {
        this._aquecer = this.ligado;
    }

    esfriar() {
        this._aquecer = !(this.ligado && this._aquecer);
    }

    aumentarTemperatura() {
        this._temperatura += (this._temperatura <
            this._tempMax && this._ligado);
    }

    diminuirTemperatura() {
        this._temperatura -= (this._temperatura >
            this._tempMin && this._ligado);
    }
}

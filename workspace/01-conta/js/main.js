export class Conta {
    constructor(agencia, numero) {
        this._agencia = agencia;
        this._numero = numero;
        this._saldo = 500;
    }

    get agencia() {
        return this._agencia;
    }

    get numero() {
        return this._numero;
    }

    get saldo() {
        return parseFloat(this._saldo + '.0');
    }

    sacar(valor) {
        if (valor <= this._saldo) {
            this._saldo -= valor;
        }
    }

    depositarEmDinheiro(valor) {
        if (valor > 0 && valor <= 1000) {
            this._saldo += valor;
        }
    }

    depositarEmCheque(valor) {
        if (valor > 0 && valor <= 10000) {
            this._saldo += valor;
        }
    }

    toString() {
        return `ag ${this._agencia} cc ${this._numero} saldo ${this._saldo}.00`;
    }
}

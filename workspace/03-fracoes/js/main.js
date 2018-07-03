export class Fraction {
    constructor(numerator = 1, denominator = 1) {
        this._numerator = numerator;
        this._denominator = denominator;
    }

    get numerator() {
        return this._numerator;
    }

    get denominator() {
        return this._denominator;
    }

    get canReduce() {
        const NUMEROSPRIMOS =
            ['2', '3', '5', '7', '11', '13', '17', '19', '23', '29', '31'];
        for (const numeroPrimo of NUMEROSPRIMOS) {
            if (this._denominator % numeroPrimo === 0 &&
                this._numerator % numeroPrimo === 0) {
                return true;
            }
        }
        return false;
    }

    plus(fracao) {
        if (fracao.denominator === this._denominator) {
            return new Fraction(this._numerator +
                fracao.numerator, this._denominator);
        }
    }

    reduce() {
        const NUMEROSPRIMOS =
            ['31', '29', '23', '19', '17', '13', '11', '7', '5', '3', '2'];
        for (const numeroPrimo of NUMEROSPRIMOS) {
            if (this._denominator % numeroPrimo === 0 &&
                this._numerator % numeroPrimo === 0) {
                this._denominator = this._denominator / numeroPrimo;
                this._numerator = this._numerator / numeroPrimo;
            }
        }
    }

    divide(fracao) {
        return `${this._numerator *
            fracao.denominator}/${this._denominator * fracao.numerator}`;
    }

    multiply(fracao) {
        return new Fraction(this._numerator * fracao.numerator,
            this._denominator * fracao.denominator);
    }

    greaterThan(fracao) {
        return (this._numerator * fracao.denominator) >
            (fracao.numerator * this._denominator);
    }

    lessThan(fracao) {
        return (this._numerator * fracao.denominator) <
            (fracao.numerator * this._denominator);
    }

    equals(fracao) {
        return (this._numerator * fracao.denominator) ===
            (fracao.numerator * this._denominator);
    }

    toString() {
        return `${this._numerator}/${this._denominator}`;
    }
}

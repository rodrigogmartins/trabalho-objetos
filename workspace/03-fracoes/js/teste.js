import {Fraction} from './main.js';

const fr = new Fraction(3, 4);
console.log(fr.numerator === 3);
console.log(fr.denominator === 4);
console.log(fr.toString() === '3/4');
// fr.numerator = 10;
// fr.denominator = 10;
const f1 = new Fraction(4, 15);
console.log(f1.toString() === '4/15');
const f2 = new Fraction(5, 15);
console.log(f2.toString() === '5/15');
const f3 = f1.plus(f2);
console.log(f3.toString() === '9/15');
// TODO: mais 3 casos de teste com plus
const ftp1 = new Fraction(9, 15);
const ftp2 = new Fraction(11, 15);
const ftp3 = ftp1.plus(ftp2);
console.log(ftp3.toString() === '20/15');
const ftp4 = ftp3.plus(f3);
console.log(ftp4.toString() === '29/15');
const ftp5 = new Fraction(9, 70);
const ftp6 = new Fraction(11, 70);
const ftp7 = ftp5.plus(ftp6);
console.log(ftp7.toString() === '20/70');
const f4 = new Fraction(1, 3);
console.log(f4.canReduce === false);
const f5 = new Fraction(9, 15);
console.log(f5.canReduce === true);
f5.reduce();
console.log(f5.toString() === '3/5');
console.log(f5.canReduce === false);
// TODO: escreva mais 3 casos de teste com reduce
const ft1 = new Fraction(4495, 13485);
ft1.reduce();
console.log(ft1.toString() === '1/3');
const ft2 = new Fraction(437, 1748);
ft2.reduce();
console.log(ft2.toString() === '1/4');
const ft3 = new Fraction(385, 770);
ft3.reduce();
console.log(ft3.toString() === '1/2');
const f6 = new Fraction(25, 4);
const f7 = new Fraction(2, 5);
const f8 = f6.divide(f7);
console.log(f8 === '125/8'); // imprime "125/8"
// TODO: escreva mais 3 casos de teste com divide
const ftp8 = new Fraction(9, 70);
const ftp9 = new Fraction(11, 70);
console.log(ftp8.divide(ftp9) === '630/770');
const ftp11 = new Fraction(9, 15);
const ftp12 = new Fraction(11, 15);
console.log(ftp11.divide(ftp12) === '135/165');
const ftp13 = new Fraction(1, 3);
const ftp14 = new Fraction(4, 3);
console.log(ftp13.divide(ftp14) === '3/12');
const f9 = new Fraction(3, 7);
const f10 = new Fraction(2, 3);
const f11 = f9.multiply(f10);
console.log(f11.toString() === '6/21'); // imprime "6/21"
// TODO: escreva mais 3 casos de teste com multiply
const ft8 = new Fraction(9, 70);
const ft9 = new Fraction(11, 70);
console.log(ft8.multiply(ft9).toString() === '99/4900');
const ft11 = new Fraction(9, 15);
const ft12 = new Fraction(11, 15);
console.log(ft11.multiply(ft12).toString() === '99/225');
const ft13 = new Fraction(1, 3);
const ft14 = new Fraction(4, 3);
console.log(ft13.multiply(ft14).toString() === '4/9');
const f12 = new Fraction(7, 8);
const f13 = new Fraction(2, 5);
console.log(f12.greaterThan(f13) === true);
console.log(f12.lessThan(f13) === false);
console.log(f12.equals(f13) === false);
const f14 = new Fraction(2, 3);
const f15 = new Fraction(12, 36);
const f16 = new Fraction(1, 3);
// TODO: escreva mais 9 casos de teste com greaterThan, lessThan e equals
console.log(f14.greaterThan(f15) === true);
console.log(f14.lessThan(f15) === false);
console.log(f14.equals(f15) === false);
console.log(f15.greaterThan(f16) === false);
console.log(f15.lessThan(f16) === false);
console.log(f15.equals(f16) === true);
console.log(f16.greaterThan(f13) === false);
console.log(f16.lessThan(f13) === true);
console.log(f16.equals(f13) === false);
const f17 = new Fraction(4);
// TODO: escreva casos de teste para o valor que se espera de f17
console.log(f17.toString() === '4/1');
const f18 = new Fraction();
// TODO: escreva casos de teste para o valor que se espera de f18
console.log(f18.toString() === '1/1');

import {ArCondicionado} from './main.js';

const arCondicionado = new ArCondicionado('LG', true, 24000, 32, 17);
console.log(arCondicionado.marca === 'LG');
console.log(arCondicionado.potencia === 24000);
console.log(arCondicionado.ligado === false);
console.log(arCondicionado.temperatura === 0);
arCondicionado.ligar();
console.log(arCondicionado.ligado === true);
console.log(arCondicionado.temperatura === 17);
arCondicionado.aumentarTemperatura();
console.log(arCondicionado.ligado === true);
console.log(arCondicionado.temperatura === 18);
// arCondicionado.temperatura = 29;
// console.log(arCondicionado.ligado === true);
// console.log(arCondicionado.temperatura === 18);
arCondicionado.diminuirTemperatura();
console.log(arCondicionado.temperatura === 17);
arCondicionado.diminuirTemperatura();
console.log(arCondicionado.ligado === true);
console.log(arCondicionado.temperatura === 17);
arCondicionado.esquentar();
console.log(arCondicionado.aquecer === true);
arCondicionado.esquentar();
console.log(arCondicionado.aquecer === true);
arCondicionado.esfriar();
console.log(arCondicionado.aquecer === false);
arCondicionado.desligar();
console.log(arCondicionado.aquecer === false);
console.log(arCondicionado.ligado === false);
console.log(arCondicionado.temperatura === 0);
arCondicionado.aumentarTemperatura();
console.log(arCondicionado.ligado === false);
console.log(arCondicionado.temperatura === 0);
arCondicionado.diminuirTemperatura();
console.log(arCondicionado.ligado === false);
console.log(arCondicionado.temperatura === 0);
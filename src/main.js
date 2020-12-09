export default class App {

    sumatoriaSerieUno(numero) {
     let suma = 0;
        for(let x = 1; x <= numero; x = x + 1) {
        suma = suma + (1/x);
        }
        return suma;
    }
}

let app = new App();

console.log(app.sumatoriaSerieUno(5));
export default class App {

    sumatoriaSerieUno(numero) {
     let suma = 0;
        for(let x = 1; x <= numero; x = x + 1) {
        suma = suma + (1/x);
        }
        return suma;
    }

    sumatoriaSerieDos(numero) {
     let z = 2;
     let suma = 1;
        while(z <= numero) {

            if(z%2 == 0) {
                suma = suma + (1/z);
            } else if(z%2 != 0) {
                suma = suma - (1/z);
            }
            z = z + 1;
        }
        return suma;
    }

    esPrimo(numero) {
        do {
            if(numero % 2 == 0 && numero != 2) {
                return false;
            } else if( numero % 3 == 0 && numero != 3) {
                return false;
            } else if (numero % 2 != 0 && numero % 3 != 0) {
                return true;
            } else if (numero == 2 || numero == 3) {
                return true;

            } 
          }  while ( numero != 0); 
        
    }    
}

let app = new App();

console.log(app.sumatoriaSerieUno(5));
console.log(app.sumatoriaSerieDos(5));
console.log(app.esPrimo(2));
console.log(app.esPrimo(3));
console.log(app.esPrimo(4));
console.log(app.esPrimo(7));
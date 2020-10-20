import {Orden} from './orden.js';
import {ListaPlatillos} from './ListaPlatillos.js';

class Restaurante{    
    constructor(){
        this.listaDePlatillos = new ListaPlatillos();
        this.abierto = false;
        this.historialOrdenes = [];
    }

    abrirRestaurante = (abrir) => this.abierto = abrir;

    obtenerListaDePlatillos = () => this.listaDePlatillos;

    agregarOrdenAHistorial = (orden) => {
        this.historialOrdenes.push(orden);
    }

    obtenerGananciasDelDia = () => {
        let total = this.historialOrdenes.reduce((totalGanancias,orden) =>
            {return totalGanancias + orden.obtenerTotal()},
            0)
        return total;
    }
}

export {Restaurante};
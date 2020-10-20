import {Platillo} from './platillo.js'

class Concepto{
    constructor(cantidad,platillo){
        this.cantidad = cantidad;
        this.platillo = platillo;
    }

    obtenerSubtotal = () => {
        return (this.cantidad * this.platillo.precio);
    }
}

export {Concepto};
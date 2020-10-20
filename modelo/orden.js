import {Concepto} from './concepto.js'

class Orden{
    constructor(numeroOrden){
        this.numeroOrden = numeroOrden;
        this.conceptos = new Map();
    }

    agregarConcepto = (concepto) => {
        if(this.conceptos.has(concepto.platillo.nombre))
                this.conceptos.get(concepto.platillo.nombre).cantidad += concepto.cantidad;
        else
                this.conceptos.set(concepto.platillo.nombre,concepto);
    }

    obtenerTotal = () => {
        let total = 0;
        this.conceptos.forEach(concepto => total += concepto.obtenerSubtotal());
        return total;
    }               
    
}

export {Orden};
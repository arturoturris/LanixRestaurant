class ListaPlatillos{
    constructor(){
        this.lista = [];
    }

    agregarPlatillo = (platillo) => {
        this.lista.push(platillo);
    }

    obtenerIndexPlatillo = (nombrePlatillo) => this.lista.findIndex(platillo => platillo.nombre === nombrePlatillo);
    
    removerPlatillo = (nombrePlatillo) => {
        let index = this.obtenerIndexPlatillo(nombrePlatillo);

        if(index != -1)
            this.lista.splice(index,1);
    }

    obtenerPlatillo = (nombrePlatillo) => {
        let index = this.obtenerIndexPlatillo(nombrePlatillo);

        if(index != -1)
            return this.lista[index];

        return null;
    }
}

export {ListaPlatillos};
class ListaPlatillos{
    constructor(){
        this.lista = [];
    }

    
    obtenerIndexPlatillo = (nombrePlatillo) => this.lista.findIndex(platillo => platillo.nombre === nombrePlatillo);
    
    obtenerPlatillo = (nombrePlatillo) => {
        let index = this.obtenerIndexPlatillo(nombrePlatillo);

        if(index != -1)
            return this.lista[index];

        return null;
    }

    agregarPlatillo = (platillo) => {
        this.lista.push(platillo);
    }

    editarPlatillo = (nombrePlatilloOriginal,platilloModificado) => {
        let index = this.obtenerIndexPlatillo(nombrePlatilloOriginal);

        if(index != -1)
            this.lista[index] = platilloModificado;
    }

    removerPlatillo = (nombrePlatillo) => {
        let index = this.obtenerIndexPlatillo(nombrePlatillo);

        if(index != -1)
            this.lista.splice(index,1);
    }

}

export {ListaPlatillos};
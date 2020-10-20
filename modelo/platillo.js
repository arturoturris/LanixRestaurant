class Platillo{
    constructor(tipo,nombre,precio){
        this.tipo = tipo;
        this.nombre = nombre;
        this.precio = precio;
    }

    toString = () => {
        return (`Tipo: ${this.tipo}  Nombre: ${this.nombre}  Precio: ${this.precio}`);
    }
}

export {Platillo};
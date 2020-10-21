class Restaurante_Control{
    constructor(modelo){
        this.modelo = modelo;

        document.querySelector('#btnAbrirRestaurante').addEventListener('click',this.onAbrirRestaurante);
        document.querySelector('#btnCerrarRestaurante').addEventListener('click',this.onCerrarRestaurante);
    }

    onAbrirRestaurante = () => {
        document.querySelector('section[class*="platillos"]').classList.remove('hide');
        document.querySelector('section[class*="orden"]').classList.remove('hide');
        document.querySelector('section[class*="historial"]').classList.add('hide');
        this.modelo.iniciarNuevoDia();
    }

    desplegarGanancias = () => {
        document.querySelector('#numeroOrdenes').innerHTML = this.modelo.obtenerHistorialOrdenes().length;
        document.querySelector('#gananciasTotales').innerHTML = `$${this.modelo.obtenerGananciasDelDia().toFixed(2)}`;
        console.log("Historial de ordenes:",this.modelo.obtenerHistorialOrdenes());
    }

    onCerrarRestaurante = () => {
        document.querySelector('section[class*="platillos"]').classList.add('hide');
        document.querySelector('section[class*="orden"]').classList.add('hide');
        document.querySelector('section[class*="historial"]').classList.remove('hide');
        this.desplegarGanancias();
    }

}

export {Restaurante_Control};
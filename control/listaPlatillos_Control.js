import { Platillo } from '../modelo/platillo.js';
import {ListaPlatillos_Vista} from '../vista/listaPlatillos_Vista.js';

class ListaPlatillos_Control{
    constructor(vista,modelo){
        this.vista = vista;
        this.modelo = modelo;

        //SETTING EVENTS
        document.querySelector('#btnAgregarPlatillo').addEventListener('click',this.onAgregarPlatillo);
        document.querySelector('#formPlatillos').addEventListener('submit',this.onConfirmarPlatillo);
        document.querySelector('#btnCancelarPlatillo').addEventListener('click',this.onCancelarPlatillo);

        this.desplegarPlatillos();
    }

    desplegarPlatillos = () => {
        this.modelo.lista.forEach(platillo => {
            this.vista.agregarPlatillo(platillo);
        });
    }

    limpiarFormulario = () => {
        let campos = document.querySelector('#formPlatillos').querySelectorAll('input[name]');

        for(const campo of campos)
            campo.value = '';
    }

    onAgregarPlatillo = () => {
        document.querySelector('#btnAgregarPlatillo').classList.add('hide');
        document.querySelector('#formPlatillos').classList.remove('hide');
    }

    onConfirmarPlatillo = (e) => {
        e.preventDefault();

        const nuevoPlatillo = new Platillo(
            document.querySelector('#formPlatillos').querySelector('input[name=tipo]').value,
            document.querySelector('#formPlatillos').querySelector('input[name=nombre]').value,
            parseFloat(document.querySelector('#formPlatillos').querySelector('input[name=precio]').value)
        );

        this.modelo.agregarPlatillo(nuevoPlatillo);
        this.vista.agregarPlatillo(nuevoPlatillo);
    }

    onCancelarPlatillo = () => {
        document.querySelector('#btnAgregarPlatillo').classList.remove('hide');
        document.querySelector('#formPlatillos').classList.add('hide');
        this.limpiarFormulario();
    }

    static onEditarPlatillo = (nombrePlatillo) =>{
        alert('Editando platillo:',nombrePlatillo);
        console.log("onEditarPlatillo llamado");
        /*const platillo = this.modelo.obtenerPlatillo(nombrePlatillo);

        this.onAgregarPlatillo();

        document.querySelector('#formPlatillos').querySelector('input[name=id]').value = platillo.nombre;
        document.querySelector('#formPlatillos').querySelector('input[name=tipo]').value = platillo.tipo;
        document.querySelector('#formPlatillos').querySelector('input[name=nombre]').value = platillo.nombre;
        document.querySelector('#formPlatillos').querySelector('input[name=precio]').value = platillo.precio;
        */
    }

    onEliminarPlatillo = (id) =>{
        alert('Eliminando platillo:',id);
    }
}

export {ListaPlatillos_Control};
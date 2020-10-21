import { Orden } from '../modelo/orden.js';
import { Concepto } from '../modelo/concepto.js';

class Orden_Control{
    constructor(vista,listaPlatillos,historial){
        this.vista = vista;
        this.listaPlatillos = listaPlatillos;
        this.orden = new Orden(Orden.obtenerNumeroOrden());
        this.historial = historial;

        this.desplegarOpcionesDePlatillos();
        this.mostrarOrden();
        this.mostrarPantallaInicial(true);

        //EVENTOS
        document.querySelector('#btnActualizarOpciones').addEventListener('click',this.desplegarOpcionesDePlatillos);
        document.querySelector('#formularioOrden').addEventListener('submit',this.onAgregarPlatillo);
        document.querySelector('#concretarOrden').addEventListener('click',this.onConcretarOrden);
        document.querySelector('#btnReiniciarOrden').addEventListener('click',this.onReiniciarOrden);
        document.querySelector('#btnNuevaOrden').addEventListener('click',() => {this.mostrarPantallaInicial(false)});
    }

    desplegarOpcionesDePlatillos = () => {
        const opciones = document.querySelector('#opcionesDePlatillos');
        
        opciones.innerHTML = '';

        for(const platillo of this.listaPlatillos.lista){
            opciones.innerHTML += `<option value="${platillo.nombre}">${platillo.nombre}</option>`;
        }
    }

    nuevaOrden = () => {
        this.orden = new Orden(Orden.obtenerNumeroOrden());
        document.querySelector('#formularioOrden').querySelector('input[name="cantidad"]').value = 1;
    }

    onReiniciarOrden = () => {
        this.orden.reiniciarOrden();
        this.mostrarOrden();
    }

    onAgregarPlatillo = (e) => {
        e.preventDefault();

        this.orden.agregarConcepto(new Concepto(
            parseInt(document.querySelector(`input[name='cantidad']`).value),
            this.listaPlatillos.obtenerPlatillo(`${document.querySelector('select[name="platillo"]').value}`)
        ));

        this.mostrarOrden();
    }

    mostrarOrden = () => {
        const tbody = this.vista.querySelector('tbody');

        document.querySelector('#tituloOrden').innerHTML = `Orden No. ${this.orden.numeroOrden}`;

        tbody.innerHTML = '';

        this.orden.conceptos.forEach(
          (concepto) => {
              tbody.innerHTML += `
            <tr>
                <td>${concepto.cantidad}</td>
                <td>${concepto.platillo.tipo}</td>
                <td>${concepto.platillo.nombre}</td>
                <td class="moneda">${concepto.platillo.precio}</td>
                <td class="moneda">${concepto.obtenerSubtotal().toFixed(2)}</td>
            </tr>
              `;
          }  
        );

        this.vista.querySelector('tfoot').querySelector('td[class="moneda"]').innerHTML = this.orden.obtenerTotal().toFixed(2);
    }

    mostrarPantallaInicial = (mostrar) => {
        if(mostrar){
            document.querySelector('#vistaNuevaOrden').classList.remove('hide');
            document.querySelector('#contenidoOrden').classList.add('hide');
        }
        else{
            document.querySelector('#vistaNuevaOrden').classList.add('hide');
            document.querySelector('#contenidoOrden').classList.remove('hide');
        }
    }

    onConcretarOrden = () => {
        this.historial.push(this.orden);
        this.nuevaOrden();
        this.mostrarOrden();
        this.mostrarPantallaInicial(true);
    }
}

export {Orden_Control};
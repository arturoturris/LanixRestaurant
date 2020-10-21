import { Platillo } from '../modelo/platillo.js';

class ListaPlatillos_Control{
    constructor(vista,modelo){
        this.vista = vista;
        this.modelo = modelo;

        //SETTING EVENTS
        document.querySelector('#btnAgregarPlatillo').addEventListener('click',this.mostrarFormulario);
        document.querySelector('#formPlatillos').addEventListener('submit',this.onConfirmarPlatillo);
        document.querySelector('#btnCancelarPlatillo').addEventListener('click',this.ocultarFormulario);

        this.desplegarPlatillos();
    }

    agregarPlatilloAVista = (platillo) => {
        const tbody = this.vista.getElementsByTagName('tbody')[0];
        const tr = document.createElement('tr');
        const tdTipo = document.createElement('td');
        const tdNombre = document.createElement('td');
        const tdPrecio = document.createElement('td');
        const tdAcciones = document.createElement('td');
        const aEditar = document.createElement('a');
        const aEliminar = document.createElement('a');

        tdTipo.appendChild(document.createTextNode(`${platillo.tipo}`));
        tdNombre.appendChild(document.createTextNode(`${platillo.nombre}`));
        tdPrecio.appendChild(document.createTextNode(`${platillo.precio}`));
        tdAcciones.appendChild(aEditar);
        tdAcciones.appendChild(document.createTextNode(' '));
        tdAcciones.appendChild(aEliminar);
        tdPrecio.setAttribute('class','moneda');

        aEditar.setAttribute('href',`#`);
        aEditar.setAttribute('platillo',`${platillo.nombre}`);
        aEditar.appendChild(document.createTextNode('Editar'));
        aEditar.addEventListener('click',(e) => {
            e.preventDefault();
            this.onEditarPlatillo(`${e.target.attributes.getNamedItem('platillo').value}`);
        });
        aEliminar.setAttribute('href','#');
        aEliminar.setAttribute('platillo',`${platillo.nombre}`);
        aEliminar.appendChild(document.createTextNode('Eliminar'));
        aEliminar.addEventListener('click',(e) => {
            e.preventDefault();
            this.onEliminarPlatillo(`${e.target.attributes.getNamedItem('platillo').value}`);
            this.eliminarPlatilloDeVista(e.target.parentElement.parentElement);
        });

        tr.appendChild(tdTipo);
        tr.appendChild(tdNombre);
        tr.appendChild(tdPrecio);
        tr.appendChild(tdAcciones);

        tbody.appendChild(tr);
    }

    editarPlatilloDeVista = (nodo,platillo) => {
        nodo.children[0].innerHTML = platillo.tipo;
        nodo.children[1].innerHTML = platillo.nombre;
        nodo.children[2].innerHTML = platillo.precio;

        nodo.children[3].children[0].setAttribute('platillo',platillo.nombre);
        nodo.children[3].children[1].setAttribute('platillo',platillo.nombre);
    }

    eliminarPlatilloDeVista = (nodo) => {
        this.vista.querySelector('tbody').removeChild(nodo);
    }

    desplegarPlatillos = () => {
        this.modelo.lista.forEach(platillo => {
            this.agregarPlatilloAVista(platillo);
        });
    }

    limpiarFormulario = () => {
        let campos = document.querySelector('#formPlatillos').querySelectorAll('input[name]');

        for(const campo of campos)
            campo.value = '';
    }

    mostrarFormulario = () => {
        document.querySelector('#btnAgregarPlatillo').classList.add('hide');
        document.querySelector('#formPlatillos').classList.remove('hide');
    }

    onConfirmarPlatillo = (e) => {
        e.preventDefault();

        const platillo = document.querySelector('#formPlatillos').querySelector('input[name=id]').value;

        if(platillo === ""){
            const nuevoPlatillo = new Platillo(
                document.querySelector('#formPlatillos').querySelector('input[name=tipo]').value,
                document.querySelector('#formPlatillos').querySelector('input[name=nombre]').value,
                parseFloat(document.querySelector('#formPlatillos').querySelector('input[name=precio]').value)
            );
    
            this.modelo.agregarPlatillo(nuevoPlatillo);
            this.agregarPlatilloAVista(nuevoPlatillo);
        }

        else{
            const platilloEditado = new Platillo(
                document.querySelector('#formPlatillos').querySelector('input[name=tipo]').value,
                document.querySelector('#formPlatillos').querySelector('input[name=nombre]').value,
                parseFloat(document.querySelector('#formPlatillos').querySelector('input[name=precio]').value)
            );

            this.modelo.editarPlatillo(platillo,platilloEditado);

            //EDITAR TIPO, NOMBRE, PRECIIO Y VINCULOS
            this.editarPlatilloDeVista(document.querySelector(`a[platillo='${platillo}']`).parentNode.parentNode,platilloEditado);
        }
        
        console.log('Platillos en el modelo:',this.modelo.lista);

        this.limpiarFormulario();
    }

    ocultarFormulario = () => {
        document.querySelector('#btnAgregarPlatillo').classList.remove('hide');
        document.querySelector('#formPlatillos').classList.add('hide');
        this.limpiarFormulario();
    }

    onEditarPlatillo = (nombrePlatillo) =>{
        const platillo = this.modelo.obtenerPlatillo(nombrePlatillo);

        this.mostrarFormulario();

        document.querySelector('#formPlatillos').querySelector('input[name=id]').value = platillo.nombre;
        document.querySelector('#formPlatillos').querySelector('input[name=tipo]').value = platillo.tipo;
        document.querySelector('#formPlatillos').querySelector('input[name=nombre]').value = platillo.nombre;
        document.querySelector('#formPlatillos').querySelector('input[name=precio]').value = platillo.precio;
        
    }

    onEliminarPlatillo = (nombrePlatillo) =>{
        this.modelo.removerPlatillo(nombrePlatillo);
        console.log('Platillos en el modelo:',this.modelo.lista);
    }
}

export {ListaPlatillos_Control};
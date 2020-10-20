import {ListaPlatillos_Control} from '../control/listaPlatillos_Control.js';

class ListaPlatillos_Vista{
    constructor(tablaHTML){
        this.tablaHTML = tablaHTML;
    }


    //ANTES DE AGREGAR A LA LISTA DE PLATILLOS ASIGNAR UN ID A LA ETIQUETA A Y ASOCIAR UN EVENTO
    agregarPlatillo = (platillo) => {
        const tbody = this.tablaHTML.getElementsByTagName('tbody')[0];
        tbody.innerHTML += `
        <tr>
            <td>${platillo.tipo}</td>
            <td>${platillo.nombre}</td>
            <td class="moneda">${platillo.precio}</td>
            <td>
                <a href="#" onClick="ListaPlatillos_Control.onEditarPlatillo('Platillo')">Editar</a>
                <a href="#" id="eliminar${platillo.nombre.trim(' ')}">Eliminar</a>
            </td>
        </tr>
        `;
    }
}

export {ListaPlatillos_Vista};
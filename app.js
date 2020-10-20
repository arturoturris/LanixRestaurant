import { Restaurante } from './modelo/restaurante.js';
import {ListaPlatillos_Control} from './control/listaPlatillos_Control.js';
import {ListaPlatillos_Vista} from './vista/listaPlatillos_Vista.js';
import { Orden } from './modelo/orden.js';
import { Concepto } from './modelo/concepto.js';
import { Platillo } from './modelo/platillo.js';

const restaurante = new Restaurante();

//PLATILLOS INICIALES
restaurante.obtenerListaDePlatillos().agregarPlatillo(new Platillo('Carne','Hamburguesa',89.90));
restaurante.obtenerListaDePlatillos().agregarPlatillo(new Platillo('Pescado','Pescado frito',169.90));
restaurante.obtenerListaDePlatillos().agregarPlatillo(new Platillo('Aperitivo','Alitas a la diabla',80.00));
restaurante.obtenerListaDePlatillos().agregarPlatillo(new Platillo('Postre','Pastel de chocolate',69.80));


console.log("Restaurante platillos:",restaurante.obtenerListaDePlatillos());

const listaPlatillos_C = new ListaPlatillos_Control(new ListaPlatillos_Vista(document.querySelector('#listaPlatillos')),
                                                                       restaurante.obtenerListaDePlatillos());

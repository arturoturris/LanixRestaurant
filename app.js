import { Restaurante } from './modelo/restaurante.js';
import {ListaPlatillos_Control} from './control/listaPlatillos_Control.js';
import { Orden } from './modelo/orden.js';
import { Concepto } from './modelo/concepto.js';
import { Platillo } from './modelo/platillo.js';
import {Orden_Control} from './control/orden_Control.js';
import {Restaurante_Control} from './control/restaurante_Control.js';

const restaurante = new Restaurante();

//PLATILLOS INICIALES
restaurante.obtenerListaDePlatillos().agregarPlatillo(new Platillo('Carne','Solomillo de cerdo',189.90));
restaurante.obtenerListaDePlatillos().agregarPlatillo(new Platillo('Carne','Carne con papas',119.90));
restaurante.obtenerListaDePlatillos().agregarPlatillo(new Platillo('Pescado','Filete de pescado',130.90));
restaurante.obtenerListaDePlatillos().agregarPlatillo(new Platillo('Pescado','Sushi',89.90));
restaurante.obtenerListaDePlatillos().agregarPlatillo(new Platillo('Aperitivo','Canape',79.60));
restaurante.obtenerListaDePlatillos().agregarPlatillo(new Platillo('Aperitivo','Alitas a la diabla',140.40));
restaurante.obtenerListaDePlatillos().agregarPlatillo(new Platillo('Aperitivo','Sorpresa',80.20));
restaurante.obtenerListaDePlatillos().agregarPlatillo(new Platillo('Postre','Pastel de chocolate',69.80));
restaurante.obtenerListaDePlatillos().agregarPlatillo(new Platillo('Postre','Pay de queso',79.80));
restaurante.obtenerListaDePlatillos().agregarPlatillo(new Platillo('Postre','Helado de vainilla',59.80));

const listaPlatillos_C = new ListaPlatillos_Control(document.querySelector('#listaPlatillos'),restaurante.obtenerListaDePlatillos());
const restaurante_C = new Restaurante_Control(restaurante);
const orden_C = new Orden_Control(document.querySelector('#platillosOrden'), restaurante.obtenerListaDePlatillos(),restaurante.historialOrdenes);
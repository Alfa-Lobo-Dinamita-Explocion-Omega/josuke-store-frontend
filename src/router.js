// router.js
import { createRouter, createWebHistory } from 'vue-router';
import RegistroProducto from './pagesAdmin/RegistroProducto.vue';
import RegistroCliente from './pagesAdmin/RegistroCliente.vue';
import PaginaInicio from './pagesAdmin/PaginaInicio.vue';
import EditarProducto from './pagesAdmin/EditarProducto.vue';
import ComprarProductos from './pagesUser/ComprarProductos.vue';
import OrdenesClientes from './pagesAdmin/OrdenesClientes.vue';


const routes = [
  {
    path: '/RegistroCliente',
    name: 'RegistroCliente',
    component: RegistroCliente
  },
  {
    path: '/',
    name: 'PaginaInicio',
    component: PaginaInicio
  },
  {
    path: '/EditarProducto',
    name: 'EditarProducto',
    component: EditarProducto
  },
  {
    path: '/RegistroProducto',
    name: 'RegistroProducto',
    component: RegistroProducto
  },
  {
    path: '/ComprarProductos',
    name: 'ComprarProductos',
    component: ComprarProductos
  },
  {
    path: '/OrdenesClientes',
    name: 'OrdenesClientes',
    component: OrdenesClientes
  },

];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;

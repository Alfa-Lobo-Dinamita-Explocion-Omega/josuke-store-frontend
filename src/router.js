// router.js
import { createRouter, createWebHistory } from 'vue-router';
import RegistroProducto from './pages/RegistroProducto.vue';
import RegistroCliente from './pages/RegistroCliente.vue';
import PaginaInicio from './pages/PaginaInicio.vue';
import EditarProducto from './pages/EditarProducto.vue';

const routes = [
  {
    path: '/',
    name: 'RegistroCliente',
    component: RegistroCliente
  },
  {
    path: '/PaginaInicio',
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
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;

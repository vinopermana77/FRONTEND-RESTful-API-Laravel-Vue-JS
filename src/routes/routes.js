import EmployeeList from '../components/EmployeeList.vue';
import AddEmployee from '../components/AddEmployee.vue';
import EditEmployee from '../components/EditEmployee.vue';
import { createRouter, createWebHistory } from 'vue-router';

const routes = [
  {
    name: 'EmployeeList',
    path: '/',
    component: EmployeeList,
  },
  {
    name: 'AddEmployee',
    path: '/add_employee',
    component: AddEmployee,
  },
  {
    name: 'EditEmployee',
    path: '/employee/edit/:id?',
    component: EditEmployee,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;

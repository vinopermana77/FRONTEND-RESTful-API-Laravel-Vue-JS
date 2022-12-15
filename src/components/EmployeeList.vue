<template>
  <div class="container-lg">
    <h2 class="mt-3">Employee List</h2>
    <div class="mt-3">
      <router-link class="btn btn-primary" aria-current="page" to="add_employee"
        >Add Employee
        <span class="visually-hidden">(current)</span>
      </router-link>
    </div>
    <table class="table table-hover">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">NIK</th>
          <th scope="col">Name</th>
          <th scope="col">Email</th>
          <th scope="col">Gender</th>
          <th scope="col">Address</th>
          <th scope="col">Position</th>
          <th scope="col">Action</th>
        </tr>
      </thead>
      <tbody v-for="employee in employees" :key="employee.id">
        <tr class="table-content">
          <th scope="row">{{ employee.id }}</th>
          <td>{{ employee.nik }}</td>
          <td>{{ employee.name }}</td>
          <td>{{ employee.email }}</td>
          <td>{{ employee.gender }}</td>
          <td>{{ employee.address }}</td>
          <td>{{ employee.position }}</td>
          <td>
            <router-link :to="{ name: 'EditEmployee', params: { id: employee.id } }" class="btn btn-info btn-sm">Update</router-link>
            <a class="btn btn-danger btn-sm ms-2" @click.prevent="deleteEmployee(employee.id)">Delete</a>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'ContactList',
  data() {
    return {
      employees: Array,
    };
  },
  created() {
    this.getEmployees();
  },
  methods: {
    async getEmployees() {
      let url = 'http://127.0.0.1:8000/api/employees';
      await axios
        .get(url)
        .then((response) => {
          this.employees = response.data.employess;
          console.log(this.employees);
        })
        .catch((error) => {
          console.log(error);
        });
    },
    async deleteEmployee(id) {
      let url = `http://127.0.0.1:8000/api/delete/${id}`;
      await axios
        .delete(url)
        .then((response) => {
          if (response.data.code == 200) {
            alert(response.data.message);
            this.getEmployees();
          }
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
  mounted() {
    console.log('Employees List Component mounted');
  },
};
</script>

<style></style>

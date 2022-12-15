<template>
  <div class="container-lg">
    <h2 class="mt-3">Add Employee</h2>
    <div class="row">
      <div class="col-md-6">
        <div class="alert alert-danger mt-3" v-if="errors.length">
          <ul class="mb-0">
            <li v-for="(error, index) in errors" :key="index">
              {{ error }}
            </li>
          </ul>
        </div>
        <form @submit.prevent="saveEmployee" novalidate>
          <fieldset>
            <div class="form-group">
              <label class="form-label mt-3">NIK</label>
              <input type="text" class="form-control" v-model="employee.nik" placeholder="Enter NIK" />
            </div>
            <div class="form-group">
              <label class="form-label mt-3">Nama</label>
              <input type="text" class="form-control" v-model="employee.name" placeholder="Enter Nama" />
            </div>
            <!-- <div class="form-group">
              <label class="form-label mt-3">Email</label>
              <input type="email" class="form-control" v-model="employee.email" placeholder="Enter Email" />
            </div> -->
            <div class="form-group mt-3">
              <label for="exampleInputEmail1" class="form-label">Email address</label>
              <input type="email" class="form-control" id="exampleInputEmail1" v-model="employee.email" aria-describedby="emailHelp" placeholder="Enter Email" />
            </div>
            <div class="form-group">
              <label class="form-label mt-3">Gender</label>
              <select class="form-select" v-model="employee.gender">
                <option selected>--Gender--</option>
                <option value="L">Laki-Laki</option>
                <option value="P">Perempuan</option>
              </select>
            </div>
            <div class="mt-3">
              <label for="exampleFormControlTextarea1" class="form-label">Address</label>
              <textarea class="form-control" v-model="employee.address" rows="3" placeholder="Enter Address"></textarea>
            </div>
            <div class="form-group">
              <label class="form-label mt-3">Position</label>
              <input type="text" class="form-control" v-model="employee.position" placeholder="Enter Position" />
            </div>
            <button class="btn btn-primary mt-4">Submit</button>
            <a href="/" class="btn btn-info mt-4 ms-2">Back</a>
          </fieldset>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'AddEmployee',
  data() {
    return {
      employee: {},
      nik: '',
      name: '',
      email: '',
      gender: '',
      address: '',
      position: '',
      errors: [],
    };
  },
  methods: {
    async saveEmployee() {
      this.errors = [];
      if (!this.employee.nik) {
        this.errors.push('NIK is required');
      }
      if (!this.employee.name) {
        this.errors.push('Name is required');
      }
      if (!this.employee.email) {
        this.errors.push('Email is required');
      }
      if (!this.employee.gender) {
        this.errors.push('Gender is required');
      }
      if (!this.employee.address) {
        this.errors.push('Address is required');
      }
      if (!this.employee.position) {
        this.errors.push('Position is required');
      }

      if (!this.errors.length) {
        let formData = new FormData();
        formData.append('nik', this.employee.nik);
        formData.append('name', this.employee.name);
        formData.append('email', this.employee.email);
        formData.append('gender', this.employee.gender);
        formData.append('address', this.employee.address);
        formData.append('position', this.employee.position);
        let url = 'http://127.0.0.1:8000/api/create';
        await axios
          .post(url, formData)
          .then((response) => {
            console.log(response);
            if (response.status == 200) {
              this.employee.nik = '';
              this.employee.name = '';
              this.employee.email = '';
              this.employee.gender = '';
              this.employee.address = '';
              this.employee.position = '';
              alert(response.data.message);
            } else {
              console.log('error');
            }
          })
          .catch((error) => {
            this.error.push(error.response);
          });
      }
    },
  },
};
</script>

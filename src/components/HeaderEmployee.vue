<template>
  <nav class="navbar navbar-expand-lg navbar-dark">
    <div class="container-lg">
      <a class="navbar-brand fw-bold fs-3 text-white" href="#">{{ title }}</a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav ms-auto">
          <li class="nav-item">
            <router-link class="nav-link active" aria-current="page" to="/"
              >Home
              <span class="visually-hidden">(current)</span>
            </router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="add_employee">Add Employee</router-link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'HeaderEmployee',
  props: {
    title: String,
  },
};
</script>

<style>
.navbar {
  background-color: dodgerblue;
}
</style>

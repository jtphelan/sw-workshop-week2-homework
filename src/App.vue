<template>
  <div id="app">
    <b-navbar type="dark" variant="info">
      <b-navbar-brand href="#">Rick & Morty</b-navbar-brand>
      <b-navbar-nav class="ml-auto">
        <b-nav-item to="/">Episodes</b-nav-item>
        <!-- Populate navbar with more routes! -->
      </b-navbar-nav>
    </b-navbar>
    <b-container>
      <Episodes />
    </b-container>
  </div>
</template>

<script>
import Episodes from './views/Episodes.vue';
export default {
  components: {
    Episodes,
  },
};
</script>

<style>
.spinner {
  height: 500px;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>

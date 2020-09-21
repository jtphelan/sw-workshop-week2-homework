<template>
  <b-row>
    <div v-if="isLoading" class="spinner w-100">
      <b-spinner label="Spinning"></b-spinner>
    </div>
    <b-table v-else striped hover :items="episodes" :fields="fields"></b-table>
  </b-row>
</template>

<script>
import axios from 'axios';

axios.defaults.baseURL = 'https://rickandmortyapi.com/api/';

export default {
  data() {
    return {
      fields: ['id', 'name', 'air_date', 'episode'],
      episodes: [],
      isLoading: false,
    };
  },
  created() {
    this.isLoading = true;
    axios
      .get('/episode')
      .then((res) => {
        this.episodes = res.data.results;
      })
      .finally(() => {
        this.isLoading = false;
      });
  },
};
</script>

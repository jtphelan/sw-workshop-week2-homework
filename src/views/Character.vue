<template>
  <div class="py-3">
    <div v-if="isLoading" class="spinner w-100">
      <b-spinner label="Spinning"></b-spinner>
    </div>
    <b-row v-else>
      <b-col>
        <b-img :src="character.image" fluid alt="character.name"></b-img>
      </b-col>
      <b-col cols="8">
        <h2>{{ character.name }}</h2>
        <p>{{ character.gender }}, {{ character.species }}</p>
        <p>{{ character.status }}</p>
        <p>{{ character.location.name }}</p>
      </b-col>
    </b-row>
  </div>
</template>

<script>
import axios from 'axios';

axios.defaults.baseURL = 'https://rickandmortyapi.com/api/';
export default {
  data() {
    return {
      character: {},
      isLoading: false,
    };
  },
  created() {
    axios
      .get(`/character/1`) // replace 1 here with an actual character id
      .then((res) => {
        this.character = res.data;
      })
      .finally(() => {
        this.isLoading = false;
      });
  },
};
</script>

<style></style>

<template>
  <div>
    <h1>{{count}}</h1>
    <button @click="increment">+</button>
    <button @click="decrement">-</button>
    <button @click="reset">R</button>
  </div>
</template>

<script>
import * as types from './store/mutation-types';

export default {
  methods: {
    increment() {
      this.$store.dispatch(types.INCREMENT);
    },
    decrement() {
      this.$store.dispatch(types.DECREMENT);
    },
    reset() {
      this.$store.dispatch(types.RESET);
    },
  },
  computed: {
    count() {
      return this.$store.getters.count;
    },
  },
};
</script>

<style>

</style>

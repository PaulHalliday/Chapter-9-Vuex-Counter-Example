<template>
  <div>
    <h1>{{count}}</h1>
    <button @click="increment">+</button>
    <button @click="decrement">-</button>
  </div>
</template>

<script>
export default {
  methods: {
    increment() {
      this.$store.commit('increment', this.count);
    },
    decrement() {
      this.$store.commit('decrement', this.count);
    },
  },
  computed: {
    count() {
      return this.$store.state.count;
    },
  },
};
</script>

<style>

</style>

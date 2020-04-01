<template>
  <div>
    <h1>Counter!!!</h1>
    <p>{{count}}</p>
    <button @click="incrementBy({amount:1.12})">+</button>
    <button @click="decrement">-</button>
    <button @click="zero">zero</button>
  </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex';
export default {
  name: 'Counter',
  computed: mapState(['count']),
  methods: mapMutations(['increment', 'incrementBy', 'decrement', 'zero'])
};
</script>

<style scoped>
</style>
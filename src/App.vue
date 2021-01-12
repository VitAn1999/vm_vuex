<template>
  <div id="app" class="container text-center pt-5">
    <h1>{{ title }}</h1>
    <app-counter></app-counter>
    <app-second-counter></app-second-counter>
    <app-actions></app-actions>
  </div>
</template>

<script>
import Counter from "./Counter";
import Actions from "./Actions";
import SecondCounter from "./SecondCounter";


export default {
  name: 'app',
  components: {
    appCounter: Counter,
    appSecondCounter: SecondCounter,
    appActions: Actions
  },
  computed: {
    title() {
      return this.$store.getters.title
    }
  }
}
</script>

<style>

</style>

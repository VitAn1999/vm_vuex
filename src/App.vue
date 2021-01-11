<template>
  <div id="app" class="container text-center pt-5">
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
  }
}
</script>

<style>

</style>

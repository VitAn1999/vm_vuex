<template>
  <div id="app" class="container text-center pt-5">
    <app-counter></app-counter>
    <app-actions></app-actions>
  </div>
</template>

<script>
import Counter from "./Counter";
import Actions from "./Actions";


export default {
  name: 'app',
  components: {
    appCounter: Counter,
    appActions: Actions
  }
}
</script>

<style>

</style>

<template>
  <div class="col">
    <h1>Counter: {{ counter }}</h1>
  </div>
</template>

<script>
  export default {
    name: "SecondCounter",
    computed: {
      counter() {
        return this.$store.getters.computedCounter
      }
    }
  }
</script>

<style scoped>

</style>


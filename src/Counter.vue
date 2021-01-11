<template>
    <div class="col">
      <h1>Counter: {{ counter }}</h1>
    </div>
</template>

<script>
    export default {
      name: "Counter",
      computed: {
        counter() {
          return this.$store.state.counter
        }
      }
    }
</script>

<style scoped>

</style>

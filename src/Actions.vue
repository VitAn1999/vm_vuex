<template>
    <div class="col">
      <button @click="changeCount(1)" class="btn btn-success">Plus</button>
      <button @click="changeCount(-1)" class="btn btn-danger">Minus</button>
    </div>
</template>

<script>
    export default {
      name: "Actions",
      methods: {
        changeCount(val) {
          this.$store.commit('changeCounter', val)
        }
      }
    }
</script>

<style scoped>

</style>

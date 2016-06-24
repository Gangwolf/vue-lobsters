<template>
  <div class="row">
    <div class="col-sm-6 col-sm-offset-2">
      <label for="query" transition>Search:</label>
      <input v-model="query" transition>
    </div>
  </div>
</template>

<script>
export default {
  props: ['query']
};
</script>
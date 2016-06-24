<template>
  <div id="data-view-item" class="row" transition>
    <div class="col-sm-6 col-sm-offset-2">
      <h1><a class="title-link" :href="data.url">{{ data.title }}</a></h1>
      <!-- details and summary tags seem to only work on Chrome :( -->
      <span class="description" v-if="data.description">
        <details><summary>Description:</summary>{{{ data.description }}}</details>
      </span>
      <img class="avatar" :src="data.submitter_user.avatar_url"></img>
      <span class="username" :title="data.submitter_user.about">
        {{ data.submitter_user.username }}
      </span>
      <span class="created_at">
        -&nbsp;created at:&nbsp;<time>{{ data.submitter_user.created_at }}</time>
      </span>
    </div>
  </div>  
</template>

<script>
export default {
  props: ['data']
};
</script>

<style scoped>

h1 {
  font-weight: 200;
  font-size: 1.15em;
}

.title-link {
  text-decoration: none;
}

.description {
  font-family: Arial, Helvetica, sans-serif;
}

.avatar {
  vertical-align: middle;
  width: 1em;
  border-radius: 4em;
}

.v-transition {
  transition: all .5s ease-out;
  overflow: hidden;
}
.v-enter, .v-leave {
  opacity: 0;
  height: 0;
}
</style>
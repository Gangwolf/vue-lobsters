<template>
  <div id="newest">
    <search :query.sync="query"></search>
  </div>
  <div v-if="!loaded">
    <div class="col-sm-6 col-sm-offset-3"><br />Loading...</div>
  </div>
  <div v-if="loaded">
    <data-view v-for="data of dataTray | filterBy query in 'title'" :data="data" track-by="short_id"></data-view>
    <div class="col-sm-6 col-sm-offset-2 buttons">
      <button v-show="showBackButton" @click="turnPage('newest', 'backward')">Back</button>
      <button @click="turnPage('newest', 'forward')">Next</button>
    </div>
  </div>
</template>

<script>
import gaff, { pageNumber } from '../mixins/deckHand.js';
import Search from './Search.vue';
import DataView from './DataView.vue';

export default {
  mixins: [gaff],
  components: {
    Search,
    DataView
  },
  ready() {
    this.getJSON('newest', pageNumber);
  }
};
</script>
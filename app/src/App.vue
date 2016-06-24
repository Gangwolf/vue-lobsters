<template>
  <div id="app" class="container">
    <div class="row">
      <div class="col-sm-6 col-sm-offset-2">
        <h1>A simple lobster client</h1>
        <nav>
          <a v-link="{ name: 'newest' }">Go to /newest</a>&nbsp;
          <a v-link="{ name: 'hottest' }">Go to /hottest</a>
        </nav>
      </div>
    </div>
    <router-view></router-view>
    <div class="row">
      <div class="col-sm-6 col-sm-offset-2">
        <footer>Code: <a href="https://github.com/Gangwolf/vue-lobsters">ℵₒ</a></footer>
      </div>
    </div>
  </div>
</template>

<style src="main.css"></style>

<template>
  <div class="content">
    <Header />
    <router-view />
  </div>
</template>

<script>
import Header from './components/Header';

export default {
  name: 'app',
  components: {
    Header
  }
}
</script>

<style>
  body {
    background: #EEEEEE;
    font-family: Arial, Helvetica, sans-serif;
    line-height: 1.6;
  }

  .content {
    margin-bottom: 40px;
  }

  a {
    color: #fff;
    text-decoration: none;
  }

  ul {
    list-style: none;
  }

  .btn {
    color: #fff !important;
  }
</style>

<template>
  <div class="container">
    <header>
      <img :src="image" class="img-fluid" alt="Heroku Logo">
    </header>
  </div>
</template>

<script>
export default {
  name: 'Header',
  data() {
    return {
      image: require('@/assets/heroku.png')
    }
  }
}
</script>

<style scoped>
  img {
    width: 300px;
  }

  @media (max-width: 700px) {
    img {
      display: block;
      margin: auto;
    }
  }
</style>>


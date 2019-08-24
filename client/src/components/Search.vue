<template>
  <section class="container">
    <div class="welcome fluid">
      <div class="container text-center">
        <h1 class="display-4">Query game servers!</h1>
        <p class="lead">This web-app is build with Vue.js & Bootstrap as the frontend, Node.JS & Express.js as the backend.</p>
        <p class="lead">Below you'll be able to query different game servers from many of Valve's games.</p>
      </div>
    </div>
    <div class="search">
      <form v-on:submit.prevent="onSubmit">
        <div class="form-group">
          <label for="type">Select the game type.</label>
          <select class="form-control" name="type" id="type" v-model="type">
            <option value="tf2">Team Fortress 2</option>
            <option value="csgo">Counter-Strike: Global Offensive</option>
            <option value="css">Counter-Strike: Source</option>
            <option value="left4dead">Left 4 Dead 2</option>
          </select>
        </div>
        <div class="form-group">
          <label for="host">Enter a host address.</label>
          <input class="form-control" type="text" name="text" id="host" placeholder="Example: 74.91.112.61" v-model="host">
        </div>
        <div class="form-group">
          <label for="query_port">Enter a host port.</label>
          <input class="form-control" type="text" name="text" id="query_port" placeholder="Example: 27015" v-model="query_port">
        </div>
        <div class="form-group">
          <input type="submit" value="Query Server" class="btn btn-success">
        </div>
      </form>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Search',
  data() {
    return {
      type: 'tf2',
      host: '',
      query_port: ''
    }
  },
  methods: {
    onSubmit() {
      //Check if the user has entered the required query details
      if(!this.host) {
        this.$toasted.show('Please enter a host address.', {
          duration: 3000,
          icon: 'exclamation-circle'
        });
      } else if(!this.query_port) {
        this.$toasted.show('Please enter a host port.', {
          duration: 3000,
          icon: 'exclamation-circle'        
        });
      } else {
        //Redirect the user
        this.$router.push(`/server/${this.type}/${this.host}/${this.query_port}`);
      }
    }
  }
}
</script>

<style scoped>
  .welcome {
    padding: 1rem 1rem;
  }

  .fluid {
    padding-right: 0;
    padding-left: 0;
    border-radius: 0;
  }

  .btn {
    width: 100%;
    margin-top: 1rem;
  }

  .search {
    background: rgba(0, 0, 0, 0.05);
    border: 5px #ffffff solid;
    margin-top: 1rem;
    padding: 2rem; 
  }
</style>
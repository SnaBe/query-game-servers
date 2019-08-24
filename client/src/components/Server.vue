<template>
  <section>
    <div v-if="loading" class="text-center">
      <div class="spinner-border" role="status">
        <span class="sr-only">Loading server details...</span>
      </div>
    </div>
    <div v-if="error">
      <div class="container">
        <h1>{{error}}</h1>
        <router-link class="btn btn-primary" to="/">Go back</router-link>
      </div>
    </div>
    <div v-if="serverData">
      <div class="server-details">
        <img class="game-logo" :src="`/img/logos/${serverData.raw.steamappid}.png`" alt="Game Logo">
        <div class="container">
          <h1>{{serverData.name}}</h1>
          <h2>{{serverData.query.pretty}}</h2>
          <div class="row justify-content-around">
            <div class="col-md-4">
              <div class="left">
                <p><span>Current map: </span>{{serverData.map}}</p>
                <p><span>Address: </span>{{serverData.query.host}}</p>
                <p><span>Port: </span>{{serverData.query.port_query}}</p>
                <p><span>Current players: </span>{{serverData.raw.numplayers}} / {{serverData.maxplayers}} | {{serverData.raw.numbots}} Bots</p>
              </div>
            </div>
            <div class="col-md-4">
              <div class="right">
                <p><span>Server type: </span>Dedicated <i class="fas fa-server" style="color: steelblue;"></i></p>
                <p><span>Server staus: </span>Active <i class="fas fa-check" style="color: green;"></i></p>
                <p v-if="serverData.raw.secure"><span>VAC: </span>Secure <i class="fas fa-shield-alt" style="color: green;"></i></p>
                <p v-else><span>VAC: </span>Un-Secure <i class="fas fa-shield-alt" style="color: red;"></i></p>
                <p v-if="serverData.password"><span>Password: </span>Yes <i class="fas fa-lock" style="color: red;"></i></p>
                <p v-else><span>Password: </span>No <i class="fas fa-lock-open" style="color: green;"></i></p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="container">
        <div class="divider">
          <h4>Below is a list of the server's current players.</h4>
          <p><strong>Note: </strong>The list is sorted by the player(s) who have been on the server for the longest time.</p>
        </div>
        <table class="table table-bordered table-hover">
          <thead>
            <tr>
              <th class="player-names" scope="col"><small>Player name</small></th>
              <th class="game-score text-center" scope="col"><small>Score</small></th>
              <th class="play-time" scope="col"><small style="float: right;">Time on server</small></th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="player in serverData.players" :key="player.name">
              <td class="player-name">{{player.name}}</td>
              <td class="player-score text-center"><span>{{player.score}}</span></td>
              <td class="player-time"><span style="float: right;">{{player.time}}</span></td>     
            </tr>
          </tbody>
        </table>
        <div class="divider">
          <p>You can join the server directly by clicking the button below.</p>
          <a class="btn btn-success" :href="`steam://connect/${serverData.query.host}:${serverData.query.port_query}`">Join Server</a>
        </div>
        <router-link class="btn btn-primary" to="/">Go back</router-link>
      </div>
    </div>
  </section>
</template>

<script>
import axios from 'axios';

export default {
  name: 'Server',
  data() {
    return {
      loading: false,
      error: null,
      serverData: null
    }
  },
  async created() {
    this.loading = true;
    //Make a request to our backend
    try {
      const response = await axios.get(`/api/v1/server/${this.$route.params.type}/${this.$route.params.host}/${this.$route.params.query_port}`);
      //Server data
      this.serverData = response.data;
      //No longer loading
      this.loading = false;
    } catch (err) {
      this.loading = false;
      //The error response
      this.error = err.response.data.message;
    }
  }
}
</script>

<style scoped>
  .server-details {
    background-color: #0F1012;
    color: #EAEAEA;
    padding: 25px 0;
  }

  .divider {
    margin: 30px 0;
    text-align: center;
  }

  .game-logo {
    position: absolute;
    right: 0;
    left: 0;
    margin: auto;
    height: 256px;
    opacity: 0.1;
  }

  .server-details h1 {
    font-size: 1.8rem;
    color: #fff;
    padding: 10px;
    margin: 0;
    text-align: center;
  }

  .server-details h2 {
    font-size: 1.2rem;
    color: #fff;
    padding: 10px 25px;
    text-align: center;
  }

  .server-details span {
    color: gray;
  }

  .right {
    float: right;
    text-align: right;
  }

  .left {
    float: left;
  }

  @media screen and (max-width: 414px) {
    .left, .right {
      float: none;
      text-align: center;
    }
    .table .play-time, .player-time {
      display: none;
    }
  }
</style>
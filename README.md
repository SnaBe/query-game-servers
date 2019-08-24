# Query Valve Game Servers
> Full stack Vue.js / Express.js app using the Gameserver Query API to query game servers from Valve games.

## General information

A responsive Vue.js / Express.js web application for querying game servers, build with Vue.js & Bootstrap as the frontend, Node.JS & Express.js as the backend.

The web application allows you to query different game servers from many of Valve's games, including Team Fortress 2, Counter-Strike: Global Offensive & Left 4 Dead 2.

The app is currently running over at [herokuapp.com](https://query-game-servers.herokuapp.com/).

## Getting started for developers

Register and get your API key from
https://rapidapi.com/millyvanilly/api/gameserver-query

Add the API Key to _config.env_

```bash
# Install Express dependencies
npm install

# Install Vue dependencies
cd client
npm install

# Serve
cd ..
npm run dev

# Build for production
cd client
npm run build
# Gets put in /public
```

### Version

1.0.0

### License

This project is licensed under the MIT License.

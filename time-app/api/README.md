# api

API for the Time App

## Project Setup

```sh
npm install
```

### Run with Hot-Reload for Development

```sh
npm run dev
```

### Run in Production

```sh
npm start
```

docker build . -t time-app-back
docker run -p 5000:5000 time-app-back

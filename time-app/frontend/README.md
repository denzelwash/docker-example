# frontend

Frontend for the Time App

## Project Setup

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Compile and Minify for Production

```sh
npm run build
```

docker build . -t time-app-front
docker run -p 3000:3000 time-app-front

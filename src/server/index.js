import Koa from 'koa';
// import convert from 'koa-convert';
import Router from 'koa-router';
import Vue from 'vue';
import { createRenderer } from 'vue-server-renderer';
import Home from '../pages/Home';

const app = new Koa();
const router = new Router();

app.use(require('koa-static')('./public'));

const vm = new Vue({
  // ...Home
  el: '#app',
  render: h => h(Home)
});

const renderer = createRenderer();

router.get('*', (ctx) => {
  renderer.renderToString(vm, (err, html) => {
    if (err) throw err;

    ctx.body = `
      <!DOCTYPE html>
      <html lang="en">
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta http-equiv="X-UA-Compatible" content="ie=edge">
        <title>Vue SSR Starter</title>
      </head>
      <body>
        hello vue ssr
        <div id="app">${html}</div>
        <script src="./index.js"></script>
      </body>
      </html>`;
  });
});

app.use(router.routes());
app.use(router.allowedMethods);

app.listen(3000);

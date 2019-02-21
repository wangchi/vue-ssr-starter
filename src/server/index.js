import Koa from 'koa';
import Router from 'koa-router';
import render from './render';

const app = new Koa();
const router = new Router();

app.use(require('koa-static')('./public'));

router.get('*', (ctx) => {
  render(ctx);
});

app.use(router.routes());
app.use(router.allowedMethods);

app.listen(3000);

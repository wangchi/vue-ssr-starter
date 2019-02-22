import Koa from 'koa';
import Router from 'koa-router';
import render from './render';

const app = new Koa();
const router = new Router();

app.use(require('koa-static')('./public'));

router.get('/api/newslist', (ctx) => {
  ctx.body = {
    code: 0,
    data: [
      { id: '001', title: 'news 001' },
      { id: '002', title: 'news 002' },
    ]
  };
});

router.get('*', async (ctx) => {
  await render(ctx);
});

app.use(router.routes());
app.use(router.allowedMethods);

app.listen(3000);

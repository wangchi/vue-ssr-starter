import { createRenderer } from 'vue-server-renderer';
import appInstance from './appInstance';

const renderer = createRenderer({
  template: `
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <meta http-equiv="X-UA-Compatible" content="ie=edge">
      {{{ meta }}}
      <title>{{ title }}</title>
    </head>
    <body>
      hello vue ssr
      <!--vue-ssr-outlet-->
    </body>
    </html>
  `
});

const context = {
  title: 'Vue SSR Starter',
  meta: `
    <meta name="description" content="Vue Server Side Renderer Starter"/>
  `
};


const render = (ctx) => {
  return appInstance({ url: ctx.url }).then((app) => {
    renderer.renderToString(app, context, (err, html) => {
      if (err) {
        if (err.code === 404) {
          ctx.status = 404;
          ctx.body = 'Page Not Found';
        } else {
          ctx.status = 500;
          ctx.body = 'Internal Server Error';
        }
      } else {
        // console.log(html);
        ctx.body = html;
      }
    });
  });
};

export default render;

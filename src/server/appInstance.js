import { createApp } from '../main.js';

export default context => {
  return new Promise((resolve, reject) => {
    const { app, router, store } = createApp();

    router.push(context.url);

    router.onReady(() => {
      const matchedComponents = router.getMatchedComponents();

      if (!matchedComponents.length) {
        return reject({ code: 404 });
      }

      // console.log(matchedComponents);

      const promises = [];

      matchedComponents.forEach(item => {
        if (item.asyncData) {
          promises.push(item.asyncData({ store, route: router.currentRoute }));
        }
      });

      // resolve(app);

      Promise.all(promises).then(() => {
        // console.log(store.state);
        context.state = store.state;
        resolve(app);
      }).catch(err => {
        console.log(err);
        reject(err);
      });

    }, reject);

  });
};

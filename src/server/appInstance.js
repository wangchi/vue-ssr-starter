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
        if (item.loadData) {
          promises.push(item.loadData({ store, route: router.currentRoute }));
        }
      });

      Promise.all(promises).then(() => {
        // console.log(store.state);
        resolve({ app, state: store.state });
      }).catch(err => {
        console.log(err);
        reject(err);
      });

    }, reject);

  });
};

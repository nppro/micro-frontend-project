// import('./bootstrap');
import('./bootstrap').then(({ mount }) => {
  const localRoot = document.getElementById('shop-local');
  console.log(localRoot);

  mount({
    mountPoint: localRoot!,
    routingStrategy: 'browser',
  });
});

export {};

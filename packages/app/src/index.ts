// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore // Types aren't working for this :(
import App from './App.svelte';

const app = new App({
  target: document.getElementById('app'),
});

export default app;

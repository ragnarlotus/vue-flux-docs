> nuxt.config.js

```js
   ...
   plugins: [{
      src: '~/node_modules/vue-flux', ssr: false
   }],
   build: {
      vendor : ['vue-flux'],
   ...
```

> index.vue

```js
let VueFlux;
let Transitions;

if (process.browser) {
   const VF = require('vue-flux');
   VueFlux = VF.VueFlux;
   Transitions = VF.Transitions;
}

export default {
   components: {
      VueFlux
   },

   data: () => ({
      fluxOptions: {
         autoplay: false
      },
      fluxImages: [
         'https://source.unsplash.com/random',
         'https://source.unsplash.com/random',
         'https://source.unsplash.com/random'
      ],
      fluxTransitions: Transitions
   })
}
```

Additionally wrap component in which you have vue-flux with `<no-ssr>` tag.
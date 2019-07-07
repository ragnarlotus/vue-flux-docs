---
---

Edit the nuxt config to let it know not to SSR and to add it as vendor.

> nuxt.config.js

```js
   ...
   plugins: [{
      src: '~/node_modules/vue-flux',
      ssr: false,
   }],

   build: {
      vendor : [
         'vue-flux'
      ],
   ...
```

Then wrap the `<vue-flux>` component with `<no-ssr>` to indicate nuxt what not to SSR in template and import vue-flux when its run in the browser.

> gallery.vue

``` html
<no-ssr>
   <vue-flux>...</vue-flux>
</no-ssr>
```

```js
let VueFlux;

if (process.browser) {
   const vf = require('vue-flux');
   VueFlux = vf.VueFlux;
}

export default {
   components: {
      VueFlux,
   },

   ...
}
```

---
next: components/
---

# SSR with Nuxt

> nuxt.config.js

Edit the nuxt config to let it know not to SSR and to add it as vendor.

```js
   ...
   plugins: [{
      src: '~/node_modules/vue-flux',
      ssr: false,
   }],

   build: {
      vendor : [ 'vue-flux' ],
   ...
```

> component.vue

Then wrap the `<vue-flux>` component with `<no-ssr>` to indicate nuxt what not to SSR in template.

``` html
<no-ssr>
   <vue-flux>...</vue-flux>
</no-ssr>
```

Import vue-flux component only when its run in the browser.

```js
let VueFlux;

if (process.browser) {
   const vf = require('vue-flux');
   VueFlux = vf.VueFlux;
}

export default {
   ...
   components: {
      VueFlux,
   },
   ...
}
```

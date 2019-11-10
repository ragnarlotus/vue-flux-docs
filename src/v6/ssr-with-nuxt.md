---
next: components/
---

# SSR with Nuxt

This version is friendlier to SSR because now, the package comes with an SSR version ready.

> component.vue

Wrap the `<vue-flux>` where you want to use it with `<client-only>` tags.

``` html
<client-only>
   <vue-flux>...</vue-flux>
</client-only>
```

Import vue-flux components from the SSR version package.

Because the SSR version does not allow to include CSS in the package, you will have to import it also.

You can import the CSS in the component where you will use the slider, or in any preprocessed CSS file like SASS or Stylus

```js
import {
  VueFlux,
  FluxControls,
} from 'vue-flux/dist-ssr/vue-flux.umd.min.js';

import 'vue-flux/dist-ssr/vue-flux.css';

export default {
   ...
   components: {
      VueFlux,
      FluxControls,
   },
   ...
}
```

---
next: resources/
---

# SSR with Nuxt

Wrap the `<VueFlux>` where you want to use it with `<ClientOnly>` tags.

``` html
<ClientOnly>
   <VueFlux>...</VueFlux>
</ClientOnly>
```

Don't forget to import the CSS in the component where you will use the slider, or in any preprocessed CSS file like SASS or Stylus

```js
import {
  VueFlux,
  FluxControls,
} from 'vue-flux';

import 'vue-flux/vue-flux.css';
```

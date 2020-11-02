---
---

## Description

It is a default component to display an index of all images so it is a good resource when the slider contains many images.

You can place it inside the vue-flux component or outside and give it any style you want, meaning horizontal, vertical, with arrows, with scroll, etc. The default style is only applied if located inside and can be easily overwritten.

The slot can be used with custom index component.

## Component

It will display a button when no transition is active and mouse over. Will not be displayed in touchable screens but will appear dragging up inside the slider.

The index will auto hide after choosing an image with default styles.

The current image will have class current.

Placing the mouse over will display de caption if defined.

The component can have the following attributes.

| Attribute | Type | Required | Description |
|-----------|------|----------|-------------|
| slider | Object | false | The VueFlux component |

#### Example of index inside vue-flux
``` html
<vue-flux :options="fluxOptions" :images="fluxImages" :transitions="fluxTransitions">
    <flux-index slot="index"></flux-index>
</vue-flux>
```

``` js
import { VueFlux, FluxIndex, Transitions } from 'vue-flux';

export default {
   components: {
      VueFlux,
      FluxIndex
   },

   data: () => ({
      fluxOptions: {
         autoplay: true
      },
      fluxImages: [ 'URL1', 'URL2', 'URL3' ],
      fluxTransitions: Transitions
   })
}
```

#### Example of index outside vue-flux
``` html
<vue-flux
   :options="fluxOptions"
   :images="fluxImages"
   :transitions="fluxTransitions"
   ref="slider">
</vue-flux>

<flux-index v-if="mounted" :slider="$refs.slider"></flux-index>
```

``` js
import { VueFlux, FluxIndex, Transitions } from 'vue-flux';

export default {
   components: {
      VueFlux,
      FluxIndex
   },

   data: () => ({
      mounted: false,
      fluxOptions: {
         autoplay: true
      },
      fluxImages: [ 'URL1', 'URL2', 'URL3' ],
      fluxTransitions: Transitions
   }),

   mounted() {
      this.mounted = true;
   }
}
```

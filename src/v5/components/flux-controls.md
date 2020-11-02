---
---

## Description

It is a default component to display controls with buttons to display previous, next, play and pause.

The slot can be overwritten with custom controls.

## Component

It will display the buttons when no transition is active and mouse over. Will not be displayed in touchable screens.

The component can have the following attributes.

| Attribute | Type | Required | Description |
|-----------|------|----------|-------------|
| slider | Object | false | The VueFlux component |

#### Example of controls inside vue-flux
``` html
<vue-flux :options="fluxOptions" :images="fluxImages" :transitions="fluxTransitions">
    <flux-controls slot="controls"></flux-controls>
</vue-flux>
```

``` js
import { VueFlux, FluxControls, Transitions } from 'vue-flux';

export default {
   components: {
      VueFlux,
      FluxControls
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

#### Example of controls outside vue-flux
``` html
<vue-flux
   :options="fluxOptions"
   :images="fluxImages"
   :transitions="fluxTransitions"
   ref="slider">
</vue-flux>

<flux-controls v-if="mounted" :slider="$refs.slider"></flux-controls>
```

``` js
import { VueFlux, FluxControls, Transitions } from 'vue-flux';

export default {
   components: {
      VueFlux,
      FluxControls
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

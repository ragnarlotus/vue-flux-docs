---
---

# FluxPagination

## Description

It is a default component to diplay a pagination of the images, good when it does not contain too many images.

## Attributes

The component can have the following attributes.

| Attribute | Type | Required | Description |
|-----------|------|----------|-------------|
| slider | Object | false | The VueFlux component |

#### Example of pagination inside vue-flux
``` html
<vue-flux :options="fluxOptions" :images="fluxImages" :transitions="fluxTransitions">
    <flux-pagination slot="pagination"></flux-pagination>
</vue-flux>
```

``` javascript
import { VueFlux, FluxPagination, Transitions } from 'vue-flux';

export default {
   components: {
      VueFlux,
      FluxPagination
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

#### Example of pagination outside vue-flux
``` html
<vue-flux
   :options="fluxOptions"
   :images="fluxImages"
   :transitions="fluxTransitions"
   ref="slider">
</vue-flux>

<flux-pagination v-if="mounted" :slider="$refs.slider"></flux-pagination>
```

``` javascript
import { VueFlux, FluxPagination, Transitions } from 'vue-flux';

export default {
   components: {
      VueFlux,
      FluxPagination
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

## Templating

To use custom pagination you can do it using pagination slot of [VueFlux](components/vue-flux) component. Check [FluxPagination](complements/flux-pagination) documentation for further information about `itemProp` element.

#### Custom component

``` html
<vue-flux
   :images="vfImages"
   :transitions="vfTransitions"
   ref="slider">

   <template v-slot:pagination>
      <flux-pagination v-slot="itemProps">
         <custom-pagination item="itemProps"></custom-pagination>
      </flux-pagination>
   </template>
</vue-flux>
```

#### Custom structure

This is an example with [Font Awesome](https://fontawesome.com/) icons.

``` html
<vue-flux
   :images="vfImages"
   :transitions="vfTransitions"
   ref="slider">

   <template v-slot:pagination>
      <flux-pagination v-slot="itemProps">
         <i class="fas"
            :class="itemProps.active? 'fa-check-square' : 'fa-square'"
            @click="itemProps.onClick(itemProps.index)">
         </i>
      </flux-pagination>
   </template>
</vue-flux>
```

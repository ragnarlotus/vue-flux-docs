---
next: false
---

# FluxPreloader

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

Spinner is located inside the [FluxPreloader](complements/flux-preloader) complement, so to use custom spinner you will have to use the spinner slot of the [FluxPreloader](components/complements/flux-preloader) component.

#### Custom component

``` html
<vue-flux
   :images="vfImages"
   :transitions="vfTransitions"
   ref="slider">

   <template v-slot:preloader>
      <flux-preloader>
         <template v-slot:spinner>
            <custom-spinner></custom-spinner>
         </template>
      </flux-preloader>
   </template>
</vue-flux>
```

#### Custom structure

This is an example with [Font Awesome](https://fontawesome.com/) spinner.

``` html
<vue-flux
   :images="vfImages"
   :transitions="vfTransitions"
   ref="slider">

   <template v-slot:preloader>
      <flux-preloader>
         <template v-slot:spinner>
            <div class="fa-3x">
               <i class="fas fa-spinner fa-spin"></i>
            </div>
         </template>
      </flux-preloader>
   </template>
</vue-flux>
```

---
---

## Installation

Installation is very simple, just use your favourite package manager:

``` bash
npm install --save vue-flux@5.1.9
```

## Usage

In your code just add the component in the template.

``` html
<vue-flux
   :options="fluxOptions"
   :images="fluxImages"
   :transitions="fluxTransitions"
   ref="slider">
      <flux-pagination slot="pagination"></flux-pagination>
</vue-flux>

<button @click="$refs.slider.show('next')">NEXT</button>
```

And the data that will be used in the template.

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
      fluxImages: [
         'URL1',
         'URL2',
         'URL3'
      ],
      fluxTransitions: {
         transitionBook: Transitions.transitionBook
      }
   })
}
```

If you want to see more details about configuration check the [VueFlux](components/vue-flux) component documentation.

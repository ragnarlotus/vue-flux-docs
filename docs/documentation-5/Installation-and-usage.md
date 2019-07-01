## Installation

Installation is very simple, just use npm like this:

``` bash
npm install --save vue-flux
```

## Usage

In your code just add the component in HTML and javascript section.


``` html
<vue-flux
   :options="fluxOptions"
   :images="fluxImages"
   :transitions="fluxTransitions"
   ref="slider">
      <flux-pagination slot="pagination"></flux-pagination>
</vue-flux>

<button @click="$refs.slider.showImage('next')">NEXT</button>
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
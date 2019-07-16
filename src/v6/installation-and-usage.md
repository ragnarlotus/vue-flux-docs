---
---

# Installation and usage

## Installation

Installation is very simple, just use your favourite package manager:

``` bash
npm install --save vue-flux@beta
```

## Usage

Add the component to the template. This one has all the complements, so you can remove the ones you don't want.

``` html
<vue-flux
   :options="vfOptions"
   :images="vfImages"
   :transitions="vfTransitions"
   :captions="vfCaptions"
   ref="slider">

   <template v-slot:preloader>
      <flux-preloader />
   </template>

   <template v-slot:caption>
      <flux-caption />
   </template>

   <template v-slot:controls>
      <flux-controls />
   </template>

   <template v-slot:pagination>
      <flux-pagination />
   </template>

   <template v-slot:index>
      <flux-index />
   </template>
</vue-flux>

<button @click="$refs.slider.showImage('next')">NEXT</button>
```

Add it to the component, and like before you can remove the complements you don't use.

``` javascript
import {
   VueFlux
   FluxCaption,
   FluxControls,
   FluxIndex,
   FluxPagination,
   FluxPreloader
} from 'vue-flux';

export default {
   components: {
      VueFlux,
      FluxCaption,
      FluxControls,
      FluxIndex,
      FluxPagination,
      FluxPreloader,
   },

   data: () => ({
      vfOptions: {
         autoplay: true
      },
      vfImages: [ 'URL1', 'URL2', 'URL3' ],
      vfTransitions: [ 'fade', 'cube', 'book', 'wave' ],
      vfCaptions: [
         'Caption for image 1',
         'Caption for image 2',
         'Caption for image 3',
      ],
   }),
}
```

If you want to see more details about options, check the [VueFlux](components/vue-flux) component documentation.

---
---

# FluxControls

## Description

The included component to diplay controls with the buttons previous, next, play and pause.

## Attributes

### slider

Is the VueFlux instance component from which to read the captions.

If you place this complement as a direct child in the VueFlux component you don't need to pass this attribute.

- **Type:** `VueFlux`
- **Required:** `false`

#### Example of controls inside vue-flux

``` html
<vue-flux
   :options="vfOptions"
   :images="vfImages"
   :transitions="vfTransitions">

   <template v-slot:controls>
      <flux-controls />
   </template>
</vue-flux>
```

``` js
import {
   VueFlux,
   FluxControls
} from 'vue-flux';

export default {
   components: {
      VueFlux,
      FluxControls,
   },

   data: () => ({
      vfOptions: {
         autoplay: true
      },
      vfImages: [ 'URL1', 'URL2', 'URL3' ],
      vfTransitions: [ 'fade', 'slide' ],
   }),
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

<flux-controls v-if="mounted" :slider="$refs.slider" />
```

``` js
import {
   VueFlux,
   FluxControls,
} from 'vue-flux';

export default {
   components: {
      VueFlux,
      FluxControls,
   },

   data: () => ({
      mounted: false,
      vfOptions: {
         autoplay: true,
      },
      vfImages: [ 'URL1', 'URL2', 'URL3' ],
      vfTransitions: [ 'fade', 'slide' ],
   }),

   mounted() {
      this.mounted = true;
   },
}
```

## Properties

### vf

The `VueFlux` instance component.

- **Type:** `VueFlux`

### display

Will return `true` if the slider is loaded and mouse moved over.

- **Type:** `Boolean`

### captions

The array of captions passed originally to the VueFlux component.

- **Type:** `Array`

### currentTransition

Is the transition component name being run.

When no transition running the value is `undefined`.

- **Type:** `String`

### previousImageIndex

The previous image number of the images array.

- **Type:** `Number`

### currentImageIndex

The current image number of the images array.

- **Type:** `Number`

### nextImageIndex

The next image number of the images array.

- **Type:** `Number`

## Methods

### getCaption(number: `Number`)

Gets the caption element corresponding to the number captions array.

If no number defined will return the one of current image.

* **Type:** `Number`
* **Required:** `false`

### getCaptionText(number: `Number`)

Gets the caption text corresponding to the number captions array.

If no number defined will return the one of current image.

* **Type:** `Number`
* **Required:** `false`

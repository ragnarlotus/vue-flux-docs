---
---

## Description

It is a default component to display image caption.

The slot can be overwritten with custom caption.

**Captions are passed to vue-flux component instead of this because they are used in multiple components and will be available even if this component is not used**

## Component

It will display the caption when no transition is active and is defined for current image.

The component can have the following attributes.

| Attribute | Type | Required | Description |
|-----------|------|----------|-------------|
| slider | Object | false | The VueFlux component |

## Properties

This are the component properties that you can access programatically.

| Name | Type | Description |
|------|------|-------------|
| captions | Array | Array of strings for image captions |
| caption | String | Returns the current image caption or empty string |

#### Example of caption inside vue-flux

``` html
<vue-flux
   :options="fluxOptions"
   :images="fluxImages"
   :transitions="fluxTransitions"
   :captions="fluxCaptions">
   <flux-caption slot="caption"></flux-caption>
</vue-flux>
```

``` javascript
import { VueFlux, FluxCaption, Transitions } from 'vue-flux';

export default {
   components: {
      VueFlux,
      FluxCaption
   },

   data: () => ({
      fluxOptions: {
         autoplay: true
      },
      fluxImages: [ 'URL1', 'URL2', 'URL3' ],
      fluxTransitions: Transitions,
      fluxCaptions: [
         'Image URL1 caption',
         'Image URL2 caption',
         'Image URL3 caption'
      ]
   })
}
```

#### Example of caption outside vue-flux

``` html
<vue-flux
   :options="fluxOptions"
   :images="fluxImages"
   :transitions="fluxTransitions"
   :captions="fluxCaptions"
   ref="slider">
</vue-flux>

<flux-caption v-if="mounted" :slider="$refs.slider"></flux-caption>
```

``` js
import { VueFlux, FluxCaption, Transitions } from 'vue-flux';

export default {
   components: {
      VueFlux,
      FluxCaption
   },

   data: () => ({
      mounted: false,
      fluxOptions: {
         autoplay: true
      },
      fluxImages: [ 'URL1', 'URL2', 'URL3' ],
      fluxTransitions: Transitions,
      fluxCaptions: [
         'Image URL1 caption',
         'Image URL2 caption',
         'Image URL3 caption'
      ]
   }),

   mounted() {
      this.mounted = true;
   }
}
```

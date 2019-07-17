---
prev: false
---

# FluxCaption

## Description

It is a default component to diplay image caption.

The slot can be overwritten with custom caption.

**Captions are passed to vue-flux component instead of this because they are used in multiple components and will be available even if this component is not used**

## Attributes

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

``` javascript
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

## Templating

To use custom caption you can do it using caption slot of [VueFlux](components/vue-flux) component. Check [FluxCaption](complements/flux-caption) documentation for further information about `captionProp` element.

#### Custom component

``` html
<vue-flux
   :images="vfImages"
   :transitions="vfTransitions"
   :captions="vfCaptions"
   ref="slider">

   <template v-slot:caption>
      <flux-caption v-slot="captionProps">
         <custom-caption caption="captionProps"></custom-caption>
      </flux-caption>
   </template>
</vue-flux>
```

#### Custom structure

``` html
<vue-flux
   :images="vfImages"
   :transitions="vfTransitions"
   :captions="vfCaptions"
   ref="slider">

   <template v-slot:caption>
      <flux-caption v-slot="captionProps">
         <a href="captionProps.url" class="flux-caption">{{ captionProps.text }}</a>
      </flux-caption>
   </template>
</vue-flux>
```

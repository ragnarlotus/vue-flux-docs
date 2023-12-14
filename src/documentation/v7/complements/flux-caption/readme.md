---
prev: false
---

# FluxCaption

## Description

The included component to display resource captions.

## Attributes

``` ts
interface Props {
	currentResource: null | ResourceIndex;
	currentTransition: null | TransitionIndex;
}
```

### slider

Is the VueFlux instance component from which to read the captions.

If you place this complement as a direct child in the VueFlux component you don't need to pass this attribute.


#### Example of caption inside vue-flux

``` html
<vue-flux
   :options="vfOptions"
   :images="vfImages"
   :transitions="vfTransitions"
   :captions="vfCaptions">

   <template v-slot:caption>
      <flux-caption />
   </template>
</vue-flux>
```

``` js
import {
   VueFlux,
   FluxCaption
} from 'vue-flux';

export default {
   components: {
      VueFlux,
      FluxCaption,
   },

   data: () => ({
      vfOptions: {
         autoplay: true
      },
      vfImages: [ 'URL1', 'URL2', 'URL3' ],
      vfTransitions: [ 'fade', 'slide' ],
      vfCaptions: [
         'Image URL1 caption',
         'Image URL2 caption',
         'Image URL3 caption'
      ],
   }),
}
```

#### Example of caption outside vue-flux

``` html
<vue-flux
   :options="vfOptions"
   :images="vfImages"
   :transitions="vfTransitions"
   :captions="vfCaptions"
   ref="slider">
</vue-flux>

<flux-caption v-if="mounted" :slider="$refs.slider" />
```

``` js
import {
   VueFlux,
   FluxCaption,
} from 'vue-flux';

export default {
   components: {
      VueFlux,
      FluxCaption,
   },

   data: () => ({
      mounted: false,
      vfOptions: {
         autoplay: true,
      },
      vfImages: [ 'URL1', 'URL2', 'URL3' ],
      vfTransitions: [ 'fade', 'slide' ],
      vfCaptions: [
         'Image URL1 caption',
         'Image URL2 caption',
         'Image URL3 caption',
      ],
   }),

   mounted() {
      this.mounted = true;
   },
}
```

## Templating

You can customize how the captions are displayed. That is because this component has a default slot, so you can pass a custom component or template code.

This slot will receive an object having the following schema:

``` js
captionProps = {
   caption: String | Object,
   text: String,
}
```

- caption: is the element of the captions array corresponding to the current image.
- text: is the caption as text. This is specially useful if you mix captions as `String` and as `Object`.

#### Example using custom component

``` html
<vue-flux
   :images="vfImages"
   :transitions="vfTransitions"
   :captions="vfCaptions"
   ref="slider">

   <template v-slot:caption>
      <flux-caption v-slot="captionProps">
         <custom-caption caption="captionProps" />
      </flux-caption>
   </template>
</vue-flux>
```

#### Example using custom structure

``` html
<vue-flux
   :images="vfImages"
   :transitions="vfTransitions"
   :captions="vfCaptions"
   ref="slider">

   <template v-slot:caption>
      <flux-caption v-slot="captionProps">
         <a :href="captionProps.caption.url" class="flux-caption">
            {{ captionProps.text }}
         </a>
      </flux-caption>
   </template>
</vue-flux>
```

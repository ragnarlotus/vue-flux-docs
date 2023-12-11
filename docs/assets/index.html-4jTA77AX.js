import{_ as n,o as e,c as t,f as o,d as i}from"./app-8ofisRWT.js";const a={},s=i("p",null,"WIP",-1);function p(l,u){return e(),t("div",null,[s,o(` 
# FluxCaption

::: warning

I am using here the latest 2.6 vue syntax for slots, but if your Vue version is older check [Named-Slots](https://vuejs.org/v2/guide/components-slots.html#Named-Slots) to see how slots are used in previous versions.

:::

## Description

The included component to display image captions.

::: tip

Captions are passed to vue-flux component instead of this because they are used in multiple complements and will be available even if this component is not used.

:::

## Attributes

### slider

Is the VueFlux instance component from which to read the captions.

If you place this complement as a direct child in the VueFlux component you don't need to pass this attribute.

- **Type:** \`VueFlux\`
- **Required:** \`false\`

#### Example of caption inside vue-flux

\`\`\` html
<vue-flux
   :options="vfOptions"
   :images="vfImages"
   :transitions="vfTransitions"
   :captions="vfCaptions">

   <template v-slot:caption>
      <flux-caption />
   </template>
</vue-flux>
\`\`\`

\`\`\` js
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
\`\`\`

#### Example of caption outside vue-flux

\`\`\` html
<vue-flux
   :options="vfOptions"
   :images="vfImages"
   :transitions="vfTransitions"
   :captions="vfCaptions"
   ref="slider">
</vue-flux>

<flux-caption v-if="mounted" :slider="$refs.slider" />
\`\`\`

\`\`\` js
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
\`\`\`

## Properties

### vf

The \`VueFlux\` instance component.

- **Type:** \`VueFlux\`

### caption

Is the caption corresponding to the image being displayed at the moment.

This value will be empty string while preloading and while there is a transition running.

- **Type:** \`String\`

### captions

The array of captions passed originally to the VueFlux component.

- **Type:** \`Array\`

## Methods

### getCaption(index)

Gets the caption element corresponding to the index captions array.

If no index defined will return the one of current image.

- index
  - Type: \`Number\`
  - Required: \`false\`

### getCaptionText(index)

Gets the caption text corresponding to the index captions array.

If no index defined will return the one of current image.

- index
  - Type: \`Number\`
  - Required: \`false\`

## Templating

You can customize how the captions are displayed. That is because this component has a default slot, so you can pass a custom component or template code.

This slot will receive an object having the following schema:

\`\`\` js
captionProps = {
   caption: String | Object,
   text: String,
}
\`\`\`

- caption: is the element of the captions array corresponding to the current image.
- text: is the caption as text. This is specially useful if you mix captions as \`String\` and as \`Object\`.

#### Example using custom component

\`\`\` html
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
\`\`\`

#### Example using custom structure

\`\`\` html
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
\`\`\`
 `)])}const c=n(a,[["render",p],["__file","index.html.vue"]]);export{c as default};

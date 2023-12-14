import{_ as n,o as e,c as t,f as o,b as s}from"./app-k9p8jFez.js";const i={},l=s("p",null,"WIP",-1);function r(u,a){return e(),t("div",null,[l,o(` 
# FluxControls

::: warning

I am using here the latest 2.6 vue syntax for slots, but if your Vue version is older check [Named-Slots](https://vuejs.org/v2/guide/components-slots.html#Named-Slots) to see how slots are used in previous versions.

:::

## Description

The included component to display controls with the buttons previous, next, play and pause.

## Attributes

### slider

Is the VueFlux instance component from which to read the captions.

If you place this complement as a direct child in the VueFlux component you don't need to pass this attribute.

- **Type:** \`VueFlux\`
- **Required:** \`false\`

#### Example of controls inside vue-flux

\`\`\` html
<vue-flux
   :options="vfOptions"
   :images="vfImages"
   :transitions="vfTransitions">

   <template v-slot:controls>
      <flux-controls />
   </template>
</vue-flux>
\`\`\`

\`\`\` js
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
\`\`\`

#### Example of controls outside vue-flux

\`\`\` html
<vue-flux
   :options="fluxOptions"
   :images="fluxImages"
   :transitions="fluxTransitions"
   ref="slider">
</vue-flux>

<flux-controls v-if="mounted" :slider="$refs.slider" />
\`\`\`

\`\`\` js
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
\`\`\`

## Properties

### vf

The \`VueFlux\` instance component.

- **Type:** \`VueFlux\`

### display

Will return \`true\` if the slider is loaded and mouse moved over.

- **Type:** \`Boolean\`

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
 `)])}const p=n(i,[["render",r],["__file","index.html.vue"]]);export{p as default};

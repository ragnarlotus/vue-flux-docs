import{_ as n,o as e,c as t,f as i,d as o}from"./app-732a0dff.js";const s={},a=o("p",null,"WIP",-1);function l(r,u){return e(),t("div",null,[a,i(` # FluxIndex

::: warning

I am using here the latest 2.6 vue syntax for slots, but if your Vue version is older check [Named-Slots](https://vuejs.org/v2/guide/components-slots.html#Named-Slots) to see how slots are used in previous versions.

:::

## Description

The included component to display an index of all images so it is a good resource when the slider contains many images.

You can place it inside the vue-flux component or outside and give it any style you want, meaning horizontal, vertical, with arrows, with scroll, etc. The default style is only applied if located inside and can be easily overwritten.

It will display a button when no transition is active nor mouse over.

The index will auto hide after choosing an image with default styles.

The current image will have class \`current\`.

Placing the mouse over will display the caption if defined.

## Attributes

### slider

Is the VueFlux instance component from which to read the captions.

If you place this complement as a direct child in the VueFlux component you don't need to pass this attribute.

- **Type:** \`VueFlux\`
- **Required:** \`false\`

#### Example of index inside vue-flux

\`\`\` html
<vue-flux
   :options="vfOptions"
   :images="vfImages"
   :transitions="vfTransitions">

   <template v-slot:index>
      <flux-index />
   </template>
</vue-flux>
\`\`\`

\`\`\` javascript
import {
   VueFlux,
   FluxIndex,
} from 'vue-flux';

export default {
   components: {
      VueFlux,
      FluxIndex,
   },

   data: () => ({
      vfOptions: {
         autoplay: true,
      },
      vfImages: [ 'URL1', 'URL2', 'URL3' ],
      vfTransitions: [ 'fade', 'slide' ],
   }),
}
\`\`\`

#### Example of index outside vue-flux

\`\`\` html
<vue-flux
   :options="vfOptions"
   :images="vfImages"
   :transitions="vfTransitions"
   ref="slider">
</vue-flux>

<flux-index v-if="mounted" :slider="$refs.slider" />
\`\`\`

\`\`\` javascript
import {
   VueFlux,
   FluxIndex,
} from 'vue-flux';

export default {
   components: {
      VueFlux,
      FluxIndex,
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

Will return \`true\` if the slider is loaded.

- **Type:** \`Boolean\`

### displayButton

Will return \`true\` if the mouse moved over.

- **Type:** \`Boolean\`

### captions

The array of captions passed originally to the VueFlux component.

- **Type:** \`Array\`

## Methods

### toggle()

Toggles displaying the index of images.

### show()

Shows the images index.

### hide(number)

Hides the images index.

If number specified, the slider will show the image in that position of the current images array.

- number
  - Type: \`Number\`
  - Required: \`false\`

### show(number)

The slider will show the image in that position of the current images array.

- number
  - Type: \`Number\`
  - Required: \`true\`
 `)])}const m=n(s,[["render",l],["__file","index.html.vue"]]);export{m as default};

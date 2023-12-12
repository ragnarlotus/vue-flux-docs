import{_ as n,o as e,c as t,f as i,d as o}from"./app-DHB0SMXO.js";const a={},s=o("p",null,"WIP",-1);function l(u,r){return e(),t("div",null,[s,i(` 
# FluxPagination

::: warning

I am using here the latest 2.6 vue syntax for slots, but if your Vue version is older check [Named-Slots](https://vuejs.org/v2/guide/components-slots.html#Named-Slots) to see how slots are used in previous versions.

:::

## Description

The included component to display a pagination of the images, good when it does not contain too many images.

## Attributes

### slider

Is the VueFlux instance component from which to read the captions.

If you place this complement as a direct child in the VueFlux component you don't need to pass this attribute.

- **Type:** \`VueFlux\`
- **Required:** \`false\`

#### Example of pagination inside vue-flux

\`\`\` html
<vue-flux
   :options="vfOptions"
   :images="vfImages"
   :transitions="vfTransitions">

   <template v-slot:pagination>
      <flux-pagination />
   </template>
</vue-flux>
\`\`\`

\`\`\` javascript
import {
   VueFlux,
   FluxPagination,
} from 'vue-flux';

export default {
   components: {
      VueFlux,
      FluxPagination,
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

#### Example of pagination outside vue-flux

\`\`\` html
<vue-flux
   :options="vfOptions"
   :images="vfImages"
   :transitions="vfTransitions"
   ref="slider">
</vue-flux>

<flux-pagination v-if="mounted" :slider="$refs.slider" />
\`\`\`

\`\`\` javascript
import {
   VueFlux,
   FluxPagination,
} from 'vue-flux';

export default {
   components: {
      VueFlux,
      FluxPagination,
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

### captions

The array of captions passed originally to the VueFlux component.

- **Type:** \`Array\`

## Methods

### show(number)

The slider will show the image in that position of the current images array.

- number
  - Type: \`Number\`
  - Required: \`true\`

## Templating

You can customize how the pagination items are displayed. That is because this component has a default slot, so you can pass a custom component or template code.

This slot will receive an object having the following schema:

\`\`\` js
itemProps = {
   index: Number,
   title: String,
   onClick: Function,
   active: Boolean,
}
\`\`\`

### index

The item number.

### title

The text taken from caption.

### onClick

The show() function.

### active

Returns if the item is the active one.

#### Custom component

\`\`\` html
<vue-flux
   :images="vfImages"
   :transitions="vfTransitions"
   ref="slider">

   <template v-slot:pagination>
      <flux-pagination v-slot="itemProps">
         <custom-pagination item="itemProps" />
      </flux-pagination>
   </template>
</vue-flux>
\`\`\`

#### Custom structure

This is an example with [Font Awesome](https://fontawesome.com/) icons.

\`\`\` html
<vue-flux
   :images="vfImages"
   :transitions="vfTransitions"
   ref="slider">

   <template v-slot:pagination>
      <flux-pagination v-slot="itemProps">
         <i class="fas"
            :class="itemProps.active? 'fa-check-square' : 'fa-square'"
            @click="itemProps.onClick(itemProps.index)">
         </i>
      </flux-pagination>
   </template>
</vue-flux>
\`\`\`
 `)])}const p=n(a,[["render",l],["__file","index.html.vue"]]);export{p as default};

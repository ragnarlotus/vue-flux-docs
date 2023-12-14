---
---

# Installation and usage

## Installation

Installation is very simple, just use your favorite package manager:

``` bash
npm install --save vue-flux@latest
```

## Usage

First you need to decide where to import the slider styles, if you wil use one slider it can be done where the slider is used, otherwise the best practice is in the `main.[ts|js]`. Implementing the styles is as simple as:

``` ts
import 'vue-flux/style.css';
```

In the following component we add the styles directly there.

::: warning Options VS Composition
VueFlux 7 works with Vue 3, but as you should know it doesn't work the same if you use the `Options` or `Composition` API. All examples found in this documentation are using `Composition` API, so if you use `Options` API take a look to the few changes that you have to make in the documentation I created specifically
:::

This one has all the complements, so you can remove the ones you don't want.

Add the component. This one has all the complements, so you can remove the ones you don't want.

``` ts
import { ref, shallowReactive } from 'vue';
import {
   VueFlux,
   FluxCaption,
   FluxControls,
   FluxIndex,
   FluxPagination,
   FluxPreloader,
   Img,
   Book,
   Zip,
} from 'vue-flux';
import 'vue-flux/style.css';

const $vueFlux = ref();

const vfOptions = shallowReactive({
   autoplay: true,
});

const vfRscs = shallowReactive([
   new Img('URL1' 'img 1'),
   new Img('URL2' 'img 2'),
   new Img('URL3' 'img 3'),
]);

const vfTransitions = shallowReactive([Book, Zip]);
```

``` html
<VueFlux
   :options="vfOptions"
   :rscs="vfRscs"
   :transitions="vfTransitions"
   ref="$vueFlux">

   <template #preloader="preloaderProps">
      <FluxPreloader v-bind="preloaderProps" />
   </template>

   <template #caption="captionProps">
      <FluxCaption v-bind="captionProps" />
   </template>

   <template #controls="controlsProps">
      <FluxControls v-bind="controlsProps" />
   </template>

   <template #pagination="paginationProps">
      <FluxPagination v-bind="paginationProps" />
   </template>

   <template #index="indexProps">
      <FluxIndex v-bind="indexProps" />
   </template>
</VueFlux>

<button @click="$vueFlux.show('next')">NEXT</button>
```

If you want to see more details about options, check the [VueFlux](components/vue-flux) component documentation.

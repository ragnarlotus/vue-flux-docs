---
---

# Overview

This is an image slider developed with [vue](https://vuejs.org/) 3 which comes with 20 cool transitions out of the box.

![npm](https://img.shields.io/npm/v/vue-flux/latest.svg?style=flat-square)
![npm](https://img.shields.io/npm/dt/vue-flux.svg?style=flat-square)
![npm bundle size (minified)](https://img.shields.io/bundlephobia/min/vue-flux/latest.svg?style=flat-square)
![npm bundle size (minified + gzip)](https://img.shields.io/bundlephobia/minzip/vue-flux/latest.svg?style=flat-square)
![GitHub issues](https://img.shields.io/github/issues-raw/ragnarlotus/vue-flux.svg?style=flat-square)
![GitHub](https://img.shields.io/github/license/mashape/apistatus.svg?style=flat-square)

## Demo

You can view the [demos here](../../demos/demos)

## Features

| Feature | Description |
|---------|-------------|
| Responsive | The slider and the images are adapted to container to fill it always |
| Compatibility | Supported by all major browsers |
| Expandable | You can add your custom transitions very easily |
| Customization | Total customizable to suit most needs |
| Gestures | Mobile friendly by gestures |
| Functionality | You can use arrow keys to navigate. Switch to full screen |
| Parallax | It includes a parallax component very easy to set up |

## Quick start

Install and save the package.

``` bash
npm install --save vue-flux@latest
```

First you need to decide where to import the slider styles, if you wil use one slider it can be done where the slider is used, otherwise the best practice is in the `main.[ts|js]`. Implementing the styles is as simple as:

``` ts
import 'vue-flux/style.css';
```

In the following component we add the styles directly there.

::: warning Options VS Composition
VueFlux 7 works with Vue 3, but as you should know it doesn't work the same if you use the `Options` or `Composition` API. All examples found in this documentation are using `Composition` API, so if you use `Options` API take a look to the few changes that you have to make in the documentation I created specifically
:::

This one has all the complements, so you can remove the ones you don't want.

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

## Performance

Weight is about 60 KB so is pretty light having only the essential CSS. It also does not require a high end computer as animations are performed with CSS3 hardware acceleration.

## Included transitions

#### 2D transitions

| Name | Description |
|------|-------------|
| Fade | Fades from one image to next |
| Kenburn | Fades, zoom and moves current image to next |
| Swipe | Swipes the image to display next like uncovered with a curtain |
| Slide | Slides the image horizontally revealing the next |
| Waterfall | Divides the image in bars and drops them down in turns |
| Zip | Divides the image in bars and slides them up and down alternately like a zip |
| Blinds 2D | Divides the image in vertical bars that blinds and fades out |
| Blocks 1 | The image is split in blocks that shrink and fade out randomly |
| Blocks 2 | The image is split in blocks that shrink and fade out in wave from a corner to the opposite |
| Concentric | a concentric effect is performed by rotating the image converted into circles |
| Warp | A concentric effect is performed by rotating the image converted into circles in alternate direction|
| Camera | From outside to inside the image is being circled in black like a camera |

#### 3D transitions

| Name | Description |
|------|-------------|
| Cube | Turns the image to a side like if place in a cube  |
| Book | Makes the effect of turning a page to display next image |
| Fall | The image falls in front displaying next image |
| Wave | Makes the image 3D and divides it in slices that turn vertically to display the next image |
| Blinds 3D | Divides the image in vertical bars that blinds 180 deg to form the next image |
| Round 1 | Dhe image is split in blocks that turn 180 deg horizontally to form next image |
| Round 2 | Panels start to round vertically revealing the next image in upper arrow form leaving trail |
| Explode | The image starts to explode from the center to outside |

## Parallax

As simple as this.

``` ts
import { FluxParallax, Img } from 'vue-flux';

const rsc = new Img('URL1' 'img 1');
```

``` html
<FluxParallax :rsc="rsc" style="height: 300px;">
   <div>CONTENT</div>
</FluxParallax>
```

## Troubleshooting

If you find yourself running into issues during installation or running the slider, please check our [documentation](overview). If still needs help open an [issue](https://github.com/ragnarlotus/vue-flux/issues/new). I will be happy to discuss how they can be solved.

## Documentation

You can view the full documentation at the project's [documentation](overview) with examples and detailed information.

## Changelog

Check the [changelog](changelog) for update info.

## Inspiration

This slider was inspired by [Flux Slider](http://joelambert.co.uk/flux/).

## Contributing

Contributions, questions and comments are all welcome and encouraged.

Do not hesitate to send me your own transitions to add them to the slider.

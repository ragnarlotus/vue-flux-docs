import{_ as e,o as t,c as i,f as s,d as n,e as o}from"./app-50w0ji3D.js";const a={},r=n("h1",{id:"vueflux",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#vueflux","aria-hidden":"true"},"#"),o(" VueFlux")],-1),l=n("p",null,"WIP",-1);function d(u,c){return t(),i("div",null,[r,l,s(` 

## Description

This is the main component of the slider and will be the frame that displays the resources.

## Attributes

All the attributes are reactive, so if you change their value at any moment, the slider will be updated automatically.

### options

An object containing the slider options.

- **Type:** \`Options\`
- **Required:** \`false\`

This are the available options.

| Option | Type | Default | Description |
|--------|------|---------|-------------|
| allowFullscreen | Boolean | false | Allows the slider to be displayed in full screen |
| allowToSkipTransition | Boolean | true | If enabled you will be able to skip the running transition, otherwise you need to wait to interact again |
| aspectRatio | String | 16:9 | Aspect ratio to set the slider by \`width:height\` ratio |
| autohideTime | Number | 2500 | The time in *ms* that the controls and index buttons remain visible. If set to \`0\` they will never disappear |
| autoplay | Boolean | false | Autoplay images when preload finished |
| bindKeys | Boolean | false | Binds the arrow keys of keyboard to show next or previous |
| delay | Number | 5000 | The time in *ms* that an image will be displayed before changing to next |
| enableGestures | Boolean | false | Define if in touchable screens should use gestures instead of showing control and index buttons |
| infinite | Boolean | true | The slider will start over when reaches the last image, otherwise will stop |
| lazyLoad | Boolean | true | Enables or disables lazy loading of images. If disabled, transitions will not begin until all images have been loaded |
| lazyLoadAfter | Number | 3 | Indicates how many images have to be loaded before starting to load the rest in background |

This is the default options schema:

\`\`\` js
{
   allowFullscreen: false,
   allowToSkipTransition: true,
   autohideTime: 2500,
   autoplay: false,
   bindKeys: false,
   delay: 5000,
   enableGestures: false,
   infinite: true,
   lazyLoad: true,
   lazyLoadAfter: 5,
}
\`\`\`

### transitions

This is an array that will own the transition components or custom transitions to be used between resources.

The transitions will be run in the order defined and then will begin again from the first.

- **Type:** \`(Component | TransitionWithOptions)[]\`
- **Required:** \`true\`

#### Included transitions

In this version there are 20 transitions included.

\`\`\` html
<script setup>
   import { shallowReactive } from 'vue';
   import {
      VueFlux,
      Img,
      Book,
      Zip,
   } from 'vue-flux';
   import 'vue-flux/style.css';

   const vfRscs = shallowReactive([
      new Img('URL1' 'img 1'),
      new Img('URL2' 'img 2'),
      new Img('URL3' 'img 3'),
   ]);

   const vfTransitions = shallowReactive([Book, Zip]);
<\/script>

<template>
   <VueFlux
      :rscs="vfRscs"
      :transitions="vfTransitions">
   </VueFlux>
</template>
\`\`\`

::: tip

Check [transitions](../transitions) to see the list.

:::

#### Custom transitions

To use a custom transition, we need to import it and include it in the transitions array

Example:

\`\`\` html
<script setup>
   import { shallowReactive } from 'vue';
   import {
      VueFlux,
      Img,
      Book,
      Zip,
   } from 'vue-flux';
   import 'vue-flux/style.css';

   import CustomTransition1 from 'CustomTransition1.vue';
   import CustomTransition2 from 'CustomTransition2.vue';

   const vfRscs = shallowReactive([
      new Img('URL1' 'img 1'),
      new Img('URL2' 'img 2'),
      new Img('URL3' 'img 3'),
   ]);

   const vfTransitions = shallowReactive([Book, Zip, CustomTransition1, CustomTransition2);
<\/script>

<template>
   <VueFlux
      :rscs="vfRscs"
      :transitions="vfTransitions">
   </VueFlux>
</template>
\`\`\`

::: tip

Check [custom transitions](../custom-transitions) to know more about how to create custom transitions.

:::

#### Transition options

In order to modify the parameters of transitions, you need to do it using an object with the following schema:

\`\`\` js
   interface TransitionWithOptions {
      component: Component;
      options: Object;
   }
\`\`\`

To know which options the included transitions have, go to the transition documentation.

Following is an example of customizing an included transition and a custom transition.

\`\`\` html
<script setup>
   import { shallowReactive } from 'vue';
   import {
      VueFlux,
      Img,
      Blinds2D ,
   } from 'vue-flux';
   import 'vue-flux/style.css';
   import CustomTransition from 'CustomTransition.vue';

   const vfRscs = shallowReactive([
      new Img('URL1' 'img 1'),
      new Img('URL2' 'img 2'),
      new Img('URL3' 'img 3'),
   ]);

   const vfTransitions = [{
      component: Blinds2D,
      options: {
         tileDuration: 1000,
         easing: 'ease-in-out',
      },
   }, {
      component: CustomTransition,
      options: {
         rows: 4,
         cols: 10,
         totalDuration: 3000,
      },
   }];
<\/script>

<template>
   <VueFlux
      :rscs="vfRscs"
      :transitions="vfTransitions">
   </VueFlux>
</template>
\`\`\`

### rscs

The array containing the resources to be displayed.

- **Type:** \`(Resource | ResourceWithOptions)[]\`
- **Required:** \`true\`

::: tip

If resource can not be loaded will be omitted displaying a console warning message.

:::

## Size

The slider size is defined the following way:

1. If defined by CSS that will be the size
2. If no width defined, will be parent's width
3. If no height defined, will calculate the height using a 16:9 ratio.

::: danger

If you want to define a size, avoid using \`width\` and \`height\` directly in the style attibute, as those values will be applied always, even in full screen, not letting the slider resize itself. So better use a class for \`.vue-flux\` component or set the \`style\` attribute in the parent.

:::

## Methods

### play(resourceIndex: number | Direction = Directions.next, delay?: number)

Starts displaying the images by the interval specified with [delay](#options) option.

#### resourceIndex

The number is the image number to start with, and can also be 'previous' and 'next'.

- **Type:** \`number | 'previous' | 'next'\`
- **Required:** \`false\`
- **Default:** \`'next'\`

#### delay

The delay is the time in *ms* to start. If not ime specified, the one set in config as \`delay\` will be used.

- **Type:** \`number\`
- **Required:** \`false\`
- **Default:** [config.delay](#options)

### stop(cancelTransition: boolean = false)

Stops playing images and remains in the current.

### show(resourceIndex: number | Direction = Directions.next, transitionIndex: number | Direction = Directions.next)

Displays the image specified by image number (or 'next' or 'prev') and using the specified transition.

#### resourceIndex

If no number, the next image will be showed.

- **Type:** number | Direction
- **Required:** false
- **Default:** Directions.next

#### transitionIndex

If no number, the next transition will be run.

- **Type:** number | Direction
- **Required:** false
- **Default:** Directions.next

## Slots

### preloader

Defined to hold the preloading functionality

You can use the included [FluxPreloader](../complements/flux-preloader) complement.

#### Example

\`\`\` html
<VueFlux
   :rscs="vfRscs"
   :transitions="vfTransitions">

   <template #preloader="preloaderProps">
      <FluxPreloader v-bind="preloaderProps" />
   </template>
</VueFlux>
\`\`\`

### caption

Used to display the resources captions.

You can use the included [FluxCaption](../complements/flux-caption) complement.

#### Example

\`\`\` html
<VueFlux
   :rscs="vfRscs"
   :transitions="vfTransitions">

   <template #caption="captionProps">
      <FluxCaption v-bind="captionProps" />
   </template>
</VueFlux>
\`\`\`

### controls

Used to display the slider controls.

You can use the included [FluxControls](../complements/flux-controls) complement.

#### Example

\`\`\` html
<VueFlux
   :rscs="vfRscs"
   :transitions="vfTransitions">

   <template #controls="controlsProps">
      <FluxControls v-bind="controlsProps" />
   </template>
</VueFlux>
\`\`\`

### index

Used to display a resources index.

You can use the included [FluxIndex](../complements/flux-index) complement.

#### Example

\`\`\` html
<VueFlux
   :rscs="vfRscs"
   :transitions="vfTransitions">

   <template #index="indexProps">
      <FluxIndex v-bind="indexProps" />
   </template>
</VueFlux>
\`\`\`

### pagination

Used to display the a resources pagination.

You can use the included [FluxPagination](../complements/flux-pagination) complement.

#### Example

\`\`\` html
<VueFlux
   :rscs="vfRscs"
   :transitions="vfTransitions">

   <template #pagination="paginationProps">
      <FluxPagination v-bind="paginationProps" />
   </template>
</VueFlux>
\`\`\`

## Events

- \`created\`: fired when the slider component is created.
- \`mounted\`: fired when the slider component is mounted.
- \`unmounted\`: fired when the slider component is destroyed.
- \`options-updated\`: fired when the options have been updated.
- \`ready\`: fired when the slider is ready and will start to display images.
- \`play\`: fired when auto playing images.
- \`stop\`: fired when stopped to auto play images.
- \`show\`: fired when requested to show an image.
- \`fullscreen-enter\`: fired when entered in full screen mode.
- \`fullscreen-exit\`: fired when exit from full screen.
- \`resources-preload-start\`: fired when started to preload images.
- \`resources-preload-end\`: fired when finished to preload images.
- \`resources-lazyload-start\`: fired when start to lazy loading images.
- \`resources-lazyload-end\`: fired when finished to lay loading images.
- \`transitions-updated\`: fired when transitions updated.
- \`transition-start\`: fired when transition begin.
- \`transition-cancel\`: fired when transition is running and is being cancelled.
- \`transition-end\`: fired when transition finish.
 `)])}const p=e(a,[["render",d],["__file","index.html.vue"]]);export{p as default};

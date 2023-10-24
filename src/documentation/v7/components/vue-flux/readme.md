---
prev: false
---

# VueFlux

## Description

This is the main component of the slider and will be the frame that displays the resources.

## Attributes

All the attributes are reactive, so if you change their value at any moment, the slider will be updated automatically.

### options

An object containing the slider options.

- **Type:** `Options`
- **Required:** `false`

This are the available options.

| Option | Type | Default | Description |
|--------|------|---------|-------------|
| allowFullscreen | Boolean | false | Allows the slider to be displayed in full screen |
| allowToSkipTransition | Boolean | true | If enabled you will be able to skip the running transition, otherwise you need to wait to interact again |
| aspectRatio | String | 16:9 | Aspect ratio to set the slider by `width:height` ratio |
| autohideTime | Number | 2500 | The time in *ms* that the controls and index buttons remain visible. If set to `0` they will never disappear |
| autoplay | Boolean | false | Autoplay images when preload finished |
| bindKeys | Boolean | false | Binds the arrow keys of keyboard to show next or previous |
| delay | Number | 5000 | The time in *ms* that an image will be displayed before changing to next |
| enableGestures | Boolean | false | Define if in touchable screens should use gestures instead of showing control and index buttons |
| infinite | Boolean | true | The slider will start over when reaches the last image, otherwise will stop |
| lazyLoad | Boolean | true | Enables or disables lazy loading of images. If disabled, transitions will not begin until all images have been loaded |
| lazyLoadAfter | Number | 3 | Indicates how many images have to be loaded before starting to load the rest in background |

This is the default options schema:

``` js
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
```

### transitions

This is an array that will own the transition components or custom transitions to be used between images.

The transitions will be run in the order defined and then will begin again from the first.

- **Type:** `(Component | TransitionWithOptions)[]`
- **Required:** `true`

#### Included transitions

In this version there are 20 transitions included.

``` html
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
</script>

<template>
   <VueFlux
      :rscs="vfRscs"
      :transitions="vfTransitions">
   </VueFlux>
</template>
```

::: tip

Check [transitions](../transitions/) to see the list.

:::

#### Custom transitions

To use a custom transition, we need to import it and include it in the transitions array

Example:

``` html
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
</script>

<template>
   <VueFlux
      :rscs="vfRscs"
      :transitions="vfTransitions">
   </VueFlux>
</template>
```

::: tip

Check [custom transitions](../custom-transitions) to know more about how to create custom transitions.

:::

#### Transition options

In order to modify the parameters of transitions, you need to do it using an object with the following schema:

``` js
   interface TransitionWithOptions {
      component: Component;
      options: object;
   }
```

To know which options the included transions have, go to the transition documentation.

Following is an example of customizing an included transition and a custom transition.

``` html
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
</script>

<template>
   <VueFlux
      :rscs="vfRscs"
      :transitions="vfTransitions">
   </VueFlux>
</template>
```

### rscs

The array containing the resources to be displayed.

- **Type:** `(Resource | ResourceWithOptions)[]`
- **Required:** `true`

::: tip

If resource can not be loaded will be omitted displaying a console warning message.

:::

### captions

Captions are the texts that will be displayed when its image is showed.

Also will be displayed as popover in the components `FluxIndex` and `FluxPagination` when you stop the mouse over an element.

Each caption can be defined as simple string or an object with any data you want **and the property** `text` in it as plain text. Here it is the caption schema as object:

``` js
{
   text: String,
   prop1: Any,
   prop2: Any,
}
```

This way you can customize considerably the [caption's slot](complements/flux-caption/#templating) with any data you need and reach it easily.

## Size

The slider size is defined the following way:

1. If defined by CSS that will be the size
2. If no width defined, will be parent's width
3. If no height defined, will calculate the height using a 16:9 ratio.

::: danger

If you want to define a size, avoid using `width` and `height` directly in the style attibute, as those values will be applied always, even in full screen, not letting the slider resize itself. So better use a class for `.vue-flux` component or set the `style` attribute in the parent.

:::

## Properties

### loaded

Indicates if the images have been preloaded and slider is initialized.

- **Type:** `Boolean`

### mouseOver

Indicates whether the mouse has moved recently over the slider. After moving the mouse, the time that this value will remain `true` is defined through the [autohideTime](#options) option.

- **Type:** `Boolean`

## Methods

### resize()

Call to recalculate the sizes of the slider.

### play(number: `Number | String`, delay: `Number`)

Starts displaying the images by the interval specified with [delay](#options) option.

#### number

The number is the image number to start with, and can also be 'previous' and 'next'.

- **Type:** `Number | 'previous' | 'next'`
- **Required:** `false`
- **Default:** `'next'`

#### delay

The delay is the time in *ms* to start. If not ime specified, the one set in config as `delay` will be used.

- **Type:** `Number`
- **Required:** `false`
- **Default:** [config.delay](#options)

### stop()

Stops playing images and remains in the current.

### show(number: `Number`, transition: `String`)

Displays the image specified by image number (or 'next' or 'previous') and using the specified transition.

#### number

If no number, the next image will be showed.

- **Type:** Number
- **Required:** false

#### transition

If no number, the next transition will be run.

- **Type:** Number
- **Required:** false

## Slots

::: warning

I am using the 2.6 vue syntax for slots, but if your Vue version is older check [Named-Slots](https://vuejs.org/v2/guide/components-slots.html#Named-Slots) to see how slots are used in previous versions.

:::

### preloader

Defined to hold the preloading functionality, which includes the spinner and transition when `images` attribute change.

You can use the included [FluxPreloader](../complements/flux-preloader) complement.

#### Example

``` html
<vue-flux
   :images="vfImages"
   :transitions="vfTransitions"
   :captions="vfCaptions"
   ref="slider">

   <template v-slot:preloader>
      <flux-preloader />
   </template>
</vue-flux>
```

### caption

Defined to display the images captions.

You can use the included [FluxCaption](../complements/flux-caption) complement.

#### Example

``` html
<vue-flux
   :images="vfImages"
   :transitions="vfTransitions"
   :captions="vfCaptions"
   ref="slider">

   <template v-slot:caption>
      <flux-caption />
   </template>
</vue-flux>
```

### controls

Defined to display the slider controls.

You can use the included [FluxControls](../complements/flux-controls) complement.

#### Example

``` html
<vue-flux
   :images="vfImages"
   :transitions="vfTransitions"
   :captions="vfCaptions"
   ref="slider">

   <template v-slot:controls>
      <flux-controls />
   </template>
</vue-flux>
```

### index

Defined to display an images index.

You can use the included [FluxIndex](../complements/flux-index) complement.

#### Example

``` html
<vue-flux
   :images="vfImages"
   :transitions="vfTransitions"
   :captions="vfCaptions"
   ref="slider">

   <template v-slot:index>
      <flux-index />
   </template>
</vue-flux>
```

### pagination

Defined to display the an images pagination.

You can use the included [FluxPagination](../complements/flux-pagination) complement.

#### Example

``` html
<vue-flux
   :images="vfImages"
   :transitions="vfTransitions"
   :captions="vfCaptions"
   ref="slider">

   <template v-slot:pagination>
      <flux-pagination />
   </template>
</vue-flux>
```

### description (from v6.3.0)

Defined to display a description or text

#### Example

``` html
<vue-flux
   :images="vfImages"
   :transitions="vfTransitions"
   :captions="vfCaptions"
   ref="slider">

   <template v-slot:description>
      <div>Any text</div>
   </template>
</vue-flux>
```

## Events

- `created`: fired when the slider component is created.
- `mounted`: fired when the slider component is mounted.
- `destroyed`: fired when the slider component is destroyed.
- `options-updated`: fired when the options have been updated.
- `ready`: fired when the slider is ready and will start to display images.
- `play`: fired when auto playing images.
- `stop`: fired when stopped to auto play images.
- `show`: fired when requested to show an image.
- `fullscreen-enter`: fired when entered in full screen mode.
- `fullscreen-exit`: fired when exit from full screen.
- `images-preload-start`: fired when started to preload images.
- `images-preload-end`: fired when finished to preload images.
- `images-lazyload-start`: fired when start to lazy loading images.
- `images-lazyload-end`: fired when finished to lay loading images.
- `transitions-updated`: fired when transitions updated.
- `transition-start`: fired when transition begin.
- `transition-cancel`: fired when transition is running and is being cancelled.
- `transition-end`: fired when transition finish.

## References

### container

The slider container that wraps everything

- **Type:** `<div>`

### image

The component that shows the image between transitions.

- **Type:** `FluxImage`

### transition

The component that runs the transition between images.

- **Type:** `FluxTransition`

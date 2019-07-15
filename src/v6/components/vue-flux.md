---
---

## Description

This is the main component of the slider and will be the frame that displays the images.

## Attributes

All the attributes are reactive, so if you change their value at any moment, the slider will be updated automatically.

### options

An object containing the slider options.

- **Type:** `Object`
- **Required:** `false`

This are the available options.

| Option | Type | Default | Description |
|--------|------|---------|-------------|
| allowFullscreen | Boolean | false | Allows the slider to be displayed in full screen |
| allowToSkipTransition | Boolean | true | If enabled you will be able to skip the running transition, otherwise you need to wait to interact again |
| autohideTime | Number | 1000 | The time in *ms* that the controls and index buttons remain visible. If set to `0` they will never disappear |
| autoplay | Boolean | false | Autoplay images when preload finished |
| bindKeys | Boolean | false | Binds the arrow keys of keyboard to show next or previous |
| delay | Number | 5000 | The time in *ms* that an image will be displayed before changing to next |
| enableGestures | Boolean | false | Define if in touchable screens should use gestures instead of showing control and index buttons |
| infinite | Boolean | true | The slider will start over when reaches the last image, otherwise will stop |
| lazyLoad | Boolean | true | Enables or disables lazy loading of images. If disabled, transitions will not begin until all images have been loaded |
| lazyLoadAfter | Number | 3 | Indicates how many images have to be loaded before starting to load the rest in background |
| path | String | | The images common path, which will be prepended to images URL |

This is the default options schema:

``` js
{
   allowFullscreen: false,
   allowToSkipTransition: true,
   autohideTime: 1000,
   autoplay: false,
   bindKeys: false,
   delay: 5000,
   enableGestures: false,
   infinite: true,
   lazyLoad: true,
   lazyLoadAfter: 3,
   path: '',
}
```

### transitions

This is an array that will own the transition names or custom transitions to be used between images.

The transitions will be run in the order defined and then will begin again from the first.

If a transition is not found, an error will be thrown.

- **Type:** `Array`
- **Required:** `true`

#### Included transitions

Included transitions are passed to the array by name. That name has no spaces, no caps, nor the *transition* word.

In this version there are 20 transitions included.

``` html
<vue-flux
   :images="vfImages"
   :transitions="vfTransitions">
</vue-flux>
```

``` js
data: () => ({
   vfImages: [ 'URL1', 'URL2', 'URL3' ],
   vfTransitions: [ 'fade', 'cube', 'book', 'wave' ],
}),
```

::: tip

Check [transitions](../transitions/) to see a list and their names.

:::

#### Custom transitions

To use a custom transition, we need to import it and include it in the transitions array with the following schema:

``` js
{
   name: String,
   component: Object<VueComponent>,
}
```

Example:

``` html
<vue-flux
   :images="vfImages"
   :transitions="vfTransitions">
</vue-flux>
```

``` js
import CustomTransition1 from 'CustomTransition1.vue';
import CustomTransition2 from 'CustomTransition2.vue';

export default {
   data: () => ({
      vfImages: [ 'URL1', 'URL2', 'URL3' ],

      vfTransitions: [{
         name: 'CustomTransition1',
         component: CustomTransition1,
      }, {
         name: 'CustomTransition2',
         component: CustomTransition2,
      }],
   }),
}
```

::: tip

Check [custom transitions](../custom-transitions) to know more about how to create custom transitions.

:::

#### Transition options

In order to modify the parameters of transitions, you need to do it using an object with the following schema:

``` js
{
   name: 'blinds2d',
   options: {
      ...
   },
}
```

To know which options the included transions have, go to the transition documentation.

Following is an example of customizing an included transition and a custom transition.

``` html
<vue-flux
   :images="vfImages"
   :transitions="vfTransitions">
</vue-flux>
```

``` js
import CustomTransition from 'CustomTransition.vue';

export default {
   data: () => ({
      vfImages: [ 'URL1', 'URL2', 'URL3' ],

      vfTransitions: [{
         name: 'blinds2',
         options: {
            tileDuration: 1000,
            easing: 'ease-in-out',
         },

      }, {
         name: 'CustomTransition',
         component: CustomTransition,
         options: {
            rows: 4,
            cols: 10,
            totalDuration: 3000,
         },
      }],
   }),
}
```


### images

The array containing the image URLs to be displayed.

- **Type:** `Array`
- **Required:** `false`

::: tip

If an image can not be loaded will be omitted displaying a console warning message.

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
- By default the width will be the parent's width and height.
- If no height defined, will calculate the height using a 16:9 ratio.

::: danger

If you want to define a size, avoid using `width` and `height` directly in the style attibute, as those values will be applied always, even in full screen, not letting the slider reisze itself. So better use a class for `vue-flux` component or set the `style` attribute in the parent.

:::

## Properties

### config

Is the set of slider options that will be applied.

- **Type:** `Object`

::: warning

Do not modify this values directly, instead use the [options](#options) attribute.

:::

### size

Size in pixels having width and height.

- **Type:** `Object`

### loaded

Indicates if the images have been preloaded and slider is initialized.

- **Type:** `Boolean`

### mouseOver

Indicates whether the mouse has moved recently over the slider. After moving the mouse, the time that this value will remain `true` is defined through the [autohideTime](#options) option.

- **Type:** `Boolean`

### Display

Is the display controller in charge of full screen mostly.

- **Type:** `DisplayController`

### Timers

Is the timers' controller and basically manages the image, transition and mouse over timers.

- **Type:** `TimersController`

### Transitions

Is the transitions' controller that will run them and fire the events.

- **Type:** `TransitionsController`

### Touches

Is the controller that manages the touch screens functionality.

- **Type:** `TouchesController`

### Images

The controller in charge of loading and image displaying.

- **Type:** `ImagesController`

## Methods

### resize()

Call to recalculate the sizes of the slider.

### enterFullscreen()

Sets the slider in full screen.

### exitFullscreen()

Leaves the full screen mode.

### toggleFullscreen()

Toggles full screen mode.

### play(number: `Number | String`, delay: `Number`)

Starts displaying the images by the interval specified with [delay](#options) option.

#### number

The number is the image number to start with, and can also be 'previous' and 'next'.

* **Type:** `Number | 'previous' | 'next'`
* **Required:** `false`
* **Default:** `'next'`

#### delay

The delay is the time in *ms* to start. If not ime specified, the one set in config as `delay` will be used.

* **Type:** `Number`
* **Required:** `false`
* **Default:** [config.delay](#options)

### stop()

Stops playing images and remains in the current.

### showImage(number: `Number`, transition: `String`)

Displays the image specified by image number (or 'next' or 'previous') and using the specified transition.

#### number

If no number, the next image will be showed.

* **Type:** Number
* **Required:** false

#### transition

If no number, the next transition will be run.

* **Type:** Number
* **Required:** false

## Events

* `created`: fired when the slider component is created.
* `mounted`: fired when the slider component is mounted.
* `destroyed`: fired when the slider component is destroyed.
* `options-updated`: fired when the options have been updated.
* `ready`: fired when the slider is ready and will start to display images.
* `play`: fired when auto playing images.
* `stop`: fired when stopped to auto play images.
* `show`: fired when requested to show an image.
* `fullscreen-enter`: fired when entered in full screen mode.
* `fullscreen-exit`: fired when exit from full screen.
* `images-preload-start`: fired when started to preload images.
* `images-preload-end`: fired when finished to preoload images.
* `images-lazyload-start`: fired when start to lazy loading images.
* `images-lazyload-end`: fired when finished to lay loading images.
* `transitions-updated`: fired when transitions updated.
* `transition-start`: fired when transition begin.
* `transition-cancel`: fired when transion is running and is being cancelled.
* `transition-end`: fired when transition finish.

## References

### image

The component that shows the image between transitions.

* **Type:** `FluxImage`

### transition

The component that runs the transition between images.

* **Type:** `FluxTransition`

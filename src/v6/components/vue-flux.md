---
---

## Description

This is the main component of the slider and will be the frame that displays the images.

## Attributes

All the following attributes are reactive, so if you change their value at any moment, the slider will be updated automatically.

| Attribute | Type | Required | Description |
|-----------|------|----------|-------------|
| options | Object | false | An object containing the slider [options](#options) |
| transitions | Array | true | An array with [transitions](#transitions) |
| images | Array | false | An array with the images URL |
| captions | Array | false | An array with captions to be displayed on each image |

## Options

| Option | Type | Default | Description |
|--------|------|---------|-------------|
| allowFullscreen | Boolean | false | Allows the slider to be displayed in full screen |
| allowToSkipTransition | Boolean | true | If enabled you will be able to skip the running transition, otherwise you need to wait to interact again |
| autohideTime | Number | 1000 | The time in ms that the controls and index button will stay until disappear. If set to 0 they will never disappear |
| autoplay | Boolean | false | Autoplay images when loaded |
| bindKeys | Boolean | false | Binds the arrow keys to show next or previous |
| delay | Number | 5000 | The time in ms that an image will be displayed before changing to next |
| enableGestures | Boolean | false | Define if in touchable screens should show control and index icons or use gestures |
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

### Transitions

This is an array that will own the transition names or custom transitions to be used between images.

The transitions will be run in the order defined and then will begin again from the first.

If a transition is not found, an error will be thrown.

#### Included transitions

Refer to [Transitions](../Transitions) to know more about included transitions.

``` html
<vue-flux :images="vfImages" :transitions="vfTransitions"></vue-flux>
```

``` js
export default {
   data: () => ({
      vfImages: [ 'URL1', 'URL2', 'URL3' ],
      vfTransitions: [ 'fade', 'cube', 'book', 'wave' ],
   }),
}
```

#### Custom transitions

To use a custom transition, we need to import it and include it in the transitions array with the following schema:

``` js
{
   name: 'custom-component',
   component: CustomComponent,
}
```

Refer to [Custom transitions](../Custom-Transitions) to know more about how to create custom transitions.

``` html
<vue-flux :images="vfImages" :transitions="vfTransitions"></vue-flux>
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
<vue-flux :images="vfImages" :transitions="vfTransitions"></vue-flux>
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

### Images

The array containing the image URLs to be displayed.

If an image can not be loaded will be omitted displaying a console warning message.

### Captions

Captions are the texts that will be displayed when its image is showed.

Also will be displayed as popover in the components `FluxIndex` and `FluxPagination` when you stop the mouse over an element.

Each caption can be defined as simple string or an object with any data you want **and the property** `text` in it as plain text. Here it is an extended caption example:

``` js
{
   text: 'This is a caption',
   url: 'url',
   color: '#abc',
}
```

This way you can customize considerably the [caption's slot](Complements/FluxCaption/#templating) with any data you need and reach it easily.

### Size

The slider size is defined the following way.

By default the width will be the parent's width and height.

If no height defined, will calculate the height using a 16:9 ratio.

If you want to define a size, avoid using `width` and `height` in the style attibte as those values will be applied always, even in full screen. So better use a class in `vue-flux` component to set the `style` attribute in the parent to set a specific size.

## Properties

This are the component properties that you can access programatically.

| Name | Type | Description |
|------|------|-------------|
| config | Object | Set of slider options |
| size | Object | Size in pixels having width and height |
| loaded | Boolean | Determines if the images have been loaded and slider is initialized |
| mouseOver | Boolean | Indicates wether the mouse has moved recently over the slider |
| Display | DisplayController | Is the display controller in charge of full screen mostly |
| Timers | TimersController | Is the timers' controller and basically manages the image, transition and mouse over timers |
| Transitions | TransitionsController | Is the transitions' controller that will run them and fire the events |
| Touches | TouchesController | Is the controller that manages the touch screens functionality |
| Images | ImagesController | The controller in charge of loading and image displaying |

## Methods

| Method | Parameters | Description |
|--------|------------|-------------|
| resize |  | Call to recalculate the sizes of the slider |
| enterFullscreen | | Sets the slider in full screen |
| exitFullscreen | | Leaves the full screen mode |
| toggleFullscreen | | Toggles full screen mode |
| play | index | Will start displaying the images by the interval specified in config. The index is the image number to start with, and can also be 'previous' and 'next' |
| stop | | Stops playing images and remains in the current |
| toggleAutoplay |  | Toggles auto play |
| showImage | index, transition | Displays the image specified by image index (or 'next' or 'previous') and using the specified transition. If no index specified will display next and if no transition specified will use the next defined in transitions |

## Events

| Name | Description |
|------|-------------|
| created | Fired when the slider component is created |
| mounted | Fired when the slider component is mounted |
| destroyed | Fired when the slider component is destroyed |
| options-updated | Fired when the options have been updated |
| ready | Fired when the slider is ready and will start to display images |
| play | Fired when auto playing images |
| stop | Fired when stopped to auto play images |
| show | Fired when requested to show an image |
| fullscreen-enter | Fired when entered in full screen mode |
| fullscreen-exit | Fired when exit from full screen |
| images-preload-start | Fired when started to preload images |
| images-preload-end | Fired when finished to preoload images |
| images-lazyload-start | Fired when start to lazy loading images |
| images-lazyload-end | Fired when finished to lay loading images |
| transitions-updated | Fired when transitions updated |
| transition-start | Fired when transition begin |
| transition-cancel | Fired when transion is running and is being cancelled |
| transition-end | Fired when transition finish |

## References

| Name | Component | Description |
|------|-----------|-------------|
| image | FluxImage | Displays the current image |
| transition | FluxTransition | Runs the transition between images |
